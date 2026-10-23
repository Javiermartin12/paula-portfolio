import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Política de Cookies | Paula RM Marketing",
  description:
    "Información sobre las cookies y tecnologías utilizadas en la web de Paula RM Marketing.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F5] text-[#30202A]">
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold text-[#D64C83] transition hover:text-[#A73566]"
        >
          ← Volver al portfolio
        </Link>

        <div className="mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45178]">
            Información sobre cookies
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Política de{" "}
            <span className="font-serif font-normal italic text-[#E94E8F]">
              cookies.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#806575]">
            Información sobre el uso de cookies y otras tecnologías relacionadas
            con el funcionamiento, la seguridad y el análisis de este sitio web.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          <CookieSection title="1. Responsable">
            <p>
              Este sitio corresponde a la actividad profesional de Paula RM
              Marketing.
            </p>

            <p className="mt-4">
              Puedes consultar los datos de la titular en el{" "}
              <Link
                href="/aviso-legal"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Aviso Legal
              </Link>
              .
            </p>

            <p className="mt-4">
              Correo de contacto:{" "}
              <a
                href="mailto:paularm.marketing@gmail.com"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                paularm.marketing@gmail.com
              </a>
              .
            </p>
          </CookieSection>

          <CookieSection title="2. Qué son las cookies">
            <p>
              Las cookies son pequeños archivos que un sitio web puede almacenar
              en el navegador de una persona usuaria.
            </p>

            <p className="mt-4">
              Pueden utilizarse para permitir funcionalidades técnicas, mantener
              la seguridad, recordar preferencias o analizar la navegación.
            </p>

            <p className="mt-4">
              Otras tecnologías, como el almacenamiento local, pueden utilizarse
              para finalidades relacionadas.
            </p>
          </CookieSection>

          <CookieSection title="3. Tecnologías necesarias">
            <p>
              Esta web utiliza Next.js y Vercel como infraestructura de
              funcionamiento.
            </p>

            <p className="mt-4">
              El formulario de contacto utiliza Resend para el envío de mensajes
              y Cloudflare Turnstile para comprobar las solicitudes y reducir
              los envíos automatizados.
            </p>

            <p className="mt-4">
              Estas funciones pueden implicar operaciones técnicas necesarias
              para prestar el servicio y mantener la seguridad de la web.
            </p>

            <p className="mt-4">
              La configuración de Turnstile utilizada tiene desactivada la
              función de pre-clearance.
            </p>
          </CookieSection>

          <CookieSection title="4. Google Analytics 4">
            <p>
              Si la persona visitante acepta las cookies analíticas,
              utilizaremos Google Analytics 4, un servicio de análisis de
              Google.
            </p>

            <p className="mt-4">
              Este servicio permite conocer, de forma agregada, datos como
              visitas, páginas consultadas, procedencia del tráfico e
              interacciones con la web.
            </p>

            <p className="mt-4">
              También puede utilizarse para medir el número de formularios
              enviados correctamente, sin incluir en los eventos analíticos los
              nombres, correos electrónicos o mensajes facilitados por las
              personas usuarias.
            </p>

            <p className="mt-4">
              Las cookies habituales de GA4 incluyen
              <strong> _ga</strong> y otras cookies con nombres que empiezan por
              <strong> _ga_</strong>, utilizadas para diferenciar sesiones y
              visitantes. Su duración puede alcanzar aproximadamente dos años,
              según la configuración aplicable.
            </p>

            <p className="mt-4">
              Las cookies analíticas son opcionales. La etiqueta de Google
              Analytics no se cargará mientras no se haya otorgado el
              consentimiento.
            </p>
          </CookieSection>

          <CookieSection title="5. Gestión del consentimiento">
            <p>
              Al entrar por primera vez en la web, se ofrece la posibilidad de
              aceptar o rechazar las cookies analíticas.
            </p>

            <p className="mt-4">
              La decisión se almacena localmente en el navegador durante un
              plazo máximo de 180 días, salvo que se modifiquen las preferencias
              o se eliminen los datos guardados.
            </p>

            <p className="mt-4">
              La preferencia podrá modificarse posteriormente mediante el botón
              «Cookies» disponible en la web.
            </p>

            <p className="mt-4">
              Al retirar el consentimiento, se dejará de cargar la analítica en
              las visitas posteriores y se intentarán eliminar las cookies de
              GA4 accesibles desde el dominio.
            </p>
          </CookieSection>

          <CookieSection title="6. Proveedores externos">
            <p>
              Google Analytics es proporcionado por Google y puede implicar
              tratamientos internacionales de datos conforme a sus condiciones y
              garantías de protección de datos aplicables.
            </p>

            <p className="mt-4">
              Puedes consultar la{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                política de privacidad de Google
              </a>
              .
            </p>

            <p className="mt-4">
              Los enlaces externos del portfolio pueden conducir a servicios que
              dispongan de sus propias políticas de cookies.
            </p>
          </CookieSection>

          <CookieSection title="7. Configuración del navegador">
            <p>
              Puedes consultar, bloquear o eliminar cookies mediante los ajustes
              de privacidad de tu navegador.
            </p>

            <p className="mt-4">
              El bloqueo de determinadas tecnologías técnicas puede afectar al
              funcionamiento de algunas funciones, como la verificación de
              seguridad del formulario.
            </p>
          </CookieSection>

          <CookieSection title="8. Protección de datos">
            <p>
              Para conocer más información sobre el tratamiento de datos
              personales, los proveedores y los derechos de las personas
              interesadas, consulta la{" "}
              <Link
                href="/privacidad"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Política de Privacidad
              </Link>
              .
            </p>
          </CookieSection>

          <CookieSection title="9. Actualizaciones">
            <p>
              Esta política podrá actualizarse cuando cambien los servicios, sus
              configuraciones o las tecnologías utilizadas.
            </p>

            <p className="mt-4 text-sm text-[#A77B8D]">
              Última actualización: octubre de 2026.
            </p>
          </CookieSection>
        </div>
      </section>
    </main>
  );
}

function CookieSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-[-0.03em] text-[#30202A] sm:text-2xl">
        {title}
      </h2>

      <div className="mt-4 text-sm leading-8 text-[#745867] sm:text-base">
        {children}
      </div>
    </section>
  );
}
