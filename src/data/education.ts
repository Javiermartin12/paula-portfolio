export type EducationItem = {
  id: string;
  title: string;
  institution: string;
  period?: string;
  description?: string;
  credentialUrl?: string;
  image?: string;
  imageAlt?: string;
};

/* =========================================================
   FORMACIÓN ACADÉMICA
========================================================= */

export const studies: EducationItem[] = [
  {
    id: "grado-marketing",
    title: "Grado en Marketing e Investigación de Mercados",
    institution: "Universidad de Granada",
    description:
      "Formación universitaria en marketing e investigación de mercados.",
  },

  {
    id: "master-marketing-digital",
    title: "Máster Profesional en Marketing Digital",
    institution: "Formación vinculada a SIDN e IDENTO",
    description:
      "Especialización práctica en marketing digital, estrategia, contenidos, posicionamiento y entornos de comunicación online.",
    credentialUrl: "/images/paula/foto_master_paula.webp",
  },
];

/* =========================================================
   CERTIFICACIONES COMPLEMENTARIAS
========================================================= */

export const certifications: EducationItem[] = [
  {
    id: "hubspot-seo",
    title: "SEO y optimización",
    institution: "HubSpot Academy",
    credentialUrl: "/certificados/hubspot-seo.webp",
  },

  {
    id: "hubspot-redes-sociales",
    title: "Marketing en Redes Sociales",
    institution: "HubSpot Academy",
    credentialUrl: "/certificados/hubspot-redes-sociales.webp",
  },

  {
    id: "santander-storytelling",
    title: "Storytelling en Marketing Digital",
    institution: "Santander Open Academy",
    credentialUrl: "/certificados/santander-storytelling.pdf",
  },

  {
    id: "santander-business-english",
    title: "Business English, Part 1",
    institution: "Santander Open Academy",
    credentialUrl: "/certificados/santander-business-english.pdf",
  },
];
