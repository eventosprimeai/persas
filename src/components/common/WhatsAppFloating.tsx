"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { catteryConfig } from "@/data/cattery";
import { getWhatsAppUrl } from "@/lib/utils";

const AGENT_NAME = "Camila";
const AGENT_PHOTO =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=facearea&facepad=3&h=200";

export function WhatsAppFloating() {
  const whatsappUrl = getWhatsAppUrl(
    catteryConfig.contact.whatsappNumber,
    catteryConfig.contact.whatsappDefaultMessage
  );

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-24 right-6 z-40 flex items-center group focus-within:ring-2 focus-within:ring-gold"
    >
      {/* Tooltip on hover (desktop only) */}
      <span className="hidden md:flex items-center mr-3 px-3.5 py-2 bg-noir-soft/95 backdrop-blur-md border border-gold/40 text-xs font-medium text-bone shadow-2xl rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none max-w-[220px]">
        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 shrink-0 animate-ping" />
        <span>
          <span className="block text-gold-light font-semibold">{AGENT_NAME} · Atención</span>
          ¿Dudas sobre disponibilidad? Escríbeme
        </span>
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir chat de WhatsApp con ${AGENT_NAME}, atención al cliente del criadero`}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-gold-glow hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-gold-light/60 overflow-hidden bg-noir-soft"
      >
        <Image
          src={AGENT_PHOTO}
          alt={`${AGENT_NAME}, atención al cliente`}
          fill
          sizes="56px"
          className="object-cover"
        />

        {/* WhatsApp badge */}
        <span className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-tr from-[#8C6D1F] via-[#E7D08A] to-[#C9A227] border border-noir">
          <MessageCircle className="w-3 h-3 fill-noir/90 stroke-noir stroke-[2]" />
        </span>

        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-noir"></span>
        </span>
      </a>
    </aside>
  );
}
