"use client";

import { useState, useSyncExternalStore } from "react";

import Link from "next/link";

import { Cookie, Settings2, ShieldCheck } from "lucide-react";

import GoogleAnalytics from "./GoogleAnalytics";

import {
  clearAnalyticsCookies,
  getAnalyticsConsent,
  saveAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics";

/* =========================================================
   SINCRONIZACIÓN DEL CONSENTIMIENTO
========================================================= */

const CONSENT_EVENT = "paula-analytics-consent-change";

function subscribeConsent(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CONSENT_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CONSENT_EVENT, onChange);
  };
}

function getServerConsent(): undefined {
  return undefined;
}

/* =========================================================
   CONSENTIMIENTO DE COOKIES
========================================================= */

export default function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getAnalyticsConsent,
    getServerConsent,
  );

  const [settingsOpen, setSettingsOpen] = useState(false);

  function chooseConsent(value: AnalyticsConsent) {
    const wasAccepted = consent === "accepted";

    saveAnalyticsConsent(value);

    // Notificar el cambio a React.
    window.dispatchEvent(new Event(CONSENT_EVENT));

    setSettingsOpen(false);

    // Si se retira el consentimiento,
    // detener la analítica ya cargada.
    if (wasAccepted && value === "rejected") {
      clearAnalyticsCookies();
      window.location.reload();
    }
  }

  // Evitar diferencias entre servidor y navegador.
  if (consent === undefined) {
    return null;
  }

  const isOpen = consent === null || settingsOpen;

  return (
    <>
      {/* ================================================
          GOOGLE ANALYTICS
          ÚNICAMENTE CON CONSENTIMIENTO
      ================================================ */}

      {consent === "accepted" && <GoogleAnalytics />}

      {/* ================================================
          BOTÓN PARA MODIFICAR PREFERENCIAS
      ================================================ */}

      {!isOpen && consent !== null && (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          aria-label="Modificar preferencias de cookies"
          className="fixed bottom-5 left-5 z-[110] inline-flex items-center gap-2 rounded-full border border-[#EFD4DF] bg-[#FFF8F5] px-4 py-3 text-xs font-semibold text-[#503241] shadow-lg transition hover:bg-[#FCE6EF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E94E8F]"
        >
          <Settings2 size={16} />
          Cookies
        </button>
      )}

      {/* ================================================
          PANEL DE CONSENTIMIENTO
      ================================================ */}

      {isOpen && (
        <div
          role="region"
          aria-label="Preferencias de cookies"
          className="fixed inset-x-4 bottom-4 z-[120] mx-auto max-w-xl rounded-[24px] border border-[#EFD4DF] bg-[#FFF8F5] p-5 text-[#30202A] shadow-[0_20px_70px_rgba(48,32,46,0.22)] sm:bottom-6 sm:p-7"
        >
          {/* Cabecera */}

          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FCE1EC] text-[#C94B80]">
              <Cookie size={22} strokeWidth={1.7} />
            </div>

            <div className="min-w-0">
              <h2 className="text-lg font-black tracking-[-0.035em]">
                Tu privacidad importa.
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#755866]">
                Utilizamos tecnologías necesarias para el funcionamiento y la
                seguridad de la web. Con tu permiso, también utilizaremos Google
                Analytics para conocer las visitas y mejorar nuestros
                contenidos.
              </p>
            </div>
          </div>

          {/* Información */}

          <div className="mt-5 flex items-start gap-2 rounded-xl bg-[#FFF0F5] p-3">
            <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#B45178]" />

            <p className="text-xs leading-5 text-[#755866]">
              Las cookies analíticas son opcionales. Puedes rechazar su uso y
              seguir navegando normalmente.
            </p>
          </div>

          {/* ============================================
              ACEPTAR / RECHAZAR
          ============================================ */}

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => chooseConsent("rejected")}
              className="min-h-12 rounded-xl border border-[#30202A] bg-white px-4 py-3 text-sm font-bold text-[#30202A] transition hover:bg-[#F6EBF0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30202A]"
            >
              Rechazar
            </button>

            <button
              type="button"
              onClick={() => chooseConsent("accepted")}
              className="min-h-12 rounded-xl border border-[#30202A] bg-[#30202A] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#503241] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30202A]"
            >
              Aceptar analíticas
            </button>
          </div>

          {/* ============================================
              INFORMACIÓN LEGAL
          ============================================ */}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
            <Link
              href="/cookies"
              className="text-xs font-semibold text-[#B45178] underline underline-offset-4 transition hover:text-[#30202A]"
            >
              Política de Cookies
            </Link>

            <Link
              href="/privacidad"
              className="text-xs font-semibold text-[#B45178] underline underline-offset-4 transition hover:text-[#30202A]"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
