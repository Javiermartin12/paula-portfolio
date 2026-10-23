"use client";

import { sendGAEvent } from "@next/third-parties/google";

export type AnalyticsConsent = "accepted" | "rejected";

const STORAGE_KEY = "paula_analytics_consent_v1";

const CONSENT_DURATION = 180 * 24 * 60 * 60 * 1000;

type StoredConsent = {
  value: AnalyticsConsent;
  timestamp: number;
};

/* =========================================================
   CONSULTAR CONSENTIMIENTO
========================================================= */

export function getAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) return null;

    const stored = JSON.parse(raw) as StoredConsent;

    if (stored.value !== "accepted" && stored.value !== "rejected") {
      return null;
    }

    if (
      typeof stored.timestamp !== "number" ||
      Date.now() - stored.timestamp > CONSENT_DURATION
    ) {
      return null;
    }

    return stored.value;
  } catch {
    return null;
  }
}

/* =========================================================
   GUARDAR PREFERENCIAS
========================================================= */

export function saveAnalyticsConsent(value: AnalyticsConsent) {
  if (typeof window === "undefined") return;

  const stored: StoredConsent = {
    value,
    timestamp: Date.now(),
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Si el almacenamiento está bloqueado,
    // el consentimiento no se conserva.
  }
}

/* =========================================================
   ELIMINAR COOKIES DE GA4
========================================================= */

export function clearAnalyticsCookies() {
  if (typeof document === "undefined") return;

  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => /^_ga($|_)/.test(name));

  const domains = [
    "",
    window.location.hostname,
    ".paularmmarketing.com",
    ".www.paularmmarketing.com",
  ];

  for (const name of names) {
    for (const domain of domains) {
      const domainAttribute = domain ? `; domain=${domain}` : "";

      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainAttribute}`;
    }
  }
}

/* =========================================================
   EVENTO: FORMULARIO ENVIADO
========================================================= */

export function trackContactLead() {
  if (typeof window === "undefined" || getAnalyticsConsent() !== "accepted") {
    return;
  }

  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    return;
  }

  sendGAEvent("event", "generate_lead", {
    lead_source: "contact_form",
  });
}
