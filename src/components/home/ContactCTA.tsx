"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Flower2, Heart, Mail, Sparkles } from "lucide-react";

type ContactCTAProps = {
  email?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
};

export default function ContactCTA({
  email,
  instagramUrl,
  linkedinUrl,
}: ContactCTAProps) {
  const reduceMotion = useReducedMotion();

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
          viewport={{ once: true, amount: 0.2 }}
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
            <Flower2 size={170} strokeWidth={0.7} className="text-[#F5A0C5]" />
          </div>

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

            {/* Contacto */}

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {email ? (
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(
                    "Hablemos de un proyecto",
                  )}`}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F4A0C4] px-7 py-4 text-sm font-bold text-[#38202D] transition hover:bg-white"
                >
                  <Mail size={18} />
                  Hablemos de tu idea
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-medium text-[#E2C9D6]">
                  <Mail size={17} />
                  Contacto por incorporar
                </span>
              )}

              <Link
                href="/#proyectos"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver mis proyectos
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* Redes sociales, solo si existen */}

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

          {/* Pie de la composición */}

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
