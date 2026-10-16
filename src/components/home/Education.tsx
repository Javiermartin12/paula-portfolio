"use client";

import { motion, useReducedMotion } from "motion/react";

import {
  ArrowUpRight,
  Award,
  BookOpen,
  GraduationCap,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { studies, certifications, type EducationItem } from "@/data/education";

/* =========================================================
   TARJETA REUTILIZABLE DE FORMACIÓN
========================================================= */

function EducationCard({ item }: { item: EducationItem }) {
  return (
    <article className="group rounded-[22px] border border-[#EFD4DF] bg-white/85 p-6 transition-all duration-300 hover:border-[#EBA7C2] hover:shadow-[0_16px_40px_-25px_rgba(110,44,75,0.2)] sm:p-7">
      {/* FECHA */}

      {item.period && (
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#C15C85]">
          {item.period}
        </p>
      )}

      {/* TÍTULO */}

      <h4 className="mt-3 text-xl font-bold leading-snug tracking-[-0.035em] text-[#30202A]">
        {item.title}
      </h4>

      {/* INSTITUCIÓN */}

      <p className="mt-3 text-sm font-medium text-[#A65C7C]">
        {item.institution}
      </p>

      {/* DESCRIPCIÓN */}

      {item.description && (
        <p className="mt-4 text-sm leading-7 text-[#806575]">
          {item.description}
        </p>
      )}

      {/* ENLACE A CERTIFICADO */}

      {item.credentialUrl && (
        <a
          href={item.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#CB4E83] transition-colors hover:text-[#97335F]"
        >
          Ver acreditación
          <ArrowUpRight size={16} />
        </a>
      )}
    </article>
  );
}

/* =========================================================
   COLUMNA DE FORMACIÓN

   Componente reutilizable para:
   - Estudios
   - Certificaciones
========================================================= */

type EducationColumnProps = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: EducationItem[];
};

function EducationColumn({
  title,
  subtitle,
  icon: Icon,
  items,
}: EducationColumnProps) {
  return (
    <div className="min-w-0">
      {/* CABECERA DE LA COLUMNA */}

      <div className="mb-7 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F7C9DC] text-[#AE4873] sm:h-13 sm:w-13">
          <Icon size={25} strokeWidth={1.7} />
        </div>

        <div className="min-w-0">
          <h3 className="text-2xl font-bold tracking-[-0.04em] text-[#30202A]">
            {title}
          </h3>

          <p className="mt-1 text-sm text-[#A16D84]">{subtitle}</p>
        </div>
      </div>

      {/* TARJETAS */}

      <div className="space-y-4">
        {items.length > 0 ? (
          items.map((item) => <EducationCard key={item.id} item={item} />)
        ) : (
          /* ESTADO SIN DATOS */

          <div className="flex min-h-[190px] flex-col items-center justify-center rounded-[22px] border border-dashed border-[#DEB4C8] bg-white/45 p-7 text-center">
            <BookOpen size={28} strokeWidth={1.5} className="text-[#CA779A]" />

            <p className="mt-4 font-serif text-xl italic text-[#A66682]">
              Próximamente...
            </p>

            <p className="mt-2 max-w-xs text-xs leading-6 text-[#A58291]">
              Espacio preparado para incorporar la información de Paula.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   EDUCATION - COMPONENTE PRINCIPAL
========================================================= */

export default function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="formacion"
      className="relative isolate overflow-hidden bg-[#FFF0F5] py-20 sm:py-24 lg:py-32"
    >
      {/* DECORACIÓN DE FONDO */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#F6C8DC]/40 blur-[110px]"
      />

      {/* CONTENEDOR PRINCIPAL */}

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ===================================================
            ENCABEZADO
        =================================================== */}

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45178]">
              05 / Education
            </span>

            <span className="h-px w-16 bg-[#DB9AB5]" />

            <Sparkles size={18} className="text-[#E94E8F]" />
          </div>

          {/* TÍTULO */}

          <h2 className="mt-8 text-[clamp(2.6rem,5vw,5.2rem)] font-black leading-[1.06] tracking-[-0.07em] text-[#30202A]">
            La creatividad
            <br />
            <span className="font-serif font-normal italic text-[#E94E8F]">
              también se aprende.
            </span>
          </h2>

          {/* DESCRIPCIÓN */}

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#806575] sm:text-lg">
            Formación, curiosidad y ganas de seguir aprendiendo. Porque siempre
            hay algo nuevo por descubrir.
          </p>
        </motion.div>

        {/* ===================================================
            ESTUDIOS Y CERTIFICACIONES
        =================================================== */}

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-10">
          {/* FORMACIÓN ACADÉMICA */}

          <EducationColumn
            title="Mis estudios"
            subtitle="Formación académica"
            icon={GraduationCap}
            items={studies}
          />

          {/* CERTIFICACIONES */}

          <EducationColumn
            title="Certificaciones"
            subtitle="Cursos y formación complementaria"
            icon={Award}
            items={certifications}
          />
        </div>

        {/* ===================================================
            CIERRE
        =================================================== */}

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#E9C4D4] pt-8">
          <p className="font-serif text-xl italic text-[#B65E83]">
            Always learning, always creating.
          </p>

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#AA7288]">
            Never stop being curious ✳
          </span>
        </div>
      </div>
    </section>
  );
}
