import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Política de Privacidad | Paula RM Marketing",
  description:
    "Información sobre protección de datos personales y uso del formulario de contacto de Paula RM Marketing.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacidadPage() {
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
            Protección de datos
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Tu privacidad{" "}
            <span className="font-serif font-normal italic text-[#E94E8F]">
              importa.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#806575]">
            Información sobre cómo se recogen, utilizan y protegen los datos
            personales facilitados a través de esta web.
          </p>
        </div>

        {/* Contenido */}
        <div className="mt-14 space-y-10">
          <PrivacySection title="1. Responsable del tratamiento">
            <p>
              <strong>Responsable:</strong> Paula Rodríguez Moreno, profesional
              autónoma.
            </p>

            <p className="mt-3">
              <strong>Nombre comercial:</strong> Paula RM Marketing.
            </p>

            <p className="mt-3">
              <strong>Correo electrónico:</strong>{" "}
              <a
                href="mailto:paularm.marketing@gmail.com"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                paularm.marketing@gmail.com
              </a>
            </p>

            <p className="mt-4">
              La información identificativa adicional de la titular está
              disponible en el{" "}
              <Link
                href="/aviso-legal"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Aviso Legal
              </Link>
              .
            </p>
          </PrivacySection>

          <PrivacySection title="2. Datos personales que se recogen">
            <p>
              A través del formulario de contacto se pueden recoger los
              siguientes datos:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>Nombre facilitado por el visitante.</li>
              <li>Dirección de correo electrónico.</li>
              <li>
                Información incluida voluntariamente en el mensaje o consulta.
              </li>
            </ul>

            <p className="mt-4">
              También pueden tratarse datos técnicos relacionados con el acceso,
              la seguridad y el funcionamiento del sitio, de acuerdo con los
              servicios utilizados.
            </p>

            <p className="mt-4">
              Se recomienda no incluir información sensible o datos personales
              innecesarios en los mensajes.
            </p>
          </PrivacySection>

          <PrivacySection title="3. Finalidades del tratamiento">
            <p>
              Los datos personales recibidos se utilizan para las siguientes
              finalidades:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>
                Responder a las solicitudes de información recibidas mediante el
                formulario.
              </li>

              <li>
                Atender consultas sobre servicios de marketing, comunicación
                digital y creación de contenido.
              </li>

              <li>
                Gestionar posibles propuestas de colaboración y contratación.
              </li>

              <li>
                Proteger el formulario frente a envíos automatizados,
                fraudulentos o abusivos.
              </li>

              <li>
                Garantizar el funcionamiento técnico y la seguridad del sitio
                web.
              </li>
            </ul>

            <p className="mt-4">
              Los datos recibidos a través del formulario no se utilizarán para
              enviar newsletters o comunicaciones comerciales periódicas por el
              mero hecho de haber realizado una consulta.
            </p>
          </PrivacySection>

          <PrivacySection title="4. Base jurídica del tratamiento">
            <p>
              El tratamiento de las consultas relacionadas con presupuestos o
              posibles contrataciones puede basarse en la aplicación de medidas
              precontractuales solicitadas por la persona interesada, conforme
              al artículo 6.1.b del Reglamento General de Protección de Datos.
            </p>

            <p className="mt-4">
              La atención de otras consultas profesionales y las medidas
              necesarias para proteger el formulario y la seguridad de la web
              pueden fundamentarse en el interés legítimo de la responsable,
              cuando resulte aplicable, conforme al artículo 6.1.f del RGPD.
            </p>

            <p className="mt-4">
              Cuando alguna actividad requiera consentimiento, se solicitará de
              forma específica antes de realizar ese tratamiento.
            </p>
          </PrivacySection>

          <PrivacySection title="5. Carácter necesario de los datos">
            <p>
              Los campos identificados como obligatorios en el formulario son
              necesarios para gestionar y responder la consulta.
            </p>

            <p className="mt-4">
              Si no se facilitan los datos requeridos, no será posible enviar el
              formulario ni tramitar la solicitud por esa vía.
            </p>
          </PrivacySection>

          <PrivacySection title="6. Proveedores tecnológicos">
            <p>
              Para ofrecer el formulario y mantener la web operativa se utilizan
              distintos servicios tecnológicos:
            </p>

            <ul className="mt-4 list-disc space-y-4 pl-6">
              <li>
                <strong>Vercel:</strong> alojamiento y ejecución de la
                aplicación web, incluidos los componentes de servidor necesarios
                para procesar las solicitudes.
              </li>

              <li>
                <strong>Resend:</strong> servicio utilizado para enviar los
                mensajes recibidos desde el formulario.
              </li>

              <li>
                <strong>Google Gmail:</strong> servicio de correo electrónico
                utilizado para recibir y responder las consultas.
              </li>

              <li>
                <strong>Cloudflare Turnstile:</strong> servicio de verificación
                destinado a prevenir envíos automatizados y proteger el
                formulario.
              </li>
            </ul>

            <p className="mt-4">
              Estos proveedores pueden tratar información en la medida necesaria
              para prestar sus respectivos servicios, con arreglo a sus
              condiciones de tratamiento y protección de datos aplicables.
            </p>

            <p className="mt-4">
              La información relativa a la protección de datos de Cloudflare
              está disponible en su{" "}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                política de privacidad
              </a>
              .
            </p>
          </PrivacySection>

          <PrivacySection title="7. Destinatarios y comunicaciones">
            <p>
              Los datos proporcionados mediante el formulario se utilizan para
              atender la comunicación recibida.
            </p>

            <p className="mt-4">
              No está prevista su comunicación a terceros para finalidades
              comerciales ajenas a la solicitud.
            </p>

            <p className="mt-4">
              Los proveedores tecnológicos necesarios para gestionar los
              mensajes y mantener el sitio web pueden acceder a determinados
              datos en los términos de sus servicios.
            </p>

            <p className="mt-4">
              También podrán producirse comunicaciones cuando exista una
              obligación legal.
            </p>
          </PrivacySection>

          <PrivacySection title="8. Transferencias internacionales">
            <p>
              Algunos proveedores tecnológicos pueden tratar datos personales
              fuera del Espacio Económico Europeo.
            </p>

            <p className="mt-4">
              Cuando se produzcan transferencias internacionales, deberán
              aplicarse las garantías exigidas por el Reglamento General de
              Protección de Datos, conforme a las condiciones vigentes de los
              proveedores correspondientes.
            </p>

            <p className="mt-4">
              La información concreta sobre las ubicaciones, los mecanismos de
              transferencia y las garantías aplicables debe contrastarse con la
              documentación contractual de cada proveedor.
            </p>
          </PrivacySection>

          <PrivacySection title="9. Plazo de conservación">
            <p>
              Los datos de las consultas se conservarán durante el tiempo
              necesario para atender la solicitud y realizar el seguimiento de
              la comunicación profesional.
            </p>

            <p className="mt-4">
              Cuando de una consulta derive una relación contractual, podrán
              conservarse los datos necesarios durante los plazos aplicables a
              esa relación.
            </p>

            <p className="mt-4">
              Asimismo, determinados datos podrán conservarse durante el tiempo
              necesario para atender obligaciones legales o posibles
              responsabilidades.
            </p>

            <p className="mt-4">
              Los datos técnicos de seguridad estarán sujetos a los criterios de
              conservación asociados a los servicios utilizados.
            </p>
          </PrivacySection>

          <PrivacySection title="10. Derechos de las personas interesadas">
            <p>
              Las personas interesadas pueden ejercer, cuando corresponda, sus
              derechos de:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>Acceso a sus datos personales.</li>
              <li>Rectificación de datos inexactos.</li>
              <li>Supresión de sus datos.</li>
              <li>Oposición al tratamiento.</li>
              <li>Limitación del tratamiento.</li>
              <li>Portabilidad de los datos.</li>
            </ul>

            <p className="mt-4">
              Cuando el tratamiento se base en el consentimiento, este podrá
              retirarse en cualquier momento, sin afectar a la licitud del
              tratamiento anterior.
            </p>

            <p className="mt-4">
              Para ejercer estos derechos puede enviarse una solicitud a{" "}
              <a
                href="mailto:paularm.marketing@gmail.com"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                paularm.marketing@gmail.com
              </a>
              .
            </p>

            <p className="mt-4">
              También puede presentarse una reclamación ante la{" "}
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

          <PrivacySection title="11. Cookies y tecnologías similares">
            <p>
              La información sobre las cookies y tecnologías similares
              utilizadas en la navegación y funcionamiento de la web se
              encuentra disponible en la{" "}
              <Link
                href="/cookies"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </PrivacySection>

          <PrivacySection title="12. Seguridad de los datos">
            <p>
              Se aplican medidas técnicas orientadas a proteger las
              comunicaciones y el funcionamiento del formulario.
            </p>

            <p className="mt-4">
              El formulario utiliza Cloudflare Turnstile como mecanismo de
              protección frente a envíos automatizados, y el servicio de correo
              se gestiona desde el servidor, sin exponer las claves privadas en
              el navegador.
            </p>

            <p className="mt-4">
              Ningún sistema conectado a Internet puede garantizar una seguridad
              absoluta.
            </p>
          </PrivacySection>

          <PrivacySection title="13. Modificaciones de la política">
            <p>
              Esta política podrá actualizarse cuando se modifiquen los
              servicios tecnológicos, las funcionalidades del sitio o las
              operaciones de tratamiento de datos.
            </p>

            <p className="mt-4">
              La versión vigente estará disponible en esta misma página.
            </p>
          </PrivacySection>

          <p className="border-t border-[#EBCDD9] pt-7 text-sm text-[#A77B8D]">
            Última actualización: octubre de 2026.
          </p>
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
