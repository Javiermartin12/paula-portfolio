import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Política de Privacidad | Paula",
  description:
    "Información sobre privacidad y protección de datos en el portfolio de Paula.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F5] text-[#30202A]">
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold text-[#D64C83] transition hover:text-[#A73566]"
        >
          ← Volver al portfolio
        </Link>

        {/* Encabezado */}

        <div className="mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45178]">
            Protección de datos
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Tu privacidad{" "}
            <span className="font-serif font-normal italic text-[#E94E8F]">
              importa.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#806575]">
            Esta política informa sobre el tratamiento de datos personales
            relacionado con la navegación y las comunicaciones realizadas a
            través del portfolio.
          </p>
        </div>

        {/* Contenido */}

        <div className="mt-14 space-y-10">
          <PrivacySection title="1. Responsable del tratamiento">
            <p>
              <strong>Responsable:</strong> Paula (apellidos pendientes de
              confirmar).
            </p>

            <p className="mt-2">
              <strong>Correo electrónico:</strong> Pendiente de confirmar.
            </p>

            <p className="mt-4">
              Los datos de identificación y contacto se completarán antes de la
              publicación definitiva del sitio.
            </p>
          </PrivacySection>

          <PrivacySection title="2. Datos que pueden tratarse">
            <p>
              En función de las interacciones de las personas visitantes, podrán
              tratarse las siguientes categorías de datos personales:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>
                Datos facilitados voluntariamente cuando una persona contacte
                por correo electrónico.
              </li>

              <li>
                Información incluida en consultas sobre proyectos,
                colaboraciones u oportunidades profesionales.
              </li>

              <li>
                Datos técnicos relacionados con la conexión, navegación y
                seguridad, que puedan ser tratados por el proveedor de
                alojamiento.
              </li>
            </ul>

            <p className="mt-4">
              Actualmente el portfolio no dispone de un formulario propio de
              contacto ni solicita crear cuentas de usuario.
            </p>
          </PrivacySection>

          <PrivacySection title="3. Finalidades del tratamiento">
            <p>Los datos podrán tratarse para:</p>

            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>
                Responder comunicaciones y consultas recibidas voluntariamente.
              </li>

              <li>
                Gestionar posibles colaboraciones y oportunidades profesionales.
              </li>

              <li>
                Atender solicitudes de información o propuestas relacionadas con
                la actividad profesional.
              </li>

              <li>
                Mantener la seguridad y el correcto funcionamiento técnico del
                sitio web.
              </li>
            </ul>

            <p className="mt-4">
              No se utilizarán las comunicaciones recibidas para realizar envíos
              publicitarios periódicos sin contar con una base jurídica
              adecuada.
            </p>
          </PrivacySection>

          <PrivacySection title="4. Base jurídica">
            <p>
              La base jurídica dependerá de la finalidad concreta del
              tratamiento.
            </p>

            <p className="mt-4">
              La atención de solicitudes profesionales podrá basarse en la
              aplicación de medidas precontractuales cuando corresponda.
            </p>

            <p className="mt-4">
              La gestión de consultas generales y la seguridad del sitio podrán
              fundamentarse, cuando proceda, en el interés legítimo, respetando
              los derechos de los interesados.
            </p>

            <p className="mt-4">
              Cuando una finalidad requiera consentimiento, este se solicitará
              previamente conforme a la normativa.
            </p>
          </PrivacySection>

          <PrivacySection title="5. Conservación de los datos">
            <p>
              Los datos facilitados mediante comunicaciones se conservarán
              durante el tiempo necesario para atenderlas y gestionar la
              relación profesional correspondiente.
            </p>

            <p className="mt-4">
              Cuando existan obligaciones legales aplicables, determinados datos
              podrán conservarse durante los plazos exigidos.
            </p>

            <p className="mt-4">
              Los registros técnicos del alojamiento estarán sujetos a los
              plazos y condiciones aplicables al servicio contratado, que
              deberán comprobarse antes de la publicación definitiva.
            </p>
          </PrivacySection>

          <PrivacySection title="6. Proveedores y destinatarios">
            <p>
              El portfolio está previsto para alojarse mediante Vercel, que
              proporciona la infraestructura técnica necesaria para su
              publicación y funcionamiento.
            </p>

            <p className="mt-4">
              Determinados proveedores tecnológicos podrán tratar datos técnicos
              en la medida necesaria para prestar sus servicios, conforme a las
              condiciones contractuales y garantías aplicables.
            </p>

            <p className="mt-4">
              También podrán intervenir los proveedores de correo o redes
              sociales elegidos por las personas usuarias al contactar mediante
              servicios externos.
            </p>
          </PrivacySection>

          <PrivacySection title="7. Transferencias internacionales">
            <p>
              Algunos proveedores tecnológicos pueden realizar tratamientos o
              transferencias de datos fuera del Espacio Económico Europeo.
            </p>

            <p className="mt-4">
              Cuando resulten aplicables, deberán existir las garantías
              previstas en la normativa de protección de datos.
            </p>

            <p className="mt-4">
              La información sobre proveedores, ubicaciones y garantías deberá
              contrastarse con las condiciones reales de los servicios
              utilizados.
            </p>
          </PrivacySection>

          <PrivacySection title="8. Derechos de las personas">
            <p>
              Las personas interesadas podrán solicitar, cuando corresponda, el
              acceso, rectificación, supresión, oposición, limitación del
              tratamiento y portabilidad de sus datos personales.
            </p>

            <p className="mt-4">
              También podrán retirar los consentimientos otorgados, cuando el
              tratamiento se base en ellos.
            </p>

            <p className="mt-4">
              Estas solicitudes podrán dirigirse al correo de contacto de la
              titular, que se incorporará al portfolio antes de su publicación
              definitiva.
            </p>

            <p className="mt-4">
              Asimismo, podrá presentarse una reclamación ante la{" "}
              <a
                href="https://www.aepd.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Agencia Española de Protección de Datos
              </a>
              .
            </p>
          </PrivacySection>

          <PrivacySection title="9. Cookies">
            <p>
              Para obtener información sobre las cookies y tecnologías similares
              utilizadas en el sitio puede consultarse la{" "}
              <Link
                href="/cookies"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </PrivacySection>

          <PrivacySection title="10. Seguridad">
            <p>
              Se aplicarán medidas técnicas y organizativas adecuadas a la
              naturaleza de los tratamientos y a los riesgos identificados.
            </p>
          </PrivacySection>

          <PrivacySection title="11. Actualizaciones">
            <p>
              Esta política podrá modificarse cuando cambien los servicios, las
              funcionalidades o las operaciones de tratamiento.
            </p>

            <p className="mt-4 text-sm text-[#A77B8D]">
              Última actualización: octubre de 2026.
            </p>
          </PrivacySection>
        </div>
      </section>
    </main>
  );
}

function PrivacySection({
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
