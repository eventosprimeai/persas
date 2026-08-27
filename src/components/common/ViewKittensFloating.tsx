"use client";

import Link from "next/link";
import { Cat } from "lucide-react";

export function ViewKittensFloating() {
  return (
    <aside
      aria-label="Ver gatitos disponibles"
      className="fixed bottom-6 right-6 z-40 flex items-center group focus-within:ring-2 focus-within:ring-gold"
    >
      {/* Tooltip on hover (desktop only) */}
      <span className="hidden md:flex items-center mr-3 px-3.5 py-1.5 bg-noir-soft/95 backdrop-blur-md border border-gold/40 text-xs font-medium text-bone shadow-2xl rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Ver gatitos disponibles
      </span>

      {/* Floating Action Button */}
      <Link
        href="/gatitos"
        aria-label="Ver gatitos disponibles"
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#8C6D1F] via-[#E7D08A] to-[#C9A227] text-noir shadow-gold-glow rounded-full hover:scale-105 active:scale-95 transition-all duration-300 border border-gold-light/40"
      >
        <Cat className="w-7 h-7 stroke-noir stroke-[1.8]" />
      </Link>
    </aside>
  );
}
