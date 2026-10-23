import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";

const SITE_URL = "https://paularmmarketing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects
    .filter(
      (project) => Boolean(project.detailHref) && Boolean(project.gallery),
    )
    .map((project) => ({
      url: `${SITE_URL}${project.detailHref}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },

    ...projectPages,
  ];
}
