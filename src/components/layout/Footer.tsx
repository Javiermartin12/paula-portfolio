import Link from "next/link";
import { ArrowUp, Lightbulb } from "lucide-react";

/* =========================================================
   ENLACES LEGALES
========================================================= */

const legalLinks = [
  {
    label: "Aviso legal",
    href: "/aviso-legal",
  },
  {
    label: "Privacidad",
    href: "/privacidad",
  },
  {
    label: "Cookies",
    href: "/cookies",
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#271A26] text-[#FFF3F8]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =================================================
            BLOQUE SUPERIOR
        ================================================= */}

        <div className="flex items-start justify-between gap-6 pt-11 pb-9 sm:pt-12 sm:pb-10">
          {/* IDENTIDAD Y ENLACES */}

          <div className="min-w-0">
            {/* LOGOTIPO */}

            <Link
              href="/"
              aria-label="Paula - Volver al inicio"
              className="inline-flex items-center gap-3"
            >
              <span className="text-3xl font-black tracking-[-0.07em] text-white sm:text-4xl">
                PAULA
              </span>

              <Lightbulb
                size={25}
                strokeWidth={1.8}
                className="text-[#F19ABD]"
              />
            </Link>

            {/* DESCRIPCIÓN */}

            <p className="mt-3 text-sm leading-6 text-[#CDAFBE]">
              Marketing, creatividad y muchas ideas.
            </p>

            {/* =============================================
                ENLACES LEGALES EN MÓVIL Y TABLET
            ============================================= */}

            <nav
              aria-label="Información legal"
              className="mt-7 flex flex-col items-start gap-4 lg:hidden"
            >
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#CDAFBE] transition-colors duration-200 hover:text-[#F5A7C7]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* BOTÓN VOLVER ARRIBA */}

          <a
            href="#"
            aria-label="Volver arriba"
            title="Volver arriba"
            className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#674554] bg-[#382633] text-[#F0B0CB] transition-all duration-300 hover:-translate-y-1 hover:border-[#E994B6] hover:bg-[#E994B6] hover:text-[#271A26]"
          >
            <ArrowUp
              size={19}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* =================================================
            BLOQUE INFERIOR
        ================================================= */}

        <div className="border-t border-white/10 py-6">
          <div className="flex items-center justify-between gap-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
            {/* COPYRIGHT - IZQUIERDA */}

            <p className="shrink-0 text-xs text-[#AE8F9F]">
              © {new Date().getFullYear()} Paula
            </p>

            {/* FRASE CREATIVA - DERECHA EN MÓVIL */}

            <p className="whitespace-nowrap text-right font-serif text-[13px] italic text-[#F0A2C1] sm:text-base lg:text-center">
              Made with creativity ✳
            </p>

            {/* =============================================
                ENLACES LEGALES EN ESCRITORIO
            ============================================= */}

            <nav
              aria-label="Información legal"
              className="hidden items-center justify-end gap-5 lg:flex"
            >
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-xs text-[#CDAFBE] transition-colors duration-200 hover:text-[#F5A7C7]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
