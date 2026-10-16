"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Camera, Clapperboard, Lightbulb, Sparkles } from "lucide-react";

type BehindTheScenesImages = {
  ideas?: string;
  shooting?: string;
  editing?: string;
};

type BehindTheScenesProps = {
  images?: BehindTheScenesImages;
};

const moments = [
  {
    id: "ideas" as const,
    number: "01",
    label: "El comienzo",
    title: "Todo empieza con una idea.",
    description:
      "Referencias, inspiración, notas y ese momento en el que empieza a tomar forma un proyecto.",
    icon: Lightbulb,
    background: "bg-[#F8C5D6]",
    accent: "bg-[#F6E49E]",
    text: "text-[#873D5C]",
  },
  {
    id: "shooting" as const,
    number: "02",
    label: "En acción",
    title: "Y después toca crear.",
    description:
      "Cámaras, grabaciones, contenido y todo lo que ocurre antes de publicar.",
    icon: Camera,
    background: "bg-[#F6D6B8]",
    accent: "bg-[#ED98AC]",
    text: "text-[#855146]",
  },
  {
    id: "editing" as const,
    number: "03",
    label: "Los detalles",
    title: "Hasta que todo encaja.",
    description:
      "Edición, ajustes, planificación y el trabajo que transforma una idea en contenido.",
    icon: Clapperboard,
    background: "bg-[#DCCEF0]",
    accent: "bg-[#F8BDD6]",
    text: "text-[#654A87]",
  },
];

export default function BehindTheScenes({ images }: BehindTheScenesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="detras-de-camaras"
      className="relative isolate overflow-hidden bg-[#F9EDF0] py-20 text-[#30202A] sm:py-24 lg:py-32"
    >
      {/* Decoración */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#F6BFD5]/30 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Encabezado */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45178]">
              06 / Behind the scenes
            </span>

            <span className="h-px w-16 bg-[#DB9AB5]" />

            <Sparkles size={18} className="text-[#E94E8F]" />
          </div>

          <h2 className="mt-8 text-[clamp(2.7rem,5.5vw,5.5rem)] font-black leading-[1.05] tracking-[-0.07em]">
            Lo que no
            <br />
            <span className="font-serif font-normal italic text-[#E94E8F]">
              siempre se ve.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#806575] sm:text-lg">
            Porque detrás de cada resultado hay ideas, pruebas, creatividad y un
            montón de pequeños detalles que también forman parte de la historia.
          </p>
        </motion.div>

        {/* Galería */}

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-5 lg:gap-8">
          {moments.map((moment, index) => {
            const Icon = moment.icon;
            const imageSrc = images?.[moment.id];

            return (
              <motion.article
                key={moment.id}
                initial={reduceMotion ? false : { opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
                className="min-w-0"
              >
                {/* Fotografía */}

                <div
                  className={`group relative aspect-[4/5] overflow-hidden rounded-[26px] shadow-[0_25px_65px_-40px_rgba(90,35,65,0.25)] sm:rounded-[30px] ${moment.background}`}
                >
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={`Momento creativo de Paula: ${moment.label}`}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <div
                        aria-hidden="true"
                        className={`absolute -right-12 -top-12 h-48 w-48 rounded-full ${moment.accent}`}
                      />

                      <div
                        aria-hidden="true"
                        className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full border-[20px] border-white/35"
                      />

                      <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/35 backdrop-blur-sm">
                          <Icon
                            size={34}
                            className={moment.text}
                            strokeWidth={1.5}
                          />
                        </div>

                        <p
                          className={`font-serif text-3xl italic ${moment.text}`}
                        >
                          {moment.label}
                        </p>

                        <p
                          className={`text-xs font-bold uppercase tracking-[0.15em] opacity-70 ${moment.text}`}
                        >
                          Fotografía por incorporar
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Número flotante */}

                  <div className="absolute left-5 top-5 z-20 rounded-full border border-white/30 bg-white/85 px-4 py-2 text-xs font-bold text-[#563A48] backdrop-blur-sm">
                    {moment.number}
                  </div>
                </div>

                {/* Texto */}

                <div className="pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B45178]">
                    {moment.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.04em] sm:text-[27px]">
                    {moment.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#806575]">
                    {moment.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Frase editorial */}

        <div className="mt-20 border-t border-[#E5BECD] pt-8 sm:mt-24">
          <p className="max-w-3xl font-serif text-2xl italic leading-relaxed text-[#AD587E] sm:text-3xl">
            A veces, la parte más bonita de una idea es todo lo que ocurre antes
            de verla terminada.
          </p>
        </div>
      </div>
    </section>
  );
}
