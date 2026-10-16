import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Política de Cookies | Paula",
  description:
    "Información sobre cookies y tecnologías similares en el portfolio de Paula.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookiesPage() {
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
            Información sobre cookies
          </p>

          <h1 className="mt-5 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Política de{" "}
            <span className="font-serif font-normal italic text-[#E94E8F]">
              cookies.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#806575]">
            Información sobre el uso de cookies y tecnologías similares durante
            la navegación por este portfolio.
          </p>
        </div>

        {/* Contenido */}

        <div className="mt-14 space-y-10">
          <CookieSection title="1. Qué son las cookies">
            <p>
              Las cookies son pequeños archivos que los sitios web pueden
              almacenar en los dispositivos de las personas usuarias durante la
              navegación.
            </p>

            <p className="mt-4">
              Pueden utilizarse para facilitar el funcionamiento técnico del
              sitio, recordar preferencias o recopilar información estadística.
            </p>
          </CookieSection>

          <CookieSection title="2. Uso actual del sitio web">
            <p>
              En su configuración actual, este portfolio no incorpora
              herramientas propias de analítica de visitantes, seguimiento
              publicitario ni elaboración de perfiles comerciales.
            </p>

            <p className="mt-4">
              El proveedor de alojamiento podrá utilizar mecanismos técnicos
              necesarios para la seguridad y el funcionamiento del servicio,
              según su configuración.
            </p>

            <p className="mt-4">
              Antes de la publicación definitiva se comprobarán las cookies
              efectivamente utilizadas por el sitio y sus proveedores.
            </p>
          </CookieSection>

          <CookieSection title="3. Contenido y enlaces externos">
            <p>
              El portfolio puede incluir enlaces a redes sociales y sitios web
              de terceros.
            </p>

            <p className="mt-4">
              Al acceder a servicios externos, estos podrán utilizar sus propias
              cookies de acuerdo con sus respectivas políticas.
            </p>

            <p className="mt-4">
              Si se incorporan vídeos incrustados, herramientas de medición u
              otros elementos que utilicen cookies no necesarias, se revisará
              esta política y se habilitará el consentimiento previo cuando
              resulte exigible.
            </p>
          </CookieSection>

          <CookieSection title="4. Gestión desde el navegador">
            <p>
              Las personas usuarias pueden configurar su navegador para
              bloquear, consultar o eliminar cookies y otros datos almacenados.
            </p>

            <p className="mt-4">
              Estas opciones suelen encontrarse en los apartados de privacidad y
              seguridad del navegador.
            </p>
          </CookieSection>

          <CookieSection title="5. Protección de datos">
            <p>
              Puede consultarse información adicional en la{" "}
              <Link
                href="/privacidad"
                className="font-semibold text-[#D64C83] hover:underline"
              >
                Política de Privacidad
              </Link>
              .
            </p>
          </CookieSection>

          <CookieSection title="6. Actualizaciones">
            <p>
              Esta política se actualizará cuando cambien las tecnologías
              utilizadas en el portfolio o las finalidades de su uso.
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
