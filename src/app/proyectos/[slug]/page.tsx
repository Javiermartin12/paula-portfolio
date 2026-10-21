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

function findPublishedProject(slug: string) {
  return projects.find(
    (project) =>
      project.slug === slug && Boolean(project.detailHref && project.gallery),
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findPublishedProject(slug);

  if (!project) {
    return {
      title: "Proyecto no disponible | Paula",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${project.clientName ?? project.title} | Paula RM Marketing`,
    description: project.description,
  };
}

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
