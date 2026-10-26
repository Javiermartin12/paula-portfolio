"use client";

import { useState } from "react";
import Image from "next/image";

import { motion, useReducedMotion } from "motion/react";

import { Lightbulb, Camera, BarChart3, Play, Sparkles } from "lucide-react";

/* =========================================================
   PROPS
========================================================= */

type CreativeWorldProps = {
  photoSrc?: string;
  videoSrc?: string;
  videoPoster?: string;
};

/* =========================================================
   FASES CREATIVAS
========================================================= */

const creativeSteps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Imaginar",
    description:
      "Encontrar una idea que tenga sentido para la marca y las personas.",
  },
  {
    number: "02",
    icon: Camera,
    title: "Crear",
    description: "Convertir esa idea en contenido, imágenes y experiencias.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Conectar",
    description: "Analizar cómo funciona el contenido y seguir mejorando.",
  },
];

/* =========================================================
   CREATIVE WORLD
========================================================= */

export default function CreativeWorld({
  photoSrc,
  videoSrc,
  videoPoster,
}: CreativeWorldProps) {
  const reduceMotion = useReducedMotion();

  const [videoStarted, setVideoStarted] = useState(false);

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 35 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.15,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.75,
      delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="mi-mundo"
      className="relative isolate overflow-hidden bg-[#FFF9F4] py-20 text-[#30202A] sm:py-24 lg:py-32"
    >
      {/* DECORACIÓN DE FONDO */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#F9CDDD]/30 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[#FFE2B3]/30 blur-[100px]"
      />

      {/* CONTENEDOR PRINCIPAL */}

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================================================
            ENCABEZADO
        ================================================ */}

        <motion.div {...reveal()} className="max-w-4xl">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45178]">
              03 / Mi mundo creativo
            </span>

            <span className="h-px w-16 bg-[#DB9AB5]" />

            <Sparkles size={18} className="text-[#E94E8F]" />
          </div>

          <h2 className="mt-8 text-[clamp(2.6rem,5vw,5.2rem)] font-black leading-[1.06] tracking-[-0.065em]">
            Las ideas están bien.
            <br />
            <span className="font-serif font-normal italic text-[#E94E8F]">
              Hacerlas realidad
            </span>
            <br />
            es mejor.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#806575] sm:text-lg">
            Detrás de cada publicación, campaña o proyecto hay una idea, un
            proceso creativo y muchas decisiones que no siempre se ven.
          </p>
        </motion.div>

        {/* ================================================
            COMPOSICIÓN VISUAL
        ================================================ */}

        <div className="mt-14 grid items-start gap-6 sm:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* ============================================
              VÍDEO PRINCIPAL DE PAULA
          ============================================ */}

          <motion.div {...reveal(0.1)} className="relative">
            <div className="relative overflow-hidden rounded-[28px] bg-[#382535] shadow-[0_25px_70px_-40px_rgba(66,27,47,0.4)] sm:rounded-[34px]">
              <div className="relative aspect-[4/5] sm:aspect-[16/12] lg:aspect-[4/4.5]">
                {videoSrc ? (
                  videoStarted ? (
                    /* VÍDEO REAL */

                    <video
                      controls
                      autoPlay
                      playsInline
                      preload="metadata"
                      poster={videoPoster}
                      className="absolute inset-0 h-full w-full bg-[#241822] object-contain"
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Tu navegador no admite la reproducción de este vídeo.
                    </video>
                  ) : (
                    /* PORTADA ANTES DE REPRODUCIR */

                    <button
                      type="button"
                      onClick={() => setVideoStarted(true)}
                      aria-label="Reproducir vídeo creativo de Paula"
                      className="group absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#382535] text-center text-white"
                    >
                      {/* PORTADA */}

                      {videoPoster ? (
                        <Image
                          src={videoPoster}
                          alt=""
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#75425D,#30202E_80%)]" />
                      )}

                      {/* OSCURECIMIENTO */}

                      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/35" />

                      {/* BOTÓN PLAY */}

                      <span className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/40 bg-white/20 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E94E8F]">
                        <Play
                          size={36}
                          fill="currentColor"
                          strokeWidth={1.5}
                          className="ml-1"
                        />
                      </span>

                      {/* ETIQUETA */}

                      <span className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-[#30202E]/80 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                        Reproducir vídeo
                      </span>
                    </button>
                  )
                ) : (
                  /* ESTADO PROVISIONAL */

                  <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden px-8 text-center">
                    <div
                      aria-hidden="true"
                      className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E66C9A]/30 blur-[50px]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#E88CAF]/20 blur-[60px]"
                    />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                      <Play size={30} fill="currentColor" />
                    </div>

                    <p className="relative mt-7 font-serif text-3xl italic text-white sm:text-4xl">
                      Lights, camera,
                      <br />
                      creativity!
                    </p>

                    <p className="relative mt-5 max-w-xs text-sm leading-6 text-[#E8C7D5]">
                      Una mirada al proceso creativo y al trabajo detrás de cada
                      idea.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* ETIQUETA DEL VÍDEO */}

            <div className="mt-5 flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#A76C82]">
                Detrás de las ideas
              </p>

              <span className="font-serif text-lg italic text-[#E94E8F]">
                behind the scenes
              </span>
            </div>
          </motion.div>

          {/* ============================================
              FOTOGRAFÍA SECUNDARIA
          ============================================ */}

          <motion.div {...reveal(0.25)} className="relative lg:mt-20">
            <div className="relative overflow-hidden rounded-[28px] bg-[#F4ABC6] shadow-[0_25px_70px_-40px_rgba(133,49,85,0.3)] sm:rounded-[34px]">
              <div className="relative aspect-[4/5] w-full">
                {photoSrc ? (
                  <Image
                    src={photoSrc}
                    alt="Paula trabajando en un proyecto creativo"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                ) : (
                  /* FOTOGRAFÍA PENDIENTE */

                  <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden px-7 text-center">
                    <div
                      aria-hidden="true"
                      className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#FFDCE8]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#E986AF]"
                    />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/60 bg-white/30 text-[#A54670]">
                      <Camera size={37} strokeWidth={1.5} />
                    </div>

                    <p className="relative mt-6 font-serif text-2xl italic text-[#71364F] sm:text-3xl">
                      In my creative era.
                    </p>

                    <p className="relative mt-4 max-w-xs text-sm leading-6 text-[#8E506A]">
                      Mi forma de crear, experimentar y transformar ideas en
                      contenido.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* ETIQUETA FOTOGRAFÍA */}

            <div className="mt-5 flex items-center gap-3">
              <Sparkles size={17} className="text-[#E94E8F]" />

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#A76C82]">
                Creatividad en acción
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================================================
            PROCESO CREATIVO
        ================================================ */}

        <div className="mt-24 border-t border-[#EBCDD7] pt-12 sm:mt-28 sm:pt-14">
          <motion.div {...reveal()} className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45178]">
              Cómo cobran vida las ideas
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {creativeSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  {...reveal(index * 0.12)}
                  className="relative"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FCE6EE] text-[#D95689]">
                      <Icon size={25} strokeWidth={1.6} />
                    </div>

                    <span className="text-3xl font-black tracking-[-0.06em] text-[#EBCAD7]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold tracking-[-0.04em] text-[#382630] sm:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#806575] sm:text-base">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
