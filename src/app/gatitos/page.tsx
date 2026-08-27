import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Award } from "lucide-react";
import { kittensData } from "@/data/kittens";
import { KittenFilter } from "@/components/kittens/KittenFilter";

export const metadata: Metadata = {
  title: "Gatitos Persas Disponibles | Imperium Persians",
  description:
    "Catálogo oficial de gatitos persas con pedigrí WCF/TICA. Ejemplares Chinchilla Golden Shaded, Silver y Bicolor 100% libres de PKD por ADN. Reserva con contrato y garantía.",
};

export default function GatitosPage() {
  return (
    <div className="pt-28 pb-24 md:pb-32 bg-noir min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs uppercase tracking-luxury text-muted mb-8">
          <Link href="/" className="hover:text-gold-light transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3 h-3 text-gold" />
          <span className="text-gold-light font-medium">Gatitos Disponibles</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-xs uppercase tracking-luxury text-gold-light font-medium px-3 py-1 bg-noir-soft border border-noir-line rounded-full mb-4">
            Catálogo Oficial de Camadas
          </span>
          <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-bone tracking-tight leading-[1.1]">
            Nuestros Gatitos{" "}
            <span className="text-gold-gradient italic font-normal">
              Persas de Pedigrí
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Cada ejemplar cuenta con certificado de pedigrí de 5 generaciones, test genético de ADN libre de PKD, pasaporte europeo, microchip y 2 años de garantía de salud contractual.
          </p>
        </div>

        {/* Reactive Filter & Grid */}
        <KittenFilter initialKittens={kittensData} />
      </div>
    </div>
  );
}
