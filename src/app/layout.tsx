import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

/* =========================================================
   CONFIGURACIÓN GENERAL
========================================================= */

const SITE_URL = "https://paularmmarketing.com";

const SITE_NAME = "Paula RM Marketing";

const SITE_TITLE =
  "Paula RM Marketing | Marketing digital y contenido creativo";

const SITE_DESCRIPTION =
  "Portfolio de Paula RM Marketing. Marketing digital, creación de contenido, diseño y Social Media. Descubre sus proyectos y experiencia profesional.";

/* =========================================================
   TIPOGRAFÍAS
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
   METADATOS GENERALES Y SEO
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: SITE_NAME,

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  authors: [
    {
      name: "Paula RM Marketing",
      url: SITE_URL,
    },
  ],

  creator: "Paula RM Marketing",

  /* =======================================================
     OPEN GRAPH
  ======================================================= */

  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Paula RM Marketing",
      },
    ],
  },

  /* =======================================================
     TWITTER / X
  ======================================================= */

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image.png"],
  },

  /* =======================================================
     INDEXACIÓN PÚBLICA
  ======================================================= */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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
