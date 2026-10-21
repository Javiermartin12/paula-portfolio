/* =========================================================
   TIPOS DEL PORTFOLIO
========================================================= */

export type ProjectTheme = "peach" | "pink" | "lavender";

export type GalleryImage = {
  src: string;
  title: string;
  alt: string;
};

export type GalleryVideo = {
  src: string;
  title: string;
  description: string;
  poster?: string;
};

export type ProjectGalleryData = {
  videos: GalleryVideo[];
  carousel: GalleryImage[];
  highlights: GalleryImage[];
};

export type PortfolioProject = {
  slug: string;
  number: string;
  title: string;
  clientName?: string;
  category: string;
  description: string;
  tags: string[];
  theme: ProjectTheme;

  media: {
    image?: string;
    secondaryImage?: string;
    video?: string;
    videoPoster?: string;
  };

  detailHref?: string;
  gallery?: ProjectGalleryData;
};

/* =========================================================
   01. PIZZERÍA GUZZI ALMERIMAR
========================================================= */

export const projects: PortfolioProject[] = [
  {
    slug: "guzzi",
    number: "01",
    title: "Guzzi",
    clientName: "Pizzería Guzzi Almerimar",
    category: "Social Media · Contenido",
    description:
      "Contenido, creatividad y comunicación para una pizzería con personalidad propia. Un proyecto en el que desarrollo ideas para redes sociales y creo contenido visual que conecta la identidad del negocio con sus productos, su historia y las tendencias del momento.",
    tags: ["Contenido creativo", "Vídeo", "Social Media"],
    theme: "peach",

    media: {
      image: "/images/guzzi/Agosto%20PIZZA%20DEL%20MES.webp",
      secondaryImage: "/images/guzzi/Fruto%20novela.webp",
    },

    detailHref: "/proyectos/guzzi",

    gallery: {
      videos: [
        {
          src: "/videos/guzzi/guzzi-25-aniversario.mp4",
          title: "25 aniversario de Guzzi",
          description:
            "Pieza audiovisual conmemorativa del 25 aniversario de Pizzería Guzzi Almerimar.",
          poster: "/images/guzzi/guzzi-25-aniversario-poster.webp",
        },
        {
          src: "/videos/guzzi/guzzi-prosciutto.mp4",
          title: "Pizza prosciutto",
          description:
            "Vídeo de producto que muestra el proceso de elaboración de la pizza prosciutto y su resultado final.",
          poster: "/images/guzzi/guzzi-prosciutto-poster.webp",
        },
      ],

      carousel: [
        {
          src: "/images/guzzi/carrusel/Cosas%20horribles%20que%20nos%20pasaron%20hoy%20-%201.webp",
          title: "Publicación 1",
          alt: "Primera imagen del carrusel creativo de Guzzi",
        },
        {
          src: "/images/guzzi/carrusel/Cosas%20horribles%20que%20nos%20pasaron%20hoy%20-%202.webp",
          title: "Publicación 2",
          alt: "Segunda imagen del carrusel creativo de Guzzi",
        },
        {
          src: "/images/guzzi/carrusel/Cosas%20horribles%20que%20nos%20pasaron%20hoy%20-%203.webp",
          title: "Publicación 3",
          alt: "Tercera imagen del carrusel creativo de Guzzi",
        },
        {
          src: "/images/guzzi/carrusel/Cosas%20horribles%20que%20nos%20pasaron%20hoy%20-%204.webp",
          title: "Publicación 4",
          alt: "Cuarta imagen del carrusel creativo de Guzzi",
        },
        {
          src: "/images/guzzi/carrusel/Cosas%20horribles%20que%20nos%20pasaron%20hoy%20-%205.webp",
          title: "Publicación 5",
          alt: "Quinta imagen del carrusel creativo de Guzzi",
        },
      ],

      highlights: [
        {
          src: "/images/guzzi/Fruto%20novela.webp",
          title: "Frutinovela",
          alt: "Publicación creativa de Frutinovela para Guzzi",
        },
        {
          src: "/images/guzzi/Agosto%20PIZZA%20DEL%20MES.webp",
          title: "Pizza del mes",
          alt: "Publicación de la pizza del mes de agosto",
        },
      ],
    },
  },

  /* =========================================================
     02. ENMA PASTELERÍA
  ========================================================= */

  {
    slug: "enma",
    number: "02",
    title: "Enma",
    clientName: "Enma Pastelería",
    category: "Creación de contenido · Diseño",
    description:
      "Creatividad y contenido para dar visibilidad a una pastelería artesanal. Un proyecto centrado en crear contenido visual atractivo, comunicar los productos de la marca y adaptar las publicaciones a su personalidad. También permite explorar el rendimiento de las piezas y detectar cuáles generan más visibilidad.",
    tags: ["Creación de contenido", "Diseño", "Redes sociales"],
    theme: "pink",

    media: {
      image: "/images/enma/enma-palmeras.webp",
    },

    detailHref: "/proyectos/enma",

    gallery: {
      /* ================================================
         REELS Y CONTENIDO AUDIOVISUAL
      ================================================ */

      videos: [
        {
          src: "/videos/enma/enma-love-language.mp4",
          title: "Love Language",
          description:
            "Reel de contenido creativo para redes sociales de Enma Pastelería.",
          poster: "/images/enma/enma-love-language-poster.webp",
        },

        {
          src: "/videos/enma/enma-pan-de-aceite.mp4",
          title: "IA · Pan de aceite",
          description:
            "Pieza audiovisual creativa relacionada con el pan de aceite y la comunicación digital de la marca.",
          poster: "/images/enma/enma-pan-de-aceite-poster.webp",
        },

        {
          src: "/videos/enma/enma-eventos.mp4",
          title: "Eventos importantes",
          description:
            "Reel de contenido para comunicar productos y ocasiones especiales de Enma Pastelería.",
          poster: "/images/enma/enma-eventos-poster.webp",
        },
      ],

      /* ================================================
         CARRUSELES
         Pendientes de recibir más imágenes
      ================================================ */

      carousel: [],

      /* ================================================
         PUBLICACIONES DESTACADAS
      ================================================ */

      highlights: [
        {
          src: "/images/enma/enma-palmeras.webp",
          title: "Palmeras artesanales",
          alt: "Publicación de palmeras de Enma Pastelería",
        },
      ],
    },
  },
];
