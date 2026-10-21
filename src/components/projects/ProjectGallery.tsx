"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, ChevronLeft, ChevronRight, Play, X } from "lucide-react";

import type { PortfolioProject, GalleryImage } from "@/data/projects";

type ProjectGalleryProps = {
  project: PortfolioProject;
};

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const gallery = project.gallery;

  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const [startedVideos, setStartedVideos] = useState<Record<string, boolean>>(
    {},
  );

  const carouselRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  function moveCarousel(direction: number) {
    carouselRef.current?.scrollBy({
      left: direction * 340,
      behavior: "smooth",
    });
  }

  function startVideo(src: string) {
    setStartedVideos((previous) => ({
      ...previous,
      [src]: true,
    }));
  }

  if (!gallery) return null;

  return (
    <section
      id="galeria"
      className="relative bg-[#FFF8F5] px-5 py-20 text-[#30202A] sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* ============================================
            ENCABEZADO
        ============================================ */}

        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45178]">
            Creative selection
          </p>

          <h2 className="mt-6 text-[clamp(2.8rem,5vw,5rem)] font-black leading-[1.05] tracking-[-0.065em]">
            El trabajo,
            <br />
            <span className="font-serif font-normal italic text-[#E94E8F]">
              en imágenes.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#806575]">
            Explora algunas de las piezas creativas desarrolladas para{" "}
            {project.clientName ?? project.title}.
          </p>
        </div>

        {/* ============================================
            PRODUCCIÓN AUDIOVISUAL
        ============================================ */}

        {gallery.videos.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <div className="mb-9 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B45178]">
                Producción audiovisual
              </p>

              <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Historias en movimiento.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#806575] sm:text-base">
                Una selección de vídeos creados para comunicar la identidad, los
                productos y la historia de la marca.
              </p>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
              {gallery.videos.map((video, index) => (
                <article
                  key={video.src}
                  className="overflow-hidden rounded-[28px] border border-[#EEDAE2] bg-white p-5 shadow-[0_18px_50px_-38px_rgba(110,44,75,0.25)] sm:p-7"
                >
                  {/* Reproductor */}
                  <div className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-[22px] bg-[#30202E]">
                    {startedVideos[video.src] ? (
                      <video
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                        poster={video.poster}
                        className="h-full w-full object-contain"
                      >
                        <source src={video.src} type="video/mp4" />
                        Tu navegador no admite este vídeo.
                      </video>
                    ) : (
                      <button
                        type="button"
                        onClick={() => startVideo(video.src)}
                        aria-label={`Reproducir ${video.title}`}
                        className="group relative flex h-full w-full items-center justify-center overflow-hidden text-white"
                      >
                        {video.poster ? (
                          <Image
                            src={video.poster}
                            alt=""
                            fill
                            sizes="(max-width: 640px) 90vw, 340px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,#75415A,#30202E_75%)]" />
                        )}

                        <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />

                        <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/50 bg-white/20 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                          <Play
                            size={34}
                            fill="currentColor"
                            strokeWidth={1.5}
                          />
                        </span>

                        <span className="absolute bottom-5 left-5 z-10 rounded-full bg-[#30202E]/80 px-4 py-2 text-xs font-bold backdrop-blur-md">
                          Reproducir vídeo
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Información del vídeo */}
                  <div className="mt-7">
                    <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#B45178]">
                      Vídeo {String(index + 1).padStart(2, "0")}
                    </p>

                    <h4 className="mt-3 text-2xl font-black tracking-[-0.045em] text-[#30202A]">
                      {video.title}
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-[#806575]">
                      {video.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ============================================
            CARRUSEL DE PUBLICACIONES
        ============================================ */}

        {gallery.carousel.length > 0 && (
          <div className="mt-20 sm:mt-24">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B45178]">
                  Serie creativa
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Carrusel de publicaciones
                </h3>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => moveCarousel(-1)}
                  aria-label="Ver publicaciones anteriores"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8C7D5] bg-white text-[#8D4264] transition hover:bg-[#FCE6EF]"
                >
                  <ChevronLeft size={21} />
                </button>

                <button
                  type="button"
                  onClick={() => moveCarousel(1)}
                  aria-label="Ver publicaciones siguientes"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8C7D5] bg-white text-[#8D4264] transition hover:bg-[#FCE6EF]"
                >
                  <ChevronRight size={21} />
                </button>
              </div>
            </div>

            <div
              ref={carouselRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5"
            >
              {gallery.carousel.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  aria-label={`Ampliar imagen ${index + 1}`}
                  className="group w-[min(76vw,320px)] shrink-0 snap-start overflow-hidden rounded-[22px] border border-[#EEDAE2] bg-white text-left transition hover:border-[#E94E8F] hover:shadow-lg"
                >
                  <div className="relative aspect-[4/5] bg-[#FBE5EA]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 76vw, 320px"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 p-4">
                    <span className="text-sm font-semibold text-[#653F53]">
                      {image.title}
                    </span>

                    <span className="text-xs text-[#B45178]">
                      {index + 1} / {gallery.carousel.length}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ============================================
            PUBLICACIONES DESTACADAS
        ============================================ */}

        {gallery.highlights.length > 0 && (
          <div className="mt-20 sm:mt-24">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B45178]">
              Contenido seleccionado
            </p>

            <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Publicaciones destacadas
            </h3>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {gallery.highlights.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  aria-label={`Ampliar ${image.title}`}
                  className="group overflow-hidden rounded-[26px] border border-[#EEDAE2] bg-white p-4 text-left transition hover:border-[#E94E8F] hover:shadow-lg sm:p-5"
                >
                  <div className="relative aspect-square overflow-hidden rounded-[18px] bg-[#FFF0F5]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-[#30202A]">
                    {image.title}
                  </h4>

                  <p className="mt-2 text-sm text-[#A16D84]">
                    Pulsa para ampliar la publicación
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ============================================
            NAVEGACIÓN
        ============================================ */}

        <div className="mt-20 border-t border-[#EBCDD7] pt-8">
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-3 text-sm font-semibold text-[#B45178] transition hover:text-[#30202A]"
          >
            <ArrowLeft size={18} />
            Volver al portfolio
          </Link>
        </div>
      </div>

      {/* ============================================
          VISOR DE IMÁGENES
      ============================================ */}

      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#1B1119]/95 p-4 sm:p-10"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Cerrar imagen ampliada"
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#30202A]"
          >
            <X size={22} />
          </button>

          <div className="relative h-[85vh] w-full max-w-5xl">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
