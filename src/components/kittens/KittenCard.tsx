import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";
import { Kitten } from "@/types";
import { formatPrice, calculateAge } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface KittenCardProps {
  kitten: Kitten;
}

export function KittenCard({ kitten }: KittenCardProps) {
  const isAvailable = kitten.status === "Disponible";
  const isReserved = kitten.status === "Reservado";
  const isDelivered = kitten.status === "Entregado";
  const age = calculateAge(kitten.birthDate);

  return (
    <div
      className={`group relative flex flex-col bg-noir-soft border border-noir-line transition-all duration-500 hover:border-gold/60 hover:shadow-2xl ${
        isReserved || isDelivered ? "opacity-85" : ""
      }`}
    >
      {/* Image Container with Luxury Frame and Hover Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-noir">
        <Image
          src={kitten.coverImage}
          alt={`Gato persa ${kitten.name} - ${kitten.variety}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
            isReserved || isDelivered ? "grayscale contrast-125" : ""
          }`}
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <Badge status={kitten.status} />

          <span className="text-[10px] uppercase tracking-luxury text-bone bg-noir/80 backdrop-blur-md px-2.5 py-1 border border-noir-line font-medium">
            {kitten.gender}
          </span>
        </div>

        {/* Diagonal Reserved Ribbon / Seal */}
        {isReserved && (
          <div className="absolute inset-0 flex items-center justify-center bg-noir/60 backdrop-blur-[2px] z-20 pointer-events-none">
            <div className="rotate-[-12deg] bg-noir-soft/95 border-y border-gold/70 px-8 py-2 text-center shadow-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-light font-bold">
                Reservado
              </span>
            </div>
          </div>
        )}

        {isDelivered && (
          <div className="absolute inset-0 flex items-center justify-center bg-noir/70 backdrop-blur-[2px] z-20 pointer-events-none">
            <div className="rotate-[-12deg] bg-noir-soft/95 border-y border-noir-line px-8 py-2 text-center shadow-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-muted font-semibold">
                En su nuevo hogar
              </span>
            </div>
          </div>
        )}

        {/* Quick hover overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir-soft via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          {/* Variety & Litter Name */}
          <div className="flex items-center justify-between text-[11px] uppercase tracking-luxury text-gold-light/90 mb-1.5 font-medium">
            <span>{kitten.variety}</span>
            <span className="text-muted text-[10px]">{kitten.pedigree.association.split("/")[0]}</span>
          </div>

          {/* Kitten Name */}
          <h3 className="font-cormorant text-2xl font-semibold text-bone group-hover:text-gold-light transition-colors line-clamp-1">
            <Link href={`/gatitos/${kitten.slug}`} className="focus:outline-none">
              {kitten.name}
            </Link>
          </h3>

          {/* Short specs list */}
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted py-2 border-y border-noir-line/60">
            <div>
              <span className="text-[10px] text-[#8E8B85] uppercase tracking-wider block">Edad:</span>
              <span className="text-bone font-medium">{age}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#8E8B85] uppercase tracking-wider block">Ojos:</span>
              <span className="text-bone font-medium truncate block" title={kitten.eyeColor}>
                {kitten.eyeColor.split(" ")[0]} {kitten.eyeColor.split(" ")[1] || ""}
              </span>
            </div>
          </div>

          {/* Description Snippet */}
          <p className="mt-3 text-xs text-muted leading-relaxed line-clamp-2">
            {kitten.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="mt-6 pt-4 border-t border-noir-line/60 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#8E8B85] block">
              {isAvailable ? "Inversión:" : "Estado:"}
            </span>
            <span className="font-cormorant text-2xl font-bold text-gold-light">
              {isAvailable ? formatPrice(kitten.price, kitten.currency) : kitten.status}
            </span>
          </div>

          <Link
            href={`/gatitos/${kitten.slug}`}
            className="inline-flex items-center text-xs uppercase tracking-luxury text-bone group-hover:text-gold-light font-semibold transition-colors py-2 pl-2 focus:outline-none"
          >
            <span>Ver Ficha</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1 text-gold" />
          </Link>
        </div>
      </div>
    </div>
  );
}
