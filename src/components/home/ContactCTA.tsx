"use client";

import { useRef, useState, type FormEvent } from "react";
import { trackContactLead } from "@/lib/analytics";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import {
  ArrowUpRight,
  Lightbulb,
  Heart,
  Mail,
  Sparkles,
  Send,
  CheckCircle2,
} from "lucide-react";

import { Turnstile } from "@marsidev/react-turnstile";
import type { TurnstileInstance } from "@marsidev/react-turnstile";

type ContactCTAProps = {
  email?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactCTA({
  email,
  instagramUrl,
  linkedinUrl,
}: ContactCTAProps) {
  const reduceMotion = useReducedMotion();

  const [status, setStatus] = useState<FormStatus>("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    if (!turnstileToken) {
      setErrorMessage("Completa la verificación de seguridad.");
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      turnstileToken,
    };

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "No se ha podido enviar el mensaje.");
      }

      form.reset();

      trackContactLead();

      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No se ha podido enviar el mensaje.",
      );
      setStatus("error");
    } finally {
      // Los tokens son de un solo uso
      setTurnstileToken("");
      turnstileRef.current?.reset();
    }
  }

  return (
    <section
      id="contacto"
      className="relative isolate overflow-hidden bg-[#30202E] py-24 text-white sm:py-28 lg:py-36"
    >
      {/* Decoración */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 h-[550px] w-[550px] rounded-full bg-[#E65B95]/20 blur-[115px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-40 h-[450px] w-[450px] rounded-full bg-[#F5B8D1]/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] px-7 py-14 sm:rounded-[36px] sm:px-12 sm:py-20 lg:px-16 lg:py-24"
        >
          {/* Flor decorativa */}
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-12 rotate-12 opacity-25 sm:right-7 sm:top-7"
          >
            <Lightbulb
              size={170}
              strokeWidth={0.7}
              className="text-[#F5A0C5]"
            />
          </div>

          {/* Presentación */}
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-[#FFA5CA]" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFAFCE]">
                07 / Let&apos;s connect
              </p>
            </div>

            <h2 className="mt-9 text-[clamp(3.1rem,7vw,7.5rem)] font-black leading-[0.98] tracking-[-0.075em]">
              Todo empieza
              <br />
              con una{" "}
              <span className="font-serif font-normal italic text-[#FF9DC5]">
                idea.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#E1C8D5] sm:text-xl">
              ¿Tienes un proyecto, una marca o una idea dando vueltas por tu
              cabeza? Quizá podamos convertirla en algo especial.
            </p>

            {/* Acciones */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#formulario-contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F4A0C4] px-7 py-4 text-sm font-bold text-[#38202D] no-underline transition hover:bg-white"
              >
                <Mail size={18} />
                Hablemos de tu idea
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <Link
                href="/#proyectos"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white no-underline transition hover:bg-white/10"
              >
                Ver mis proyectos
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* Redes sociales */}
            {(instagramUrl || linkedinUrl) && (
              <div className="mt-10 flex flex-wrap gap-6">
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#EBC8D9] transition hover:text-white"
                  >
                    Instagram ↗
                  </a>
                )}

                {linkedinUrl && (
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#EBC8D9] transition hover:text-white"
                  >
                    LinkedIn ↗
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Formulario */}
          <div
            id="formulario-contacto"
            className="relative z-10 mt-16 max-w-3xl scroll-mt-28 rounded-[26px] border border-white/10 bg-[#412D3E] p-6 sm:mt-20 sm:p-10"
          >
            <div className="mb-9">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFA5CA]">
                Cuéntame tu idea
              </span>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                ¿En qué puedo ayudarte?
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#E1C8D5] sm:text-base">
                Rellena el formulario y hablamos de tu próximo proyecto.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              onChange={() => {
                if (status === "success" || status === "error") {
                  setStatus("idle");
                }
              }}
              aria-busy={status === "sending"}
              className="space-y-6"
            >
              {/* Campo antispam oculto */}
              <div
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="contact-website">Sitio web</label>

                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Nombre y correo */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Tu nombre
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    maxLength={80}
                    autoComplete="name"
                    placeholder="¿Cómo te llamas?"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#F4A0C4] focus:ring-2 focus:ring-[#F4A0C4]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Tu correo electrónico
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="tu@email.com"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#F4A0C4] focus:ring-2 focus:ring-[#F4A0C4]/20"
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-white"
                >
                  Cuéntame tu proyecto
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  placeholder="Estoy pensando en..."
                  className="w-full resize-y rounded-xl border border-white/15 bg-white/[0.07] px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/45 focus:border-[#F4A0C4] focus:ring-2 focus:ring-[#F4A0C4]/20"
                />
              </div>

              {/* Protección de datos */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <input
                    id="contact-privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 shrink-0 rounded border-white/30 accent-[#F4A0C4]"
                  />

                  <label
                    htmlFor="contact-privacy"
                    className="text-sm leading-6 text-[#E1C8D5]"
                  >
                    He leído la información sobre el tratamiento de mis datos
                    personales en la{" "}
                    <Link
                      href="/privacidad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#FFB6D3] underline underline-offset-4 hover:text-white"
                    >
                      Política de Privacidad
                    </Link>
                    . *
                  </label>
                </div>

                <p className="pl-7 text-xs leading-5 text-[#E1C8D5]">
                  Los datos facilitados se utilizarán para gestionar y responder
                  tu consulta. Consulta la Política de Privacidad para conocer
                  más información sobre el tratamiento de tus datos.
                </p>
              </div>

              {/* Protección Cloudflare */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-white">
                  Verificación de seguridad
                </p>

                {siteKey ? (
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={siteKey}
                    options={{
                      theme: "dark",
                      language: "es",
                    }}
                    onSuccess={(token) => {
                      setTurnstileToken(token);
                    }}
                    onExpire={() => {
                      setTurnstileToken("");
                    }}
                    onError={() => {
                      setTurnstileToken("");
                      setErrorMessage(
                        "No se ha podido realizar la verificación de seguridad.",
                      );
                      setStatus("error");
                    }}
                  />
                ) : (
                  <p className="text-sm text-[#FFB6C1]">
                    Verificación de seguridad no configurada.
                  </p>
                )}
              </div>

              {/* Envío */}
              <div className="flex flex-wrap items-center justify-between gap-5">
                <p className="max-w-sm text-xs leading-5 text-[#E1C8D5]">
                  Tu mensaje se enviará directamente a mi correo de contacto.
                </p>

                <button
                  type="submit"
                  disabled={status === "sending" || !turnstileToken}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#F4A0C4] px-7 py-3.5 text-sm font-bold text-[#38202D] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}

                  <Send size={17} />
                </button>
              </div>

              {/* Estado del envío */}
              <div aria-live="polite">
                {status === "success" && (
                  <p
                    role="status"
                    className="flex items-center gap-2 text-sm font-semibold text-[#B5E6B9]"
                  >
                    <CheckCircle2 size={19} />
                    Mensaje enviado correctamente. ¡Hablamos pronto!
                  </p>
                )}

                {status === "error" && (
                  <p
                    role="alert"
                    className="text-sm font-medium text-[#FFB6C1]"
                  >
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>

            {/* Correo alternativo */}
            {email && (
              <p className="mt-8 border-t border-white/10 pt-6 text-sm text-[#E1C8D5]">
                También puedes escribirme a{" "}
                <a
                  href={`mailto:${email}`}
                  className="font-semibold text-[#FFB6D3] underline underline-offset-4 hover:text-white"
                >
                  {email}
                </a>
              </p>
            )}
          </div>

          {/* Pie */}
          <div className="relative z-10 mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7">
            <span className="font-serif text-xl italic text-[#FFB6D3]">
              Ideas made with love.
            </span>

            <div className="flex items-center gap-2 text-[#F2B5CE]">
              <Heart size={17} />

              <span className="text-xs font-bold uppercase tracking-[0.13em]">
                Paula Creative
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
