import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Aviso legal | Paula RM Marketing",
  description:
    "Información legal, titularidad y condiciones de uso de la web profesional de Paula RM Marketing.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F5] text-[#30202A]">
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        {/* Navegación */}
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
            Información relativa a la titularidad de este sitio web, su
            actividad profesional y las condiciones generales de utilización.
          </p>
        </div>

        {/* Contenido legal */}
        <div className="mt-14 space-y-10">
          <LegalSection title="1. Identificación de la titular">
            <p>
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
              la Sociedad de la Información y de Comercio Electrónico, se
              facilita la siguiente información:
            </p>

            <div className="mt-5 space-y-3">
              <p>
                <strong>Nombre:</strong> Paula Rodríguez Moreno
              </p>

              <p>
                <strong>Nombre comercial:</strong> Paula RM Marketing
              </p>

              <p>
                <strong>Actividad:</strong> Servicios profesionales de
                marketing, comunicación digital y creación de contenido.
              </p>

              <p>
                <strong>NIF:</strong> 54202901C
              </p>

              <p>
                <strong>Domicilio profesional:</strong> Calle Velero 9,
                Almerimar.
              </p>

              <p>
                <strong>Correo electrónico:</strong>{" "}
                <a
                  href="mailto:paularm.marketing@gmail.com"
                  className="font-semibold text-[#D64C83] hover:underline"
                >
                  paularm.marketing@gmail.com
                </a>
              </p>

              <p>
                <strong>Sitio web:</strong>{" "}
                <a
                  href="https://paularmmarketing.com"
                  className="font-semibold text-[#D64C83] hover:underline"
                >
                  paularmmarketing.com
                </a>
              </p>
            </div>
          </LegalSection>

          <LegalSection title="2. Objeto y finalidad del sitio web">
            <p>
              Este sitio web tiene como finalidad presentar los servicios
              profesionales de marketing, comunicación digital y creación de
              contenido ofrecidos por su titular.
            </p>

            <p className="mt-4">
              También permite consultar su trayectoria, experiencia, proyectos y
              trabajos realizados, así como solicitar información sobre
              servicios, propuestas de colaboración y oportunidades
              profesionales.
            </p>
          </LegalSection>

          <LegalSection title="3. Propiedad intelectual e industrial">
            <p>
              Los textos, diseños, composiciones gráficas, fotografías, vídeos y
              demás contenidos originales de este sitio web están protegidos por
              la legislación aplicable en materia de propiedad intelectual e
              industrial.
            </p>

            <p className="mt-4">
              Los logotipos, marcas, fotografías y materiales pertenecientes a
              terceros conservan sus respectivos derechos de propiedad.
            </p>

            <p className="mt-4">
              Su presencia en el portfolio tiene como finalidad mostrar
              proyectos y trabajos profesionales, siempre con respeto a los
              derechos de sus titulares y a las autorizaciones de uso
              correspondientes.
            </p>

            <p className="mt-4">
              La reproducción, distribución, transformación o utilización de
              contenidos protegidos deberá contar con la autorización
              correspondiente, salvo en los casos permitidos legalmente.
            </p>
          </LegalSection>

          <LegalSection title="4. Condiciones de utilización">
            <p>
              Las personas usuarias se comprometen a utilizar este sitio web de
              manera lícita, respetando los derechos de terceros y evitando
              actividades que puedan comprometer su seguridad, disponibilidad o
              funcionamiento.
            </p>

            <p className="mt-4">
              No se permite utilizar sus formularios o medios de contacto para
              enviar comunicaciones fraudulentas, abusivas o contrarias a la
              legislación aplicable.
            </p>
          </LegalSection>

          <LegalSection title="5. Enlaces a terceros">
            <p>
              El sitio web puede contener enlaces a redes sociales, páginas de
              clientes, campañas, proyectos y otros recursos externos.
            </p>

            <p className="mt-4">
              Estos servicios disponen de sus propias condiciones de uso y
              políticas de privacidad. La titular no controla sus contenidos ni
              sus posibles modificaciones.
            </p>
          </LegalSection>

          <LegalSection title="6. Disponibilidad y mantenimiento">
            <p>
              Se procurará mantener la web accesible, actualizada y en correcto
              funcionamiento.
            </p>

            <p className="mt-4">
              Podrán producirse interrupciones temporales por mantenimiento,
              actualizaciones o incidencias técnicas ajenas al control de la
              titular.
            </p>

            <p className="mt-4">
              Los contenidos podrán actualizarse para reflejar nuevos servicios,
              proyectos o información profesional.
            </p>
          </LegalSection>

          <LegalSection title="7. Protección de datos">
            <p>
              Los datos personales facilitados a través del formulario de
              contacto se tratarán conforme a la normativa de protección de
              datos.
            </p>

            <p className="mt-4">
              La información relativa a las finalidades, legitimación,
              destinatarios y derechos de las personas interesadas se encuentra
              disponible en la{" "}
              <Link
                href="/privacidad"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Política de Privacidad
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection title="8. Cookies y tecnologías similares">
            <p>
              La información sobre las cookies y otras tecnologías utilizadas en
              esta web puede consultarse en la{" "}
              <Link
                href="/cookies"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection title="9. Legislación aplicable">
            <p>
              Este sitio web se rige por la normativa española y europea que
              resulte aplicable, especialmente en materia de servicios de la
              sociedad de la información, propiedad intelectual y protección de
              datos personales.
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
