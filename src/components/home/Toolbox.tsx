"use client";

import { useState } from "react";

import { motion, useReducedMotion } from "motion/react";

import {
  ArrowUpRight,
  BarChart3,
  Megaphone,
  Paintbrush,
  Sparkles,
  Video,
} from "lucide-react";

/* =========================================================
   ÁREAS Y HERRAMIENTAS
========================================================= */

const toolGroups = [
  {
    id: "contenido",
    number: "01",
    icon: Video,

    title: "Contenido",

    description:
      "Ideas que se convierten en vídeos, publicaciones e historias capaces de conectar con las personas.",

    tools: ["CapCut", "Canva", "Reels y Stories"],

    preview: {
      label: "CONTENT STUDIO",
      title: "MAKE\nIT POP!",
      subtitle: "Create something worth sharing.",
      tags: "VIDEO · CONTENT · SOCIAL",
    },

    colors: {
      background: "bg-[#F9B8D1]",
      text: "text-[#752945]",
      accent: "bg-[#E65D94]",
      circle: "bg-[#FFE49A]",
    },
  },

  {
    id: "diseno",
    number: "02",
    icon: Paintbrush,

    title: "Diseño",

    description:
      "Composiciones visuales, conceptos gráficos y contenido que ayuda a transmitir la personalidad de cada marca.",

    tools: ["Canva", "Moodboards", "Creatividades digitales"],

    preview: {
      label: "DESIGN LAB",
      title: "THINK\nCREATIVE.",
      subtitle: "Give every idea its own identity.",
      tags: "DESIGN · BRANDING · VISUAL",
    },

    colors: {
      background: "bg-[#F8DFA8]",
      text: "text-[#704A3E]",
      accent: "bg-[#E88D9F]",
      circle: "bg-[#F5A8C8]",
    },
  },

  {
    id: "estrategia",
    number: "03",
    icon: Megaphone,

    title: "Estrategia",

    description:
      "Planificación de contenidos, campañas y acciones orientadas a los objetivos de cada proyecto.",

    tools: ["Meta Ads", "Google Ads", "Planificación de campañas"],

    preview: {
      label: "STRATEGY ROOM",
      title: "THINK.\nPLAN.\nCREATE.",
      subtitle: "Creativity with a direction.",
      tags: "STRATEGY · CAMPAIGNS · IDEAS",
    },

    colors: {
      background: "bg-[#D9C6F2]",
      text: "text-[#4B366E]",
      accent: "bg-[#9570CB]",
      circle: "bg-[#F6A6CD]",
    },
  },

  {
    id: "analisis",
    number: "04",
    icon: BarChart3,

    title: "Análisis",

    description:
      "Seguimiento de métricas, interpretación de resultados y aprendizaje para mejorar cada acción.",

    tools: ["Google Analytics 4", "Search Console", "Metricool"],

    preview: {
      label: "DATA CORNER",
      title: "LOOK.\nLEARN.\nGROW.",
      subtitle: "Good ideas can always get better.",
      tags: "DATA · INSIGHTS · RESULTS",
    },

    colors: {
      background: "bg-[#C7E8E1]",
      text: "text-[#28564F]",
      accent: "bg-[#65ADA0]",
      circle: "bg-[#F9B8D1]",
    },
  },
];

/* =========================================================
   TOOLBOX
========================================================= */

export default function Toolbox() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reduceMotion = useReducedMotion();

  const activeGroup = toolGroups[activeIndex];

  const ActiveIcon = activeGroup.icon;

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 30 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.15,
    },

    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="herramientas"
      className="relative isolate overflow-hidden bg-[#291B29] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* =====================================================
          DECORACIÓN DE FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#AD4D83]/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#E45A94]/10 blur-[100px]"
      />

      {/* =====================================================
          CONTENEDOR
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ===================================================
            ENCABEZADO
        =================================================== */}

        <motion.div {...reveal()} className="max-w-4xl">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF9DC2]">
              04 / My toolbox
            </span>

            <span className="h-px w-16 bg-[#BB789D]/50" />

            <Sparkles size={18} className="text-[#FF9DC2]" />
          </div>

          <h2 className="mt-8 text-[clamp(2.8rem,5.5vw,5.6rem)] font-black leading-[1.05] tracking-[-0.07em]">
            Las ideas no
            <br />
            se hacen{" "}
            <span className="font-serif font-normal italic text-[#FF92BF]">
              solas.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#D4B9C9] sm:text-lg">
            Detrás de cada proyecto hay creatividad, herramientas, estrategia y
            muchas ganas de convertir las ideas en algo real.
          </p>
        </motion.div>

        {/* ===================================================
            ZONA INTERACTIVA
        =================================================== */}

        <div className="mt-14 grid items-stretch gap-6 sm:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* =================================================
              COLUMNA IZQUIERDA — CATEGORÍAS
          ================================================= */}

          <motion.div {...reveal(0.1)} className="flex flex-col">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.19em] text-[#B995AB]">
              Explora mis herramientas
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {toolGroups.map((group, index) => {
                const Icon = group.icon;

                const isActive = activeIndex === index;

                return (
                  <button
                    key={group.id}
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="toolbox-preview"
                    onClick={() => setActiveIndex(index)}
                    className={`group flex w-full items-center gap-4 rounded-[20px] border p-4 text-left transition-all duration-300 sm:p-5 ${
                      isActive
                        ? "border-[#F18CB5] bg-[#C65388] shadow-[0_20px_45px_-25px_rgba(229,90,150,0.45)]"
                        : "border-white/10 bg-white/[0.045] hover:border-[#E99ABB]/40 hover:bg-white/[0.08]"
                    }`}
                  >
                    {/* Icono */}

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-[#51364D] text-[#F3ADCA]"
                      }`}
                    >
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    {/* Texto */}

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[10px] font-bold tracking-[0.15em] ${
                          isActive ? "text-white/75" : "text-[#A98BA0]"
                        }`}
                      >
                        {group.number}
                      </p>

                      <h3 className="mt-1 text-lg font-bold tracking-[-0.025em] sm:text-xl">
                        {group.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className={`shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                        isActive ? "text-white" : "text-[#9D7D91]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Nota inferior */}

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#B89BAC]">
              Cada proyecto necesita una combinación distinta de ideas,
              herramientas y estrategia.
            </p>
          </motion.div>

          {/* =================================================
              COLUMNA DERECHA — PANEL CREATIVO
          ================================================= */}

          <motion.div {...reveal(0.2)} className="relative min-w-0">
            <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[#392738] p-3 sm:rounded-[32px] sm:p-4">
              {/* Barra superior */}

              <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F3A4C5]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C9A3C0]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9C7896]" />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#CDA9BE] sm:text-xs">
                  Paula&apos;s creative desk
                </p>
              </div>

              {/* PREVIEW VARIABLE */}

              <motion.div
                id="toolbox-preview"
                key={activeGroup.id}
                aria-live="polite"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  ease: "easeOut",
                }}
                className={`relative flex min-h-[380px] flex-col overflow-hidden rounded-[22px] p-6 sm:min-h-[460px] sm:p-9 ${activeGroup.colors.background} ${activeGroup.colors.text}`}
              >
                {/* Elementos decorativos */}

                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 top-[18%] h-56 w-56 rounded-full opacity-60 sm:h-72 sm:w-72 ${activeGroup.colors.circle}`}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[28px] border-white/25"
                />

                {/* Identidad del panel */}

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] sm:text-xs">
                    {activeGroup.preview.label}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 bg-white/20">
                    <ActiveIcon size={19} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Titular gráfico */}

                <div className="relative z-10 my-auto py-12">
                  <span className="font-serif text-xl italic opacity-80 sm:text-2xl">
                    Let&apos;s get creative...
                  </span>

                  <p className="mt-4 whitespace-pre-line text-[clamp(3.1rem,6.5vw,6.4rem)] font-black uppercase leading-[0.9] tracking-[-0.085em]">
                    {activeGroup.preview.title}
                  </p>

                  <p className="mt-6 max-w-sm font-serif text-lg italic opacity-85 sm:text-xl">
                    {activeGroup.preview.subtitle}
                  </p>
                </div>

                {/* Etiqueta inferior */}

                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-current/20 pt-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] sm:text-xs">
                    {activeGroup.preview.tags}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white ${activeGroup.colors.accent}`}
                  >
                    Paula Creative
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            INFORMACIÓN DE LA CATEGORÍA ACTIVA
        =================================================== */}

        <motion.div
          {...reveal(0.1)}
          className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.045] p-6 sm:p-8"
        >
          <div className="grid items-start gap-8 md:grid-cols-[1fr_1fr] md:gap-12">
            {/* Descripción */}

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F19DBF]">
                En qué consiste
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                {activeGroup.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#D6BDCC] sm:text-base">
                {activeGroup.description}
              </p>
            </div>

            {/* Herramientas */}

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#F19DBF]">
                Herramientas y recursos
              </p>

              <div className="flex flex-wrap gap-3">
                {activeGroup.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[#BE87A4]/25 bg-[#5A3B52]/70 px-4 py-2.5 text-sm font-medium text-[#FFE2ED]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            CIERRE
        =================================================== */}

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl italic text-[#FFB3D1] sm:text-2xl">
            Una idea es solo el principio.
          </p>

          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B995AB]">
            Next stop: mis proyectos ✳
          </p>
        </div>
      </div>
    </section>
  );
}
