"use client";

import Image from "next/image";
import Link from "next/link";

import { motion, useReducedMotion } from "motion/react";

import { ArrowUpRight, Flower2, Sparkles } from "lucide-react";

import {
  projects,
  type PortfolioProject,
  type ProjectTheme,
} from "@/data/projects";

/* =========================================================
   COLORES DE LOS PROYECTOS
========================================================= */

const themes: Record<
  ProjectTheme,
  {
    background: string;
    accent: string;
    circle: string;
    text: string;
  }
> = {
  peach: {
    background: "bg-[#F6C3AF]",
    accent: "bg-[#EA927F]",
    circle: "bg-[#FCE3B7]",
    text: "text-[#873F39]",
  },

  pink: {
    background: "bg-[#F4C4D6]",
    accent: "bg-[#E98BAD]",
    circle: "bg-[#FFE6EB]",
    text: "text-[#903D65]",
  },

  lavender: {
    background: "bg-[#DCD0F0]",
    accent: "bg-[#BDA8E8]",
    circle: "bg-[#F4E5FA]",
    text: "text-[#674A90]",
  },
};

/* =========================================================
   PRESENTACIÓN VISUAL
========================================================= */

function ProjectVisual({
  project,
  total,
}: {
  project: PortfolioProject;
  total: number;
}) {
  const theme = themes[project.theme];

  const hasMedia = Boolean(project.media.video || project.media.image);

  return (
    <div
      className={`relative min-w-0 overflow-hidden rounded-[26px] p-4 sm:rounded-[32px] sm:p-6 ${theme.background}`}
    >
      {/* Decoración */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full opacity-65 ${theme.circle}`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full opacity-40 ${theme.accent}`}
      />

      {/* Cabecera */}
      <div className="relative z-10 flex items-center justify-between gap-4 pb-5">
        <span
          className={`text-[10px] font-black uppercase tracking-[0.19em] sm:text-xs ${theme.text}`}
        >
          Paula / Selected work
        </span>

        <span className={`text-xs font-bold ${theme.text}`}>
          {project.number} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Imagen, vídeo o composición editorial */}
      <div
        className={`relative h-[315px] overflow-hidden rounded-[20px] sm:h-[400px] lg:h-[460px] ${
          hasMedia ? "bg-white" : "bg-white/30"
        }`}
      >
        {project.media.video ? (
          <video
            controls
            playsInline
            preload="metadata"
            poster={project.media.videoPoster}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={project.media.video} />
            Tu navegador no admite este vídeo.
          </video>
        ) : project.media.image ? (
          <Image
            src={project.media.image}
            alt={`Contenido visual de ${project.clientName ?? project.title}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-3 sm:p-5"
          />
        ) : (
          <div className="relative flex h-full flex-col justify-between overflow-hidden p-6 sm:p-9">
            <div
              aria-hidden="true"
              className={`absolute -right-16 top-[15%] h-56 w-56 rounded-full opacity-60 sm:h-72 sm:w-72 ${theme.circle}`}
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full border-[22px] border-white/35"
            />

            <div className="relative z-10 flex items-center justify-between">
              <span
                className={`text-[10px] font-black uppercase tracking-[0.19em] ${theme.text}`}
              >
                Creative portfolio
              </span>

              <Sparkles size={23} className={theme.text} />
            </div>

            <div className="relative z-10">
              <p
                className={`font-serif text-2xl italic sm:text-3xl ${theme.text}`}
              >
                Made with ideas.
              </p>

              <p
                className={`mt-3 break-words text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.09em] ${theme.text}`}
              >
                {project.title}
              </p>
            </div>

            <p
              className={`relative z-10 max-w-xs text-xs font-medium leading-5 sm:text-sm ${theme.text}`}
            >
              {project.category}
            </p>
          </div>
        )}
      </div>

      {/* Imagen secundaria opcional */}
      {project.media.secondaryImage && (
        <div className="absolute bottom-10 right-3 z-20 w-[34%] max-w-[210px] rotate-[5deg] overflow-hidden rounded-[14px] border-[5px] border-white bg-white shadow-[0_20px_50px_-20px_rgba(50,20,40,0.4)] sm:right-5 sm:rounded-[20px]">
          <div className="relative aspect-[3/4]">
            <Image
              src={project.media.secondaryImage}
              alt={`Detalle de ${project.clientName ?? project.title}`}
              fill
              sizes="(max-width: 640px) 120px, 210px"
              className="object-contain p-1"
            />
          </div>
        </div>
      )}

      {/* Pie */}
      <div className="relative z-10 mt-5 flex items-center justify-between gap-3">
        <span
          className={`text-[10px] font-black uppercase tracking-[0.15em] ${theme.text}`}
        >
          Concept · Content · Creativity
        </span>

        <Flower2 size={20} strokeWidth={1.6} className={theme.text} />
      </div>
    </div>
  );
}

/* =========================================================
   TARJETA DEL PROYECTO
========================================================= */

function ProjectCard({
  project,
  index,
  total,
  reduceMotion,
}: {
  project: PortfolioProject;
  index: number;
  total: number;
  reduceMotion: boolean | null;
}) {
  const reverse = index % 2 !== 0;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        ease: "easeOut",
      }}
      className="grid min-w-0 items-center gap-9 rounded-[30px] border border-[#F0DFE3] bg-white p-5 shadow-[0_25px_70px_-50px_rgba(95,35,65,0.17)] sm:gap-12 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10"
    >
      {/* Información */}
      <div className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0F5] text-xs font-black text-[#D34F83]">
            {project.number}
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#AA6C85]">
            {project.category}
          </span>
        </div>

        <h3 className="mt-8 break-words text-[clamp(2.8rem,5.5vw,5.5rem)] font-black leading-[0.98] tracking-[-0.075em] text-[#30202A]">
          {project.title}
          <span className="text-[#E94E8F]">.</span>
        </h3>

        {project.clientName && (
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-[#B45178]">
            {project.clientName}
          </p>
        )}

        <p className="mt-7 max-w-lg text-base leading-8 text-[#755866] sm:text-lg">
          {project.description}
        </p>

        {/* Etiquetas */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#F0D4DF] bg-[#FFF6F9] px-4 py-2 text-xs font-semibold text-[#A85276]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Solo cuando exista la ficha individual */}
        {project.detailHref && (
          <Link
            href={project.detailHref}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#30202A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#E94E8F]"
          >
            Explorar proyecto
            <ArrowUpRight size={18} />
          </Link>
        )}
      </div>

      {/* Contenido visual */}
      <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>
        <ProjectVisual project={project} total={total} />
      </div>
    </motion.article>
  );
}

/* =========================================================
   SECCIÓN DE PROYECTOS
========================================================= */

export default function SelectedProjects() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="proyectos"
      className="relative isolate overflow-hidden bg-[#FFF9F5] py-20 text-[#30202A] sm:py-24 lg:py-32"
    >
      {/* Decoración */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#F8CADB]/30 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#FFE4BA]/25 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Introducción */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
          }}
          className="mb-14 max-w-4xl sm:mb-20"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45178]">
              05 / Selected work
            </span>

            <span className="h-px w-16 bg-[#DB9AB5]" />

            <Sparkles size={18} className="text-[#E94E8F]" />
          </div>

          <h2 className="mt-8 text-[clamp(2.7rem,5vw,5.3rem)] font-black leading-[1.06] tracking-[-0.07em]">
            No son solo posts.
            <br />
            <span className="font-serif font-normal italic text-[#E94E8F]">
              Son ideas con intención.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#806575] sm:text-lg">
            Proyectos donde la creatividad y la comunicación se convierten en
            contenido para marcas reales. Una selección de trabajos de Social
            Media, diseño y vídeo.
          </p>
        </motion.div>

        {/* Proyectos */}
        <div className="space-y-10 sm:space-y-14 lg:space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              total={projects.length}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* Cierre editorial */}
        <div className="mt-20 flex flex-col gap-4 border-t border-[#EBCDD7] pt-8 sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl italic text-[#B6577E] sm:text-2xl">
            Good ideas deserve to be seen.
          </p>

          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#AA7288]">
            Ideas · Trabajo · Creatividad ✳
          </p>
        </div>
      </div>
    </section>
  );
}
