import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Política de Cookies | Paula RM Marketing",
  description:
    "Información sobre el uso de cookies y tecnologías similares en la web de Paula RM Marketing.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookiesPage() {
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
            Información sobre cookies
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Política de{" "}
            <span className="font-serif font-normal italic text-[#E94E8F]">
              cookies.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#806575]">
            Información sobre el uso de cookies y otras tecnologías relacionadas
            con el funcionamiento, la navegación y la seguridad de este sitio
            web.
          </p>
        </div>

        {/* Contenido */}
        <div className="mt-14 space-y-10">
          <CookieSection title="1. Responsable del sitio web">
            <p>
              Este sitio web corresponde a la actividad profesional de Paula RM
              Marketing.
            </p>

            <p className="mt-4">
              La identificación de su titular se encuentra disponible en el{" "}
              <Link
                href="/aviso-legal"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Aviso Legal
              </Link>
              .
            </p>

            <p className="mt-4">
              Para cualquier consulta relacionada con el uso de cookies o la
              privacidad, puede contactar mediante el correo electrónico{" "}
              <a
                href="mailto:paularm.marketing@gmail.com"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                paularm.marketing@gmail.com
              </a>
              .
            </p>
          </CookieSection>

          <CookieSection title="2. Qué son las cookies">
            <p>
              Las cookies son pequeños archivos de información que los sitios
              web pueden almacenar en el navegador o dispositivo de las personas
              usuarias.
            </p>

            <p className="mt-4">
              Se utilizan para diferentes finalidades, como permitir
              determinadas funcionalidades, mantener la seguridad, recordar
              preferencias o realizar mediciones de navegación.
            </p>

            <p className="mt-4">
              Existen también otras tecnologías que pueden utilizarse para
              finalidades similares, como determinados mecanismos de
              almacenamiento local o identificadores técnicos.
            </p>
          </CookieSection>

          <CookieSection title="3. Tecnologías utilizadas en la web">
            <p>
              El sitio está desarrollado con Next.js y utiliza Vercel como
              infraestructura de alojamiento y ejecución.
            </p>

            <p className="mt-4">
              Para gestionar las solicitudes de contacto se utiliza Resend, que
              permite enviar los mensajes desde el servidor a la dirección de
              correo de la titular.
            </p>

            <p className="mt-4">
              La integración de Resend utilizada en este formulario no necesita
              instalar cookies propias en el navegador para realizar el envío de
              los mensajes.
            </p>

            <p className="mt-4">
              El formulario también incorpora Cloudflare Turnstile como
              herramienta de protección frente a solicitudes automatizadas o
              fraudulentas.
            </p>

            <p className="mt-4">
              Turnstile realiza comprobaciones técnicas del entorno de
              navegación para diferenciar las interacciones legítimas de las
              automatizadas.
            </p>

            <p className="mt-4">
              En la configuración implementada, la función de pre-clearance está
              desactivada, por lo que no se solicita la emisión de la cookie de
              autorización cf_clearance mediante dicha función.
            </p>

            <p className="mt-4">
              El funcionamiento de estos servicios puede implicar el tratamiento
              de datos técnicos necesarios para la seguridad y prestación del
              servicio.
            </p>

            <p className="mt-4">
              Puede consultarse más información sobre Cloudflare en su{" "}
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
          </CookieSection>

          <CookieSection title="4. Finalidades y consentimiento">
            <p>
              Las cookies y tecnologías estrictamente necesarias para
              proporcionar un servicio solicitado, mantener el funcionamiento
              técnico o proteger la seguridad del sitio pueden estar exceptuadas
              de la obligación de obtener consentimiento, cuando se cumplan los
              requisitos legales aplicables.
            </p>

            <p className="mt-4">
              En caso de incorporar cookies analíticas, publicitarias o de
              seguimiento que requieran consentimiento, se informará previamente
              sobre sus finalidades y se habilitará un mecanismo para aceptarlas
              o rechazarlas.
            </p>

            <p className="mt-4">
              Estas tecnologías no se activarán antes de obtener el
              consentimiento cuando este resulte legalmente exigible.
            </p>
          </CookieSection>

          <CookieSection title="5. Servicios y contenidos externos">
            <p>
              El portfolio puede incluir enlaces a redes sociales, páginas de
              clientes, proyectos profesionales y otros servicios externos.
            </p>

            <p className="mt-4">
              Al acceder voluntariamente a esos sitios, las personas usuarias
              quedan sujetas a las políticas de privacidad y cookies de sus
              respectivos responsables.
            </p>

            <p className="mt-4">
              La incorporación futura de vídeos incrustados, reproductores
              externos, herramientas estadísticas o servicios publicitarios
              requerirá revisar las tecnologías que utilicen y actualizar esta
              política cuando corresponda.
            </p>
          </CookieSection>

          <CookieSection title="6. Gestión de cookies desde el navegador">
            <p>
              Las personas usuarias pueden consultar, eliminar o bloquear
              cookies mediante la configuración de privacidad y seguridad de su
              navegador.
            </p>

            <p className="mt-4">
              Estas opciones suelen estar disponibles en navegadores como Google
              Chrome, Mozilla Firefox, Microsoft Edge y Safari.
            </p>

            <p className="mt-4">
              La restricción de determinados mecanismos técnicos puede afectar
              al funcionamiento de algunas características, incluido el sistema
              de verificación de seguridad del formulario.
            </p>
          </CookieSection>

          <CookieSection title="7. Protección de datos personales">
            <p>
              La utilización de determinadas tecnologías puede implicar el
              tratamiento de información técnica o datos personales.
            </p>

            <p className="mt-4">
              Para conocer las finalidades del tratamiento, los proveedores
              tecnológicos y los derechos de las personas interesadas, puede
              consultar la{" "}
              <Link
                href="/privacidad"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Política de Privacidad
              </Link>
              .
            </p>
          </CookieSection>

          <CookieSection title="8. Actualizaciones de esta política">
            <p>
              Esta política podrá actualizarse cuando cambien las
              funcionalidades de la web, los servicios utilizados o las
              tecnologías de almacenamiento y seguimiento.
            </p>

            <p className="mt-4">
              La información vigente estará disponible en esta misma página.
            </p>

            <p className="mt-4 text-sm text-[#A77B8D]">
              Última actualización: octubre de 2026.
            </p>
          </CookieSection>
        </div>
      </section>
    </main>
  );
}

function CookieSection({
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
