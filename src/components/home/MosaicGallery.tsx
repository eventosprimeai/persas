"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=85&w=1200&auto=format&fit=crop",
    alt: "Gato Persa Golden Chinchilla en sesión de estudio",
    caption: "Línea Golden Shaded — Belleza morfológica y ojos esmeralda",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=85&w=1200&auto=format&fit=crop",
    alt: "Gatita Persa Chinchilla Silver descansando",
    caption: "Crianza sin jaulas — Socialización en salón familiar",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=85&w=1200&auto=format&fit=crop",
    alt: "Gatito Persa jugando con pluma",
    caption: "Juegos diarios y estimulación temprana de temperamento",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=85&w=1200&auto=format&fit=crop",
    alt: "Persa Black Smoke con mirada ámbar",
    caption: "Manto Black Smoke con subpelo blanco de alto contraste",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=85&w=1200&auto=format&fit=crop",
    alt: "Detalle de cepillado y acicalamiento",
    caption: "Higiene y mantenimiento profesional del manto sedoso",
    span: "col-span-1 row-span-1",
  },
];

export function MosaicGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0));
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="py-24 md:py-32 bg-noir relative border-t border-noir-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Vida en el Criadero"
          title="Galería de Ejemplares y"
          highlight="Momentos"
          description="Una mirada íntima al día a día de nuestros gatos persas: salud radiante, juegos y el afecto constante que define su carácter."
        />

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[240px] md:auto-rows-[280px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`group relative overflow-hidden bg-noir-soft border border-noir-line hover:border-gold/60 transition-all duration-500 cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-noir/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10 backdrop-blur-xs">
                <div className="self-end p-2 bg-noir-soft border border-gold/40 text-gold">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-luxury text-gold-light font-medium">
                    Persian´s
                  </p>
                  <p className="text-sm text-bone font-medium mt-1">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-noir/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 z-20 p-3 text-bone hover:text-gold-light bg-noir-soft border border-noir-line rounded-none transition-colors"
            aria-label="Cerrar galería"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) =>
                prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0
              );
            }}
            className="absolute left-4 sm:left-8 z-20 p-3 text-bone hover:text-gold-light bg-noir-soft/80 border border-noir-line rounded-none transition-colors"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) =>
                prev !== null ? (prev + 1) % GALLERY_IMAGES.length : 0
              );
            }}
            className="absolute right-4 sm:right-8 z-20 p-3 text-bone hover:text-gold-light bg-noir-soft/80 border border-noir-line rounded-none transition-colors"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[65vh] border border-gold/40 p-1 bg-noir">
              <Image
                src={GALLERY_IMAGES[selectedIndex].src}
                alt={GALLERY_IMAGES[selectedIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm sm:text-base font-cormorant text-bone text-lg">
                {GALLERY_IMAGES[selectedIndex].caption}
              </p>
              <p className="text-xs text-muted mt-1 uppercase tracking-luxury">
                {selectedIndex + 1} de {GALLERY_IMAGES.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
