"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import {
  ArrowDownRight,
  Camera,
  Lightbulb,
  Heart,
  Sparkles,
} from "lucide-react";

/* =========================================================
   PROPS
========================================================= */

type AboutProps = {
  photoSrc?: string;
};

/* =========================================================
   VALORES CREATIVOS
========================================================= */

const creativeValues = [
  {
    number: "01",
    title: "Pienso",
    description: "Estrategia antes de crear.",
  },
  {
    number: "02",
    title: "Creo",
    description: "Ideas que toman forma.",
  },
  {
    number: "03",
    title: "Conecto",
    description: "Contenido con intención.",
  },
];

/* =========================================================
   ABOUT
========================================================= */

export default function About({
  photoSrc = "/images/paula/retratopaula.webp",
}: AboutProps) {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 35,
        },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.2,
    },

    transition: {
      duration: 0.75,
      delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="sobre-mi"
      className="relative isolate scroll-mt-16 overflow-hidden bg-[#FFF0F5] py-20 text-[#30202A] sm:py-24 lg:py-32"
    >
      {/* DECORACIÓN DE FONDO */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#FBC7DC]/50 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-[#FFE0A4]/40 blur-[100px]"
      />

      {/* CONTENEDOR PRINCIPAL */}

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* IDENTIFICADOR */}

        <motion.div
          {...reveal()}
          className="mb-12 flex items-center gap-4 sm:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B44E7B]">
            02 / About me
          </span>

          <span className="h-px w-16 bg-[#DB9AB5]" />

          <Lightbulb size={18} strokeWidth={1.7} className="text-[#E94E8F]" />
        </motion.div>

        {/* COMPOSICIÓN PRINCIPAL */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* =============================================
              ZONA IZQUIERDA - FOTOGRAFÍA
          ============================================= */}

          <motion.div
            {...reveal(0.1)}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="relative h-[430px] w-full sm:h-[540px] lg:h-[590px]">
              {/* PAPEL DEL FONDO */}

              <div
                aria-hidden="true"
                className="absolute inset-x-[10%] bottom-[5%] top-[7%] rotate-[6deg] rounded-[26px] bg-[#EFA5C1] shadow-[0_25px_60px_-35px_rgba(150,45,90,0.3)]"
              />

              {/* RAYAS DECORATIVAS */}

              <div
                aria-hidden="true"
                className="absolute right-[3%] top-[2%] h-[43%] w-[44%] rotate-[12deg] rounded-[24px] opacity-60"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, #F6B4CD 0px, #F6B4CD 12px, #FFF0F5 12px, #FFF0F5 24px)",
                }}
              />

              {/* POLAROID */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.9,
                        rotate: -12,
                      }
                }
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: -5,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="absolute bottom-[8%] left-[11%] right-[13%] top-[7%] z-10 overflow-hidden rounded-[8px] bg-white p-3 shadow-[0_30px_70px_-30px_rgba(76,29,50,0.35)] sm:p-4"
              >
                {/* FOTOGRAFÍA DE PAULA */}

                <div className="relative h-[84%] overflow-hidden bg-[#F6B5D0]">
                  {photoSrc ? (
                    <Image
                      src={photoSrc}
                      alt="Fotografía de Paula"
                      fill
                      sizes="(max-width: 1024px) 85vw, 450px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="relative flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden">
                      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FFDCE8]" />

                      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#E78AAF]" />

                      <div className="absolute left-[12%] top-[16%] h-16 w-16 rounded-full border-4 border-white/60 sm:h-24 sm:w-24" />

                      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/35 text-[#A74572] backdrop-blur-sm sm:h-28 sm:w-28">
                        <Camera size={42} strokeWidth={1.3} />
                      </div>

                      <p className="relative z-10 px-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#91466A] sm:text-sm">
                        Tu foto aquí
                      </p>
                    </div>
                  )}
                </div>

                {/* FIRMA POLAROID */}

                <div className="flex h-[16%] items-center justify-center gap-2">
                  <Heart size={17} fill="#E94E8F" className="text-[#E94E8F]" />

                  <span className="font-serif text-xl italic text-[#A94D73] sm:text-2xl">
                    hey, i&apos;m Paula!
                  </span>
                </div>
              </motion.div>

              {/* PEGATINA SUPERIOR */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.6,
                        rotate: -25,
                      }
                }
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 12,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                }}
                className="absolute right-[1%] top-[1%] z-20 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#FFF0F5] bg-[#F6D46C] shadow-lg sm:h-28 sm:w-28"
              >
                <Lightbulb
                  size={43}
                  strokeWidth={1.5}
                  className="text-[#BE4F79] sm:h-14 sm:w-14"
                />
              </motion.div>

              {/* NOTA INFERIOR */}

              <motion.div
                {...reveal(0.6)}
                className="absolute bottom-[3%] right-[-1%] z-20 max-w-[165px] rotate-[7deg] rounded-[4px] bg-[#FFF2A8] px-5 py-4 shadow-[0_15px_30px_-15px_rgba(70,30,45,0.25)] sm:max-w-[200px] sm:px-6 sm:py-5"
              >
                <Sparkles size={19} className="mb-2 text-[#D66A7B]" />

                <p className="font-serif text-base italic leading-5 text-[#8D4E59] sm:text-xl sm:leading-6">
                  Creativity
                  <br />
                  looks good
                  <br />
                  on you!
                </p>
              </motion.div>

              {/* ETIQUETA LATERAL */}

              <div
                aria-hidden="true"
                className="absolute left-[-2%] top-[37%] z-20 hidden -rotate-[12deg] rounded-full bg-[#E94E8F] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md sm:block"
              >
                Creative mind ✳
              </div>
            </div>
          </motion.div>

          {/* =============================================
              ZONA DERECHA - PRESENTACIÓN PERSONAL
          ============================================= */}

          <div className="relative">
            {/* ETIQUETA DE PRESENTACIÓN */}

            <motion.div {...reveal(0.1)}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#EFC4D5] bg-white/70 px-4 py-2">
                <Sparkles size={15} className="text-[#E94E8F]" />

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#AB5579]">
                  HOLA, SOY PAULA ✳
                </span>
              </div>
            </motion.div>

            {/* TITULAR */}

            <motion.h2
              {...reveal(0.2)}
              className="max-w-2xl text-[clamp(2.7rem,5vw,5rem)] font-black leading-[1.05] tracking-[-0.07em]"
            >
              Detrás de
              <br />
              tantas ideas,
              <br />
              <span className="font-serif font-normal italic text-[#E94E8F]">
                estoy yo.
              </span>
            </motion.h2>

            {/* TEXTO REAL DE PAULA */}

            <motion.div
              {...reveal(0.32)}
              className="mt-9 max-w-xl space-y-5 text-base leading-8 text-[#705463] sm:text-lg sm:leading-9"
            >
              <p>
                Soy graduada en{" "}
                <strong className="font-semibold text-[#382630]">
                  Marketing e Investigación de Mercados
                </strong>{" "}
                y especializada en{" "}
                <strong className="font-semibold text-[#382630]">
                  Marketing Digital
                </strong>
                . Me gusta combinar creatividad y estrategia para construir una
                comunicación que tenga sentido, conecte con las personas y ayude
                a las marcas a diferenciarse.
              </p>

              <p>
                Disfruto especialmente dando vida a las ideas: pensar conceptos,
                crear contenido, explorar nuevas formas de comunicar y cuidar
                esos pequeños detalles que hacen que una marca tenga
                personalidad.
              </p>

              <p>
                Creo que las mejores ideas no surgen solo de ser creativa, sino
                también de observar, escuchar, entender a las personas y saber
                qué quieres conseguir.
              </p>
            </motion.div>

            {/* VALORES CREATIVOS */}

            <motion.div
              {...reveal(0.45)}
              className="mt-11 grid gap-3 sm:grid-cols-3"
            >
              {creativeValues.map((value) => (
                <div
                  key={value.number}
                  className="rounded-[20px] border border-[#F0CCD9] bg-white/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-20px_rgba(120,38,75,0.3)]"
                >
                  <span className="text-xs font-bold text-[#D66F96]">
                    {value.number}
                  </span>

                  <h3 className="mt-3 text-xl font-bold tracking-[-0.04em] text-[#382630]">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#987585]">
                    {value.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* FRASE FINAL DE PAULA */}

            <motion.div
              {...reveal(0.55)}
              className="mt-10 flex items-start gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E94E8F] text-white">
                <ArrowDownRight size={20} strokeWidth={1.8} />
              </div>

              <p className="max-w-md font-serif text-lg italic leading-relaxed text-[#A45477] sm:text-xl">
                Pienso, creo, pruebo y vuelvo a imaginar.
                <br />
                <span className="font-semibold">
                  Así entiendo el marketing.
                </span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* CIERRE DE SECCIÓN */}

        <motion.div
          {...reveal(0.1)}
          className="mt-20 flex flex-col gap-4 border-t border-[#EDC8D6] pt-8 sm:mt-24 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#AC7087]">
            Ideas con personalidad
          </p>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#9D6880]">
              Keep scrolling
            </span>

            <ArrowDownRight size={18} className="text-[#E94E8F]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
