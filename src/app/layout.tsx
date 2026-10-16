import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

/* =========================================================
   FUENTES
========================================================= */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* =========================================================
   METADATOS GENERALES
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000"),
  ),
  applicationName: "Paula Portfolio",

  title: "Paula | Marketing, creatividad y contenido",

  description:
    "Portfolio creativo de Paula. Marketing digital, estrategia, creación de contenido y proyectos de comunicación para marcas y negocios.",

  keywords: [
    "Paula",
    "Marketing digital",
    "Portfolio de marketing",
    "Creación de contenido",
    "Social Media",
    "Estrategia digital",
    "Creatividad",
    "Comunicación digital",
  ],

  /* =======================================================
     OPEN GRAPH
     Vista previa al compartir la web
  ======================================================= */

  openGraph: {
    type: "website",
    locale: "es_ES",

    title: "Paula | Marketing, creatividad y contenido",

    description:
      "Ideas, estrategia y creatividad. Descubre los proyectos y el universo creativo de Paula.",

    siteName: "Paula Portfolio",
  },

  /* =======================================================
     TWITTER / X
  ======================================================= */

  twitter: {
    card: "summary_large_image",

    title: "Paula | Marketing, creatividad y contenido",

    description:
      "Marketing, contenido y creatividad. Un portfolio lleno de ideas con intención.",
  },

  /* =======================================================
     INDEXACIÓN TEMPORAL

     Durante la revisión del portfolio mantenemos
     la web fuera del índice de los buscadores.

     IMPORTANTE:
     Cambiar antes del lanzamiento definitivo.
  ======================================================= */

  robots: {
    index: false,
    follow: false,

    googleBot: {
      index: false,
      follow: false,
    },
  },
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
