import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

/* =========================================================
   METADATOS
========================================================= */

export const metadata: Metadata = {
  title: "Política de Privacidad | Paula RM Marketing",
  description:
    "Información sobre privacidad y protección de datos personales en la web profesional de Paula RM Marketing.",
  robots: {
    index: false,
    follow: true,
  },
};

/* =========================================================
   POLÍTICA DE PRIVACIDAD
========================================================= */

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F5] text-[#30202A]">
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        {/* NAVEGACIÓN */}

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#D64C83] transition hover:text-[#A73566]"
        >
          ← Volver al portfolio
        </Link>

        {/* ENCABEZADO */}

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
            personales facilitados a través de esta web, así como sobre las
            herramientas tecnológicas utilizadas para su funcionamiento y
            análisis.
          </p>
        </div>

        {/* CONTENIDO LEGAL */}

        <div className="mt-14 space-y-10">
          {/* 1. RESPONSABLE */}

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
              La información identificativa adicional de la titular se encuentra
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

          {/* 2. DATOS RECOGIDOS */}

          <PrivacySection title="2. Datos personales que se recogen">
            <p>
              A través del formulario de contacto pueden recogerse las
              siguientes categorías de datos:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>Nombre facilitado por la persona visitante.</li>

              <li>Dirección de correo electrónico.</li>

              <li>
                Información incluida voluntariamente en el mensaje o consulta.
              </li>
            </ul>

            <p className="mt-4">
              Asimismo, determinados servicios técnicos pueden tratar
              información relacionada con la conexión, el dispositivo, la
              navegación y la seguridad del sitio, según su configuración y
              funcionamiento.
            </p>

            <p className="mt-4">
              Si la persona visitante acepta las cookies analíticas, Google
              Analytics 4 podrá recoger información sobre sus interacciones con
              la web, como páginas visitadas, eventos de navegación y datos
              técnicos asociados a la medición.
            </p>

            <p className="mt-4">
              Se recomienda no incluir datos personales sensibles o información
              innecesaria en los mensajes enviados mediante el formulario.
            </p>
          </PrivacySection>

          {/* 3. FINALIDADES */}

          <PrivacySection title="3. Finalidades del tratamiento">
            <p>
              Los datos personales se tratarán para las siguientes finalidades:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>
                Responder a las solicitudes de información recibidas mediante el
                formulario de contacto.
              </li>

              <li>
                Atender consultas sobre servicios profesionales de marketing,
                comunicación digital y creación de contenido.
              </li>

              <li>
                Gestionar posibles propuestas de colaboración y contratación.
              </li>

              <li>
                Proteger el formulario frente a envíos automatizados,
                fraudulentos o abusivos.
              </li>

              <li>
                Garantizar el correcto funcionamiento técnico y la seguridad del
                sitio web.
              </li>

              <li>
                Analizar las visitas, las páginas consultadas y las
                interacciones con el sitio web mediante Google Analytics 4,
                únicamente cuando exista consentimiento para ello.
              </li>

              <li>
                Medir los envíos satisfactorios del formulario como eventos de
                contacto, siempre que la persona visitante haya aceptado la
                medición analítica.
              </li>
            </ul>

            <p className="mt-4">
              Los datos recibidos mediante el formulario de contacto no se
              utilizarán para enviar newsletters o comunicaciones comerciales
              periódicas por el mero hecho de haber realizado una consulta.
            </p>

            <p className="mt-4">
              Los eventos analíticos del formulario se configuran sin incluir
              los nombres, direcciones de correo electrónico ni mensajes
              introducidos por las personas visitantes.
            </p>
          </PrivacySection>

          {/* 4. BASE JURÍDICA */}

          <PrivacySection title="4. Base jurídica del tratamiento">
            <p>
              La base jurídica del tratamiento dependerá de su finalidad
              concreta.
            </p>

            <p className="mt-4">
              La atención de solicitudes relacionadas con presupuestos o
              posibles contrataciones podrá basarse en la aplicación de medidas
              precontractuales solicitadas por la persona interesada, conforme
              al artículo 6.1.b del Reglamento General de Protección de Datos.
            </p>

            <p className="mt-4">
              La gestión de otras consultas profesionales y las actuaciones
              necesarias para mantener la seguridad del sitio podrán
              fundamentarse, cuando corresponda, en el interés legítimo de la
              responsable, conforme al artículo 6.1.f del RGPD.
            </p>

            <p className="mt-4">
              La utilización de Google Analytics 4 para analizar la navegación
              se fundamenta en el consentimiento de la persona visitante,
              conforme al artículo 6.1.a del RGPD.
            </p>

            <p className="mt-4">
              Las cookies analíticas son opcionales y la persona visitante puede
              rechazarlas sin que ello impida acceder al contenido de la web.
            </p>

            <p className="mt-4">
              El consentimiento puede retirarse posteriormente mediante el
              acceso a las preferencias de cookies disponible en el sitio web.
            </p>
          </PrivacySection>

          {/* 5. DATOS OBLIGATORIOS */}

          <PrivacySection title="5. Carácter necesario de los datos">
            <p>
              Los campos identificados como obligatorios en el formulario son
              necesarios para gestionar y responder la consulta.
            </p>

            <p className="mt-4">
              Si no se facilita la información requerida, no será posible enviar
              el formulario ni tramitar la solicitud por esa vía.
            </p>

            <p className="mt-4">
              La aceptación de cookies analíticas no es obligatoria para
              utilizar el formulario de contacto.
            </p>
          </PrivacySection>

          {/* 6. PROVEEDORES */}

          <PrivacySection title="6. Proveedores tecnológicos">
            <p>
              Para prestar los servicios de la web, gestionar las comunicaciones
              y analizar su funcionamiento, se utilizan los siguientes
              proveedores:
            </p>

            <ul className="mt-4 list-disc space-y-4 pl-6">
              <li>
                <strong>Vercel:</strong> proveedor de alojamiento y ejecución de
                la aplicación web, incluidos los componentes necesarios para
                procesar solicitudes desde el servidor.
              </li>

              <li>
                <strong>Resend:</strong> servicio utilizado para enviar los
                mensajes recibidos mediante el formulario de contacto.
              </li>

              <li>
                <strong>Google Gmail:</strong> servicio de correo electrónico
                utilizado para recibir y responder las consultas profesionales.
              </li>

              <li>
                <strong>Cloudflare Turnstile:</strong> servicio de verificación
                de seguridad destinado a reducir solicitudes automatizadas y
                proteger el formulario.
              </li>

              <li>
                <strong>Google Analytics 4:</strong> servicio de analítica web
                utilizado para medir visitas, páginas consultadas, procedencia
                del tráfico e interacciones, cuando la persona visitante haya
                aceptado las cookies analíticas.
              </li>
            </ul>

            <p className="mt-4">
              Estos proveedores pueden tratar determinados datos en la medida
              necesaria para prestar sus servicios, conforme a sus condiciones
              contractuales y garantías aplicables de protección de datos.
            </p>

            <p className="mt-4">
              Puede consultarse información adicional sobre los servicios de
              Google en su{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Política de Privacidad
              </a>
              .
            </p>

            <p className="mt-4">
              La información relativa al tratamiento de datos por parte de
              Cloudflare está disponible en su{" "}
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

          {/* 7. DESTINATARIOS */}

          <PrivacySection title="7. Destinatarios y comunicaciones">
            <p>
              Los datos proporcionados a través del formulario se utilizan para
              atender las comunicaciones recibidas.
            </p>

            <p className="mt-4">
              No está prevista su comunicación a terceros para finalidades
              comerciales ajenas a la consulta realizada.
            </p>

            <p className="mt-4">
              Los proveedores tecnológicos necesarios para gestionar la web, las
              comunicaciones y las funciones de análisis autorizadas podrán
              tratar determinados datos conforme a las condiciones de sus
              respectivos servicios.
            </p>

            <p className="mt-4">
              También podrán producirse comunicaciones cuando exista una
              obligación legal que así lo exija.
            </p>
          </PrivacySection>

          {/* 8. TRANSFERENCIAS INTERNACIONALES */}

          <PrivacySection title="8. Transferencias internacionales">
            <p>
              Algunos proveedores tecnológicos pueden realizar tratamientos o
              transferencias de datos personales fuera del Espacio Económico
              Europeo.
            </p>

            <p className="mt-4">
              En esos casos deberán aplicarse las garantías previstas en el
              Reglamento General de Protección de Datos, de acuerdo con las
              condiciones y los mecanismos de transferencia correspondientes.
            </p>

            <p className="mt-4">
              La ubicación de los tratamientos y las garantías aplicables
              deberán comprobarse con la documentación contractual vigente de
              los proveedores.
            </p>
          </PrivacySection>

          {/* 9. CONSERVACIÓN */}

          <PrivacySection title="9. Plazo de conservación">
            <p>
              Los datos facilitados mediante las consultas se conservarán
              durante el tiempo necesario para atender la solicitud y realizar
              el seguimiento de la comunicación profesional.
            </p>

            <p className="mt-4">
              Cuando de una consulta derive una relación contractual, podrán
              conservarse los datos necesarios durante los plazos
              correspondientes a dicha relación.
            </p>

            <p className="mt-4">
              Asimismo, determinados datos podrán conservarse durante el periodo
              exigido para cumplir obligaciones legales o atender posibles
              responsabilidades.
            </p>

            <p className="mt-4">
              Los datos técnicos y analíticos estarán sujetos a los periodos de
              conservación configurados en los servicios correspondientes, que
              deberán revisarse según su finalidad y necesidad.
            </p>
          </PrivacySection>

          {/* 10. DERECHOS */}

          <PrivacySection title="10. Derechos de las personas interesadas">
            <p>
              Las personas interesadas podrán ejercer, cuando corresponda, los
              siguientes derechos:
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
              Para ejercer estos derechos, puede enviarse una solicitud a{" "}
              <a
                href="mailto:paularm.marketing@gmail.com"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                paularm.marketing@gmail.com
              </a>
              .
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

          {/* 11. COOKIES Y ANALÍTICA */}

          <PrivacySection title="11. Cookies y tecnologías similares">
            <p>
              Esta web utiliza tecnologías técnicas necesarias para su
              funcionamiento y protección frente a usos abusivos.
            </p>

            <p className="mt-4">
              También ofrece la posibilidad de autorizar cookies analíticas
              utilizadas por Google Analytics 4 para conocer cómo se navega por
              el sitio web.
            </p>

            <p className="mt-4">
              Las preferencias de analítica se gestionan mediante un sistema de
              consentimiento que permite aceptar o rechazar su utilización.
            </p>

            <p className="mt-4">
              La decisión puede modificarse posteriormente utilizando el acceso
              a las preferencias de cookies disponible en la web.
            </p>

            <p className="mt-4">
              Para conocer las cookies utilizadas, sus finalidades, duración y
              opciones de configuración, puede consultarse la{" "}
              <Link
                href="/cookies"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </PrivacySection>

          {/* 12. SEGURIDAD */}

          <PrivacySection title="12. Seguridad de los datos">
            <p>
              Se aplican medidas técnicas orientadas a proteger las
              comunicaciones y el funcionamiento del formulario.
            </p>

            <p className="mt-4">
              El formulario incorpora Cloudflare Turnstile como mecanismo de
              protección frente a envíos automatizados.
            </p>

            <p className="mt-4">
              Los mensajes se gestionan mediante un servicio de envío desde el
              servidor, evitando exponer las claves privadas en el navegador.
            </p>

            <p className="mt-4">
              El sistema de analítica se configura para no cargar la etiqueta de
              Google Analytics antes de obtener el consentimiento
              correspondiente.
            </p>

            <p className="mt-4">
              Ningún sistema conectado a Internet puede garantizar una seguridad
              absoluta.
            </p>
          </PrivacySection>

          {/* 13. ACTUALIZACIONES */}

          <PrivacySection title="13. Modificaciones de la política">
            <p>
              Esta política podrá actualizarse cuando se modifiquen los
              servicios tecnológicos, las funcionalidades del sitio web o las
              operaciones de tratamiento de datos.
            </p>

            <p className="mt-4">
              La versión vigente estará disponible en esta misma página.
            </p>
          </PrivacySection>

          {/* FECHA */}

          <p className="border-t border-[#EBCDD9] pt-7 text-sm text-[#A77B8D]">
            Última actualización: octubre de 2026.
          </p>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   COMPONENTE REUTILIZABLE PARA SECCIONES
========================================================= */

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
