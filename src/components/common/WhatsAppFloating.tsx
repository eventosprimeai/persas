"use client";

import { MessageCircle } from "lucide-react";
import { catteryConfig } from "@/data/cattery";
import { getWhatsAppUrl } from "@/lib/utils";

export function WhatsAppFloating() {
  const whatsappUrl = getWhatsAppUrl(
    catteryConfig.contact.whatsappNumber,
    catteryConfig.contact.whatsappDefaultMessage
  );

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group focus-within:ring-2 focus-within:ring-gold"
    >
      {/* Tooltip on hover (desktop only) */}
      <span className="hidden md:flex items-center mr-3 px-3.5 py-1.5 bg-noir-soft/95 backdrop-blur-md border border-gold/40 text-xs font-medium text-bone shadow-2xl rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-ping" />
        ¿Dudas sobre disponibilidad? Habla con nosotros
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp con el criadero"
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#8C6D1F] via-[#E7D08A] to-[#C9A227] text-noir shadow-gold-glow rounded-full hover:scale-105 active:scale-95 transition-all duration-300 border border-gold-light/40"
      >
        <MessageCircle className="w-7 h-7 fill-noir/90 stroke-noir stroke-[1.8]" />

        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-noir"></span>
        </span>
      </a>
    </aside>
  );
}
