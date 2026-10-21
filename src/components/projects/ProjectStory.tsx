import { Clapperboard, Images, Lightbulb } from "lucide-react";

import type { PortfolioProject } from "@/data/projects";

type ProjectStoryProps = {
  project: PortfolioProject;
};

export default function ProjectStory({ project }: ProjectStoryProps) {
  return (
    <section className="bg-[#FFF9F5] px-5 py-20 text-[#30202A] sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B45178]">
              Detrás del proyecto
            </p>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.06em] sm:text-5xl">
              Ideas que se
              <br />
              <span className="font-serif font-normal italic text-[#E94E8F]">
                convierten en contenido.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-9 text-[#755866] sm:text-lg">
              {project.description}
            </p>

            <p className="mt-6 text-sm leading-8 text-[#806575] sm:text-base">
              Esta selección reúne diferentes formatos de comunicación visual
              para mostrar el trabajo creativo desarrollado en el proyecto.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Ideas creativas",
              description: "Conceptos y propuestas adaptados a la marca.",
              icon: Lightbulb,
            },
            {
              title: "Contenido visual",
              description: "Publicaciones y composiciones para redes sociales.",
              icon: Images,
            },
            {
              title: "Vídeo",
              description: "Piezas audiovisuales y formatos digitales.",
              icon: Clapperboard,
            },
          ].map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-[24px] border border-[#F0DFE3] bg-white p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF0F5] text-[#D34F83]">
                <Icon size={22} strokeWidth={1.7} />
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#30202A]">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-[#806575]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
