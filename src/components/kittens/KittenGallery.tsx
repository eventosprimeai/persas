"use client";

import { useState } from "react";
import Image from "next/image";
import { KittenPhoto } from "@/types";

interface KittenGalleryProps {
  photos: KittenPhoto[];
  kittenName: string;
}

export function KittenGallery({ photos, kittenName }: KittenGalleryProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  if (!photos || photos.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Large Image */}
      <div className="relative aspect-[4/3] w-full bg-noir border border-noir-line overflow-hidden group">
        <Image
          src={photos[activePhotoIndex]?.src || photos[0].src}
          alt={photos[activePhotoIndex]?.alt || `${kittenName} foto principal`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Thumbnails Row */}
      {photos.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {photos.map((photo, index) => {
            const isActive = activePhotoIndex === index;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setActivePhotoIndex(index)}
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
    </div>
  );
}
