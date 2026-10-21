import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const DESTINATION_EMAIL = "paularm.marketing@gmail.com";
const FROM_EMAIL = "Paula RM <web@paularmmarketing.com>";

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const ALLOWED_HOSTNAMES = ["paularmmarketing.com", "www.paularmmarketing.com"];

type TurnstileVerification = {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

function invalidRequest() {
  return NextResponse.json(
    { error: "Comprueba los datos del formulario." },
    { status: 400 },
  );
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      return invalidRequest();
    }

    const raw = await request.text();

    if (raw.length > 10000) {
      return invalidRequest();
    }

    let body: unknown;

    try {
      body = JSON.parse(raw);
    } catch {
      return invalidRequest();
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return invalidRequest();
    }

    const data = body as Record<string, unknown>;

    const { name, email, message, website, turnstileToken } = data;

    // Campo trampa para bots
    if (typeof website === "string" && website.trim()) {
      return NextResponse.json({ success: true });
    }

    // Validación de campos
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      typeof turnstileToken !== "string"
    ) {
      return invalidRequest();
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      cleanName.length < 2 ||
      cleanName.length > 80 ||
      cleanEmail.length > 254 ||
      !emailPattern.test(cleanEmail) ||
      cleanMessage.length < 10 ||
      cleanMessage.length > 3000
    ) {
      return invalidRequest();
    }

    if (turnstileToken.length < 1 || turnstileToken.length > 2048) {
      return NextResponse.json(
        { error: "Completa la verificación de seguridad." },
        { status: 403 },
      );
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!secretKey || !resendApiKey) {
      console.error("Faltan variables de entorno del formulario.");

      return NextResponse.json(
        {
          error: "El servicio de contacto no está disponible.",
        },
        { status: 503 },
      );
    }

    // Verificación de Turnstile en el servidor
    const verificationResponse = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: turnstileToken,
      }),
      cache: "no-store",
    });

    if (!verificationResponse.ok) {
      console.error("Cloudflare no ha podido verificar el token.");

      return NextResponse.json(
        {
          error: "No se ha podido completar la verificación.",
        },
        { status: 502 },
      );
    }

    const verification =
      (await verificationResponse.json()) as TurnstileVerification;

    if (!verification.success) {
      return NextResponse.json(
        {
          error: "Verificación no válida o caducada. Inténtalo de nuevo.",
        },
        { status: 403 },
      );
    }

    // Comprobar el dominio en producción
    if (
      process.env.NODE_ENV === "production" &&
      !ALLOWED_HOSTNAMES.includes(verification.hostname ?? "")
    ) {
      return NextResponse.json(
        {
          error: "Verificación de dominio no válida.",
        },
        { status: 403 },
      );
    }

    // Enviar email únicamente tras validar Turnstile
    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [DESTINATION_EMAIL],
      replyTo: cleanEmail,
      subject: "Nueva consulta desde la web de Paula RM",
      text: [
        "Nueva consulta recibida desde la web.",
        "",
        `Nombre: ${cleanName}`,
        `Correo: ${cleanEmail}`,
        "",
        "Mensaje:",
        cleanMessage,
      ].join("\n"),
    });

    if (error) {
      console.error("Error de envío en Resend:", error);

      return NextResponse.json(
        {
          error: "No se ha podido enviar el mensaje.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error en la API de contacto:", error);

    return NextResponse.json(
      {
        error: "Ha ocurrido un error al procesar el mensaje.",
      },
      { status: 500 },
    );
  }
}
