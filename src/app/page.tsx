import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import CreativeWorld from "@/components/home/CreativeWorld";
import Toolbox from "@/components/home/Toolbox";
import SelectedProjects from "@/components/home/SelectedProjects";
import Experience from "@/components/home/Experience";
import Education from "@/components/home/Education";
import BehindTheScenes from "@/components/home/BehindTheScenes";
import ContactCTA from "@/components/home/ContactCTA";

import { paulaProfile } from "@/data/profile";

/* =========================================================
   SEO DE LA HOME
========================================================= */

const title = "Paula RM Marketing | Marketing digital y contenido creativo";

const description =
  "Portfolio de Paula RM Marketing. Marketing digital, creación de contenido, diseño y Social Media. Descubre sus proyectos y experiencia profesional.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },

  description,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Paula RM Marketing",
    title,
    description,

    images: [
      {
        url: "/opengraph-image.png",
        alt: "Paula RM Marketing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
};

/* =========================================================
   HOME - PAULA RM MARKETING
========================================================= */

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* PRESENTACIÓN */}
        <Hero />

        {/* SOBRE MÍ */}
        <About photoSrc={paulaProfile.portrait || undefined} />

        {/* MI MUNDO CREATIVO */}
        <CreativeWorld
          photoSrc={paulaProfile.creativePhoto || undefined}
          videoSrc={paulaProfile.creativeVideo || undefined}
          videoPoster={paulaProfile.creativeVideoPoster || undefined}
        />

        {/* HERRAMIENTAS */}
        <Toolbox />

        {/* PROYECTOS */}
        <SelectedProjects />

        {/* EXPERIENCIA PROFESIONAL */}
        <Experience />

        {/* FORMACIÓN Y CERTIFICACIONES */}
        <Education />

        {/* DETRÁS DE LAS CÁMARAS */}
        <BehindTheScenes
          images={{
            ideas: paulaProfile.behindImages.ideas || undefined,
            shooting: paulaProfile.behindImages.shooting || undefined,
            editing: paulaProfile.behindImages.editing || undefined,
          }}
        />

        {/* CONTACTO */}
        <ContactCTA
          email={paulaProfile.email || undefined}
          instagramUrl={paulaProfile.instagramUrl || undefined}
          linkedinUrl={paulaProfile.linkedinUrl || undefined}
        />
      </main>

      <Footer />
    </>
  );
}
