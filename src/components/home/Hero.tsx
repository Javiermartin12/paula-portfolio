"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  Flower2,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const collageY = useTransform(scrollYProgress, [0, 1], [0, -45]);

  const entrance = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 30 },

    animate: { opacity: 1, y: 0 },

    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-svh overflow-hidden bg-[#FFF8F5] text-[#30202A]"
    >
      {/* FONDO DECORATIVO */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 hidden h-full w-[42%] opacity-40 lg:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 48px, #FADBE5 49px, #FADBE5 50px)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 bottom-0 h-80 w-80 rounded-full bg-[#F8CEE0]/50 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pb-12">
        {/* IDENTIDAD SUPERIOR */}

        {/* HERO PRINCIPAL */}

        <div className="grid items-center gap-8 pb-12  sm:gap-12 sm:pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-20">
          {" "}
          {/* COLUMNA IZQUIERDA */}
          <div className="relative z-20 lg:col-span-7">
            <motion.div
              {...entrance(0.15)}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#F0C8D6] bg-white/70 px-4 py-2"
            >
              <Sparkles size={15} className="text-[#EA4F88]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#A24D6D] sm:text-xs">
                Creatividad con intención
              </span>
            </motion.div>

            {/* TITULAR */}

            <h1 className="max-w-full">
              <motion.span
                {...entrance(0.3)}
                className="block text-[clamp(2rem,4vw,4.2rem)] font-black uppercase leading-[1.03] tracking-[-0.075em]"
              >
                Tengo demasiadas
              </motion.span>

              <motion.span
                {...entrance(0.46)}
                className="relative mt-1 block w-fit text-[clamp(5.5rem,14vw,11.5rem)] font-black uppercase leading-[0.95] tracking-[-0.105em] text-[#E94E8F]"
              >
                IDEAS<span className="text-[#30202A]">!</span>
                {/* SUBRAYADO DECORATIVO */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-[5%] h-2 w-[80%] -rotate-2 rounded-full bg-[#FFC457] sm:h-3"
                />
              </motion.span>
            </h1>

            {/* MENSAJE */}

            <motion.p
              {...entrance(0.62)}
              className="mt-10 max-w-[520px] text-xl font-medium leading-8 text-[#49303C] sm:text-2xl sm:leading-9"
            >
              Pero las buenas{" "}
              <span className="font-serif italic text-[#DF5188]">
                no se quedan
              </span>{" "}
              en mi cabeza.
            </motion.p>

            <motion.p
              {...entrance(0.72)}
              className="mt-5 max-w-[480px] text-sm leading-7 text-[#876A76] sm:text-base"
            >
              Estrategia, contenido y creatividad para convertir ideas en
              experiencias que conectan con las personas.
            </motion.p>

            {/* ACCIÓN */}

            <motion.div {...entrance(0.85)} className="mt-9">
              <a
                href="#paula-ideas"
                className="group inline-flex items-center gap-3 rounded-full bg-[#30202A] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#E94E8F]"
              >
                Descubre mi mundo
                <ArrowDownRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>
            </motion.div>
          </div>
          {/* COLUMNA DERECHA: COLLAGE */}
          <motion.div
            style={{
              y: reduceMotion ? 0 : collageY,
            }}
            className="relative z-10 lg:col-span-5"
          >
            <div className="relative mx-auto h-[425px] w-full max-w-[520px] sm:h-[560px] lg:h-[600px]">
              {/* TARJETA POSTERIOR */}

              <motion.div
                initial={
                  reduceMotion ? false : { opacity: 0, rotate: 0, scale: 0.85 }
                }
                animate={{
                  opacity: 1,
                  rotate: 8,
                  scale: 1,
                }}
                transition={{
                  duration: 0.85,
                  delay: 0.5,
                }}
                className="absolute right-[4%] top-[10%] h-[72%] w-[75%] rounded-[26px] bg-[#FFB8D2] shadow-[0_22px_50px_-25px_rgba(173,50,105,0.3)]"
              >
                <div
                  className="absolute inset-0 rounded-[26px] opacity-40"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(255,255,255,0.65) 23px, rgba(255,255,255,0.65) 24px)",
                  }}
                />
              </motion.div>

              {/* POSTER CENTRAL */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 50,
                        rotate: -12,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: -6,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.62,
                  ease: "easeOut",
                }}
                className="absolute left-[4%] top-[7%] flex h-[73%] w-[75%] flex-col justify-between overflow-hidden rounded-[24px] border-[7px] border-white bg-[#F28AB2] p-6 shadow-[0_30px_65px_-25px_rgba(67,22,43,0.35)] sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#69243F] sm:text-xs">
                    Paula&apos;s World
                  </p>

                  <Sparkles size={25} className="text-[#FFF5CE]" />
                </div>

                {/* TEXTO DEL PÓSTER */}

                <div className="relative">
                  <span className="block font-serif text-xl italic text-[#702944] sm:text-3xl">
                    Make
                  </span>

                  <p className="text-[clamp(4rem,9vw,7rem)] font-black uppercase leading-[0.83] tracking-[-0.11em] text-white">
                    IT
                    <br />
                    POP.
                  </p>

                  <div
                    aria-hidden="true"
                    className="absolute -right-2 -top-8 rotate-12 rounded-full bg-[#FFF0A5] px-4 py-3 text-[10px] font-black uppercase tracking-widest text-[#A94A67] sm:px-5 sm:py-4"
                  >
                    100%
                    <br />
                    Ideas
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[#FFFFFF]/50 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#71344C]">
                    Ideas · Content · Strategy
                  </p>

                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </motion.div>

              {/* TARJETA DE REDES */}

              <motion.div
                initial={
                  reduceMotion ? false : { opacity: 0, x: 35, rotate: 9 }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                  rotate: 6,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                }}
                className="absolute bottom-[5%] right-[1%] z-20 w-[47%] overflow-hidden rounded-[22px] border-[6px] border-white bg-white shadow-[0_25px_55px_-20px_rgba(70,29,49,0.4)] sm:w-[44%]"
              >
                <div className="flex items-center gap-2 px-3 py-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F8D5E2] text-[#E94E8F]">
                    <Camera size={15} />
                  </span>

                  <span className="text-[10px] font-bold text-[#442A36] sm:text-xs">
                    paularm.marketing
                  </span>
                </div>

                {/* COMPOSICIÓN GRÁFICA */}

                <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden bg-[#F8E9A7] p-4">
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 top-8 h-36 w-36 rounded-full bg-[#F59ABE]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute -left-8 bottom-8 h-32 w-32 rounded-full border-[16px] border-[#E85F91]/60"
                  />

                  <p className="relative z-10 font-serif text-xl italic text-[#73394D] sm:text-2xl">
                    Stay
                    <br />
                    creative.
                  </p>

                  <p className="relative z-10 text-right text-3xl font-black uppercase leading-none tracking-[-0.06em] text-[#B94B74] sm:text-4xl">
                    THINK
                    <br />
                    PINK
                  </p>
                </div>
              </motion.div>

              {/* PEGATINA DECORATIVA */}

              <motion.div
                initial={
                  reduceMotion ? false : { opacity: 0, scale: 0.5, rotate: -35 }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: -15,
                }}
                transition={{
                  duration: 0.75,
                  delay: 1.1,
                }}
                className="absolute right-[3%] top-[1%] z-30 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#FFF8F5] bg-[#F8D46B] shadow-lg sm:h-28 sm:w-28"
              >
                <Flower2
                  size={43}
                  strokeWidth={1.6}
                  className="text-[#D64A79] sm:h-14 sm:w-14"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* BANDA INFERIOR */}

        <motion.div
          id="paula-ideas"
          {...entrance(1)}
          className="scroll-mt-12 border-t border-[#EBCBD7] pt-7"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A46780]">
              De una idea a algo real
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.14em] text-[#5D3B4D] sm:gap-5">
              <span>Idea</span>
              <span className="text-[#E94E8F]">✳</span>
              <span>Estrategia</span>
              <span className="text-[#E94E8F]">✳</span>
              <span>Contenido</span>
              <span className="text-[#E94E8F]">✳</span>
              <span>Resultado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
