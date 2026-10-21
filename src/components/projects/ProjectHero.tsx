import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, ArrowDownRight } from "lucide-react";

import type { PortfolioProject, ProjectTheme } from "@/data/projects";

type ProjectHeroProps = {
  project: PortfolioProject;
};

const themes: Record<ProjectTheme, string> = {
  peach: "bg-[#F6C3AF]",
  pink: "bg-[#F4C4D6]",
  lavender: "bg-[#DCD0F0]",
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section
      className={`${themes[project.theme]} relative overflow-hidden px-5 pb-20 pt-10 text-[#30202A] sm:px-6 sm:pb-24 lg:px-8 lg:pb-28`}
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Volver */}
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 rounded-full border border-[#873F39]/20 bg-white/45 px-5 py-3 text-sm font-semibold text-[#733D42] transition hover:bg-white"
        >
          <ArrowLeft size={17} />
          Volver a proyectos
        </Link>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Información */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#874C54]">
              {project.number} / Selected work
            </p>

            <h1 className="mt-7 break-words text-[clamp(3.8rem,8vw,7.5rem)] font-black leading-[0.95] tracking-[-0.085em]">
              {project.title}
              <span className="text-[#D94D83]">.</span>
            </h1>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.13em] text-[#874C54]">
              {project.clientName ?? project.title}
            </p>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#674449] sm:text-lg">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#874C54]/20 bg-white/45 px-4 py-2 text-xs font-semibold text-[#733D42]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.gallery && (
              <a
                href="#galeria"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#30202A] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#873F54]"
              >
                Explorar contenido
                <ArrowDownRight size={18} />
              </a>
            )}
          </div>

          {/* Composición visual */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#FFE2C1]/70 blur-xl"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] bg-white/40 shadow-[0_25px_70px_-35px_rgba(75,30,45,0.35)] sm:aspect-[5/5]">
              {project.media.image ? (
                <Image
                  src={project.media.image}
                  alt={`Contenido creativo de ${project.clientName ?? project.title}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-5 sm:p-8"
                />
              ) : (
                <div className="flex h-full items-center justify-center p-8">
                  <span className="break-words text-center text-6xl font-black uppercase tracking-tighter text-[#873F54]">
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            {project.media.secondaryImage && (
              <div className="absolute -bottom-7 -left-3 w-[40%] rotate-[-7deg] overflow-hidden rounded-[22px] border-[6px] border-white bg-white shadow-xl sm:-left-8">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={project.media.secondaryImage}
                    alt={`Otra publicación de ${project.title}`}
                    fill
                    sizes="(max-width: 640px) 150px, 250px"
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
