import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import CreativeWorld from "@/components/home/CreativeWorld";
import Toolbox from "@/components/home/Toolbox";
import SelectedProjects from "@/components/home/SelectedProjects";
import BehindTheScenes from "@/components/home/BehindTheScenes";
import ContactCTA from "@/components/home/ContactCTA";

import { paulaProfile } from "@/data/profile";
import Education from "@/components/home/Education";

export const metadata: Metadata = {
  title: "Paula | Marketing, creatividad y contenido",
  description:
    "Portfolio creativo de Paula. Marketing, estrategia, contenido digital y proyectos.",
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <About photoSrc={paulaProfile.portrait || undefined} />

        <CreativeWorld
          photoSrc={paulaProfile.creativePhoto || undefined}
          videoSrc={paulaProfile.creativeVideo || undefined}
          videoPoster={paulaProfile.creativeVideoPoster || undefined}
        />

        <Toolbox />
        <Education />
        <SelectedProjects />

        <BehindTheScenes
          images={{
            ideas: paulaProfile.behindImages.ideas || undefined,
            shooting: paulaProfile.behindImages.shooting || undefined,
            editing: paulaProfile.behindImages.editing || undefined,
          }}
        />

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
