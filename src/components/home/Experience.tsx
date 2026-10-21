"use client";

import { motion, useReducedMotion } from "motion/react";

import { ArrowUpRight, BriefcaseBusiness, Sparkles } from "lucide-react";

/* =========================================================
   DATOS DE EXPERIENCIA PROFESIONAL
========================================================= */

const experiences = [
  {
    id: "wit-creativo",
    number: "01",
    company: "WIT Creativo",
    position: "Prácticas de marketing",
    description:
      "Participación en tareas de apoyo a campañas, coordinación de acciones de marketing digital, seguimiento de clientes y gestión de procesos relacionados con programas de digitalización para pymes.",
    tags: ["Marketing digital", "Campañas", "Digitalización"],
    credentialUrl: null,
  },
  {
    id: "sidn",
    number: "02",
    company: "SIDN",
    position: "Social Media Trainee",
    description:
      "Experiencia de seis meses en el departamento de Social Media, con aprendizaje y participación en dinámicas de trabajo del área y proyectos vinculados a la comunicación digital.",
    tags: ["Social Media", "Comunicación digital", "Trabajo en equipo"],
    credentialUrl: "/certificados/sidn-practicas.pdf",
  },
];

/* =========================================================
   EXPERIENCIA PROFESIONAL
========================================================= */

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experiencia"
      className="relative isolate overflow-hidden bg-[#FFF8F5] py-20 text-[#30202A] sm:py-24 lg:py-32"
    >
      {/* Decoración */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#F4C4D6]/25 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45178]">
              Trayectoria profesional
            </span>

            <span className="h-px w-16 bg-[#DB9AB5]" />

            <Sparkles size={18} className="text-[#E94E8F]" />
          </div>

          <h2 className="mt-8 text-[clamp(2.7rem,5vw,5.3rem)] font-black leading-[1.06] tracking-[-0.07em]">
            Experiencias que
            <br />
            <span className="font-serif font-normal italic text-[#E94E8F]">
              suman.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#806575] sm:text-lg">
            Mi recorrido profesional me ha permitido conocer distintas áreas del
            marketing digital, trabajar en equipo y participar en proyectos de
            comunicación, campañas y Social Media.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-[#806575]">
            Cada experiencia me ha ayudado a ampliar mi visión del marketing y a
            combinar estrategia, creatividad y ejecución.
          </p>
        </motion.div>

        {/* Tarjetas de experiencia */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={reduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : index * 0.12,
                ease: "easeOut",
              }}
              className="group flex h-full flex-col rounded-[28px] border border-[#EFD8E1] bg-white p-7 transition-all duration-300 hover:border-[#EBA7C2] hover:shadow-[0_20px_55px_-30px_rgba(110,44,75,0.22)] sm:p-9"
            >
              {/* Cabecera */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF0F5] text-[#D34F83]">
                  <BriefcaseBusiness size={26} strokeWidth={1.6} />
                </div>

                <span className="font-serif text-3xl italic text-[#E6ADC4]">
                  {experience.number}
                </span>
              </div>

              {/* Empresa y puesto */}
              <h3 className="mt-9 text-3xl font-black tracking-[-0.055em] text-[#30202A] sm:text-4xl">
                {experience.company}
                <span className="text-[#E94E8F]">.</span>
              </h3>

              <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-[#C05784]">
                {experience.position}
              </p>

              {/* Descripción */}
              <p className="mt-7 flex-1 text-sm leading-8 text-[#755866] sm:text-base">
                {experience.description}
              </p>

              {/* Competencias */}
              <div className="mt-8 flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#F0D4DF] bg-[#FFF6F9] px-4 py-2 text-xs font-semibold text-[#A85276]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Certificado, cuando exista */}
              {experience.credentialUrl && (
                <a
                  href={experience.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#CB4E83] transition-colors hover:text-[#97335F]"
                >
                  Ver acreditación
                  <ArrowUpRight size={17} />
                </a>
              )}
            </motion.article>
          ))}
        </div>

        {/* Cierre editorial */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#EBCDD7] pt-8">
          <p className="font-serif text-xl italic text-[#B6577E] sm:text-2xl">
            Learning by doing.
          </p>

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#AA7288]">
            Experiencia · Aprendizaje · Creatividad
          </span>
        </div>
      </div>
    </section>
  );
}
