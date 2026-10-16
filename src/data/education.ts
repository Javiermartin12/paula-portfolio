export type EducationItem = {
  id: string;
  title: string;
  institution: string;
  period?: string;
  description?: string;
  credentialUrl?: string;
};

/* =========================================================
   FORMACIÓN ACADÉMICA
   Añadir únicamente estudios confirmados por Paula
========================================================= */

export const studies: EducationItem[] = [];

/*
Ejemplo de estructura:

{
  id: "estudio-1",
  title: "Nombre de la titulación",
  institution: "Universidad o centro",
  period: "2022 – 2026",
  description: "Especialización o información relevante",
},
*/

/* =========================================================
   CURSOS Y CERTIFICACIONES
========================================================= */

export const certifications: EducationItem[] = [];

/*
Ejemplo de estructura:

{
  id: "certificado-1",
  title: "Nombre del certificado",
  institution: "Entidad emisora",
  period: "2026",
  credentialUrl: "https://...",
},
*/
