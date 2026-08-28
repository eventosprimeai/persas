"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { KittenPhoto } from "@/types";

interface KittenGalleryProps {
  photos: KittenPhoto[];
  kittenName: string;
}

export function KittenGallery({ photos, kittenName }: KittenGalleryProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, goPrev, goNext]);

  if (!photos || photos.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Large Image */}
      <button
        type="button"
        onClick={() => openLightbox(activePhotoIndex)}
        className="relative aspect-[4/3] w-full bg-noir border border-noir-line overflow-hidden group block focus:outline-none focus-visible:border-gold"
        aria-label={`Ampliar foto de ${kittenName}`}
      >
        <Image
          src={photos[activePhotoIndex]?.src || photos[0].src}
          alt={photos[activePhotoIndex]?.alt || `${kittenName} foto principal`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center bg-noir/0 group-hover:bg-noir/30 transition-colors duration-300">
          <span className="flex items-center gap-2 px-4 py-2 bg-noir-soft/90 border border-gold/50 text-xs uppercase tracking-luxury text-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Maximize2 className="w-3.5 h-3.5" />
            Ver completa
          </span>
        </div>
      </button>

      {/* Thumbnails Row */}
      {photos.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {photos.map((photo, index) => {
            const isActive = activePhotoIndex === index;
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setActivePhotoIndex(index);
                  openLightbox(index);
                }}
                className={`relative aspect-[4/3] overflow-hidden bg-noir border transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "border-gold shadow-gold-glow scale-[1.02]"
                    : "border-noir-line opacity-60 hover:opacity-100 hover:border-gold/50"
                }`}
                aria-label={`Ver foto ${index + 1} de ${kittenName}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="120px"
                  className="object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-noir/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Galería ampliada de ${kittenName}`}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 bg-noir-soft border border-noir-line text-bone hover:border-gold hover:text-gold-light transition-colors z-10 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              aria-label="Cerrar galería"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <span className="absolute top-5 left-4 sm:top-7 sm:left-6 text-xs uppercase tracking-luxury text-gold-light">
              {lightboxIndex + 1} / {photos.length}
            </span>

            {/* Prev arrow */}
            {photos.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-noir-soft/80 border border-noir-line text-bone hover:border-gold hover:text-gold-light transition-colors z-10 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full max-w-5xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[85vh]">
                <Image
                  src={photos[lightboxIndex].src}
                  alt={photos[lightboxIndex].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Next arrow */}
            {photos.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-noir-soft/80 border border-noir-line text-bone hover:border-gold hover:text-gold-light transition-colors z-10 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Caption */}
            <p className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 max-w-[90vw] text-center text-xs text-muted px-4 truncate">
              {photos[lightboxIndex].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
