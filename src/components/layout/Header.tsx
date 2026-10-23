"use client";

import Link from "next/link";
import { useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { ArrowUpRight, Lightbulb, Menu, X } from "lucide-react";

/* =========================================================
   NAVEGACIÓN
========================================================= */

const navigation = [
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Mi mundo", href: "/#mi-mundo" },
  { label: "Herramientas", href: "/#herramientas" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Contacto", href: "/#contacto" },
];

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#EED7E0] bg-[#FFF8F5]/95 backdrop-blur-xl"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
        }
      }}
    >
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">
        {/* ================================================
            LOGOTIPO PRINCIPAL
        ================================================ */}

        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Paula - Ir al inicio"
          className="group inline-flex shrink-0 items-center gap-2.5"
        >
          <span className="text-[25px] font-black tracking-[-0.075em] text-[#30202A] transition-colors group-hover:text-[#E94E8F] sm:text-[28px]">
            PAULA
          </span>

          <Lightbulb
            size={23}
            strokeWidth={1.7}
            className="text-[#E94E8F] transition-transform duration-500 group-hover:rotate-45"
          />

          <span className="ml-3 hidden border-l border-[#EBCDD9] pl-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#A56C84] xl:inline">
            Marketing & Creativity
          </span>
        </Link>

        {/* ================================================
            NAVEGACIÓN ESCRITORIO
        ================================================ */}

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm font-semibold text-[#765665] transition-colors duration-300 hover:text-[#E94E8F]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ================================================
            CONTACTO ESCRITORIO
        ================================================ */}

        <Link
          href="/#contacto"
          className="group hidden shrink-0 items-center gap-2 rounded-full bg-[#30202A] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#E94E8F] lg:inline-flex"
        >
          Let&apos;s connect
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        {/* ================================================
            BOTÓN MÓVIL Y TABLET
        ================================================ */}

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="paula-mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
            isOpen
              ? "border-[#E94E8F] bg-[#E94E8F] text-white"
              : "border-[#EBCDD9] bg-white/60 text-[#503241] hover:border-[#ECA9C4] hover:bg-[#FCE5EE]"
          }`}
        >
          <span
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </span>
        </button>
      </div>

      {/* =====================================================
          MENÚ DESPLEGABLE ANIMADO
      ===================================================== */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="paula-mobile-navigation"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: -12,
                    scale: 0.985,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    y: -8,
                    scale: 0.985,
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.28,
              ease: "easeOut",
            }}
            className="absolute left-4 right-4 top-[calc(100%+10px)] z-50 overflow-hidden rounded-[26px] border border-[#F0D1DE] bg-[#FFF9F8]/98 p-4 shadow-[0_25px_65px_-20px_rgba(92,39,65,0.25)] backdrop-blur-xl sm:left-auto sm:right-6 sm:w-[380px] lg:hidden"
          >
            {/* DECORACIÓN SUPERIOR */}

            <div className="mb-3 flex items-center justify-between border-b border-[#F0D8E1] px-3 pb-4 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#AF6A87]">
                Explora mi mundo
              </span>

              <Lightbulb
                size={19}
                strokeWidth={1.7}
                className="text-[#E94E8F]"
              />
            </div>

            {/* ENLACES */}

            <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.3,
                    delay: reduceMotion ? 0 : index * 0.045,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-[#503241] transition-colors duration-200 hover:bg-[#FCE6EF] hover:text-[#D94882]"
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={17}
                      className="text-[#D49AB0] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D94882]"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CONTACTO DESTACADO */}

            <div className="mt-4 border-t border-[#F0D8E1] px-1 pt-4">
              <Link
                href="/#contacto"
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 rounded-full bg-[#E94E8F] px-5 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#C83D76]"
              >
                ¿Tienes una idea? Hablemos
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* DETALLE EDITORIAL */}

            <p className="mt-4 pb-1 text-center font-serif text-sm italic text-[#B57691]">
              Made with lots of ideas ✳
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
