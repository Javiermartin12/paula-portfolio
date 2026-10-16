/* =========================================================
   TIPOS DEL PORTFOLIO
========================================================= */

export type ProjectTheme = "peach" | "pink" | "lavender";

export type PortfolioProject = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  theme: ProjectTheme;

  // Archivos multimedia opcionales
  media: {
    image?: string;
    secondaryImage?: string;
    video?: string;
    videoPoster?: string;
  };

  // Activar únicamente cuando exista la ficha individual
  detailHref?: string;
};

/* =========================================================
   PROYECTOS DESTACADOS

   CONTENIDO PROVISIONAL:
   Sustituir por los trabajos y descripciones
   confirmados por Paula antes de publicar.
========================================================= */

export const projects: PortfolioProject[] = [
  {
    slug: "guzzi",
    number: "01",
    title: "Guzzi",
    category: "Social media · Contenido",
    description:
      "Un espacio para presentar las ideas, las piezas de contenido y el trabajo de comunicación realizado para este proyecto.",
    tags: ["Social Media", "Contenido creativo", "Comunicación"],
    theme: "peach",

    media: {
      // image: "/images/projects/guzzi/cover.webp",
      // secondaryImage: "/images/projects/guzzi/detail.webp",
      // video: "/videos/guzzi.mp4",
      // videoPoster: "/images/projects/guzzi/poster.webp",
    },
  },

  {
    slug: "enma",
    number: "02",
    title: "ENMA",
    category: "Creatividad · Branding",
    description:
      "Aquí mostraremos el concepto visual del proyecto, los contenidos desarrollados y el proceso creativo detrás de las piezas seleccionadas.",
    tags: ["Creatividad", "Identidad visual", "Contenido"],
    theme: "pink",

    media: {
      // image: "/images/projects/enma/cover.webp",
      // secondaryImage: "/images/projects/enma/detail.webp",
    },
  },

  {
    slug: "wit",
    number: "03",
    title: "WIT Creativo",
    category: "Estrategia · Campañas",
    description:
      "Un caso para presentar los objetivos de comunicación, las acciones de marketing y los resultados que Paula pueda documentar.",
    tags: ["Estrategia", "Campañas", "Marketing digital"],
    theme: "lavender",

    media: {
      // image: "/images/projects/wit/cover.webp",
      // secondaryImage: "/images/projects/wit/detail.webp",
    },
  },
];
