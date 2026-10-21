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
   METADATOS
========================================================= */

export const metadata: Metadata = {
  title: "Paula | Marketing, creatividad y contenido",
  description:
    "Portfolio creativo de Paula. Marketing, estrategia, contenido digital, experiencia profesional y proyectos.",
};

/* =========================================================
   HOME - PAULA RM MARKETING
========================================================= */

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* 01. PRESENTACIÓN */}
        <Hero />

        {/* 02. SOBRE MÍ */}
        <About photoSrc={paulaProfile.portrait || undefined} />

        {/* 03. MI MUNDO CREATIVO */}
        <CreativeWorld
          photoSrc={paulaProfile.creativePhoto || undefined}
          videoSrc={paulaProfile.creativeVideo || undefined}
          videoPoster={paulaProfile.creativeVideoPoster || undefined}
        />

        {/* 04. HERRAMIENTAS */}
        <Toolbox />

        {/* 05. PROYECTOS DESTACADOS */}
        <SelectedProjects />

        {/* 06. EXPERIENCIA PROFESIONAL */}
        <Experience />

        {/* 07. FORMACIÓN Y CERTIFICACIONES */}
        <Education />

        {/* 08. DETRÁS DE LAS CÁMARAS */}
        <BehindTheScenes
          images={{
            ideas: paulaProfile.behindImages.ideas || undefined,
            shooting: paulaProfile.behindImages.shooting || undefined,
            editing: paulaProfile.behindImages.editing || undefined,
          }}
        />

        {/* 09. CONTACTO */}
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
