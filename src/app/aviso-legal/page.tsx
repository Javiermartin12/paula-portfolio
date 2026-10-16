import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Aviso legal | Paula",
  description:
    "Información legal y condiciones de utilización del portfolio de Paula.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F5] text-[#30202A]">
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        {/* Volver */}

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#D64C83] transition hover:text-[#A73566]"
        >
          ← Volver al portfolio
        </Link>

        {/* Encabezado */}

        <div className="mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45178]">
            Información legal
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Aviso{" "}
            <span className="font-serif font-normal italic text-[#E94E8F]">
              legal.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#806575]">
            Información sobre la titularidad, finalidad y condiciones generales
            de utilización de este portfolio.
          </p>
        </div>

        {/* Contenido */}

        <div className="mt-14 space-y-10">
          <LegalSection title="1. Identificación de la titular">
            <p>
              Este sitio web corresponde al portfolio personal y profesional de
              Paula.
            </p>

            <div className="mt-5 space-y-2">
              <p>
                <strong>Titular:</strong> Paula (apellidos pendientes de
                confirmar).
              </p>

              <p>
                <strong>Correo de contacto:</strong> Pendiente de confirmar.
              </p>

              <p>
                <strong>Datos profesionales y fiscales:</strong> Pendientes de
                completar cuando correspondan según la actividad desarrollada.
              </p>
            </div>

            <p className="mt-5">
              Antes de la publicación definitiva, se completarán los datos
              identificativos exigibles según la finalidad y naturaleza de la
              actividad.
            </p>
          </LegalSection>

          <LegalSection title="2. Finalidad del sitio web">
            <p>
              El sitio tiene como finalidad presentar el perfil profesional de
              Paula, su trayectoria, formación, habilidades y proyectos
              relacionados con el marketing, la comunicación y la creación de
              contenido.
            </p>

            <p className="mt-4">
              También podrá facilitar vías de contacto para oportunidades
              profesionales, colaboraciones y consultas relacionadas con su
              actividad.
            </p>
          </LegalSection>

          <LegalSection title="3. Propiedad intelectual">
            <p>
              Los textos, composiciones gráficas, elementos de diseño y demás
              contenidos originales del sitio están protegidos por la normativa
              de propiedad intelectual que resulte aplicable.
            </p>

            <p className="mt-4">
              Las fotografías, vídeos, logotipos, marcas y piezas de terceros
              pertenecen a sus respectivos titulares. Su inclusión en el
              portfolio deberá contar con las autorizaciones o derechos de
              utilización correspondientes.
            </p>

            <p className="mt-4">
              La reproducción o utilización de contenidos protegidos deberá
              respetar los derechos de sus titulares.
            </p>
          </LegalSection>

          <LegalSection title="4. Utilización del sitio web">
            <p>
              Las personas visitantes se comprometen a utilizar el sitio web de
              forma lícita, respetando los derechos de terceros y evitando
              actuaciones que puedan perjudicar su funcionamiento o seguridad.
            </p>
          </LegalSection>

          <LegalSection title="5. Enlaces externos">
            <p>
              Este portfolio puede incluir enlaces a redes sociales, campañas,
              proyectos y páginas de terceros.
            </p>

            <p className="mt-4">
              El acceso a dichos sitios se realiza bajo las condiciones y
              políticas establecidas por sus respectivos titulares. La presencia
              de un enlace no supone necesariamente una vinculación comercial.
            </p>
          </LegalSection>

          <LegalSection title="6. Disponibilidad y actualizaciones">
            <p>
              Se procurará mantener el sitio web accesible y actualizado. No
              obstante, pueden producirse interrupciones temporales por
              mantenimiento o incidencias técnicas.
            </p>

            <p className="mt-4">
              El contenido podrá modificarse para reflejar nuevos proyectos,
              experiencias o información profesional.
            </p>
          </LegalSection>

          <LegalSection title="7. Protección de datos">
            <p>
              Para conocer cómo se tratan los datos personales relacionados con
              este portfolio puede consultarse la{" "}
              <Link
                href="/privacidad"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Política de Privacidad
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection title="8. Legislación aplicable">
            <p>
              Este sitio web se rige por la normativa española y europea que
              resulte aplicable en materia de servicios digitales, propiedad
              intelectual y protección de datos personales.
            </p>
          </LegalSection>

          <p className="border-t border-[#EBCDD9] pt-7 text-sm text-[#A77B8D]">
            Última actualización: octubre de 2026.
          </p>
        </div>
      </section>
    </main>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-[-0.03em] text-[#30202A] sm:text-2xl">
        {title}
      </h2>

      <div className="mt-4 text-sm leading-8 text-[#745867] sm:text-base">
        {children}
      </div>
    </section>
  );
}
