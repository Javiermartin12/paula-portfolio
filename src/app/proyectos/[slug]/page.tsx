import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ProjectHero from "@/components/projects/ProjectHero";
import ProjectStory from "@/components/projects/ProjectStory";
import ProjectGallery from "@/components/projects/ProjectGallery";

import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   PROYECTOS PUBLICADOS
========================================================= */

function findPublishedProject(slug: string) {
  return projects.find(
    (project) =>
      project.slug === slug &&
      Boolean(project.detailHref) &&
      Boolean(project.gallery),
  );
}

/* =========================================================
   GENERACIÓN ESTÁTICA
========================================================= */

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter(
      (project) => Boolean(project.detailHref) && Boolean(project.gallery),
    )
    .map((project) => ({
      slug: project.slug,
    }));
}

/* =========================================================
   METADATOS SEO POR PROYECTO
========================================================= */

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = findPublishedProject(slug);

  if (!project) {
    return {
      title: "Proyecto no disponible",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const projectTitle = project.clientName ?? project.title;

  const title = `${projectTitle} — Proyectos`;

  const description = project.description;

  const canonical = project.detailHref ?? `/proyectos/${slug}`;

  return {
    title,

    description,

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: "Paula RM Marketing",
      url: canonical,
      title: `${title} | Paula RM Marketing`,
      description,
      images: [
        {
          url: project.media.image ?? "/opengraph-image.png",
          alt: `Proyecto ${projectTitle}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | Paula RM Marketing`,
      description,
      images: [project.media.image ?? "/opengraph-image.png"],
    },
  };
}

/* =========================================================
   PÁGINA INDIVIDUAL
========================================================= */

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = findPublishedProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        <ProjectHero project={project} />

        <ProjectStory project={project} />

        <ProjectGallery project={project} />
      </main>

      <Footer />
    </>
  );
}
