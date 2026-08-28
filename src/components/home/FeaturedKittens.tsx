import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { kittensData } from "@/data/kittens";
import { SectionHeading } from "@/components/common/SectionHeading";
import { KittenCard } from "@/components/kittens/KittenCard";
import { Button } from "@/components/ui/Button";

export function FeaturedKittens() {
  const featuredKittens = kittensData.slice(0, 5);
  const availableCount = kittensData.filter((k) => k.status === "Disponible").length;

  return (
    <section className="py-24 md:py-32 bg-noir relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          tag="Ejemplares Disponibles"
          title="Nuestras Camadas"
          highlight="Exclusivas"
          description="Cada gatito persa nace de progenitores con campeonatos internacionales, libres de PKD y criados bajo estrictos protocolos de bienestar y socialización."
        />

        {/* Honest Scarcity Notice */}
        <div className="mb-10 max-w-xl mx-auto p-3.5 bg-noir-soft border border-noir-line flex items-center justify-between text-xs text-muted">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-bone font-medium">Disponibilidad actual:</span>
          </div>
          <span className="text-gold-light font-semibold">
            {availableCount} de {kittensData.length} gatitos disponibles
          </span>
        </div>

        {/* Kittens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredKittens.map((kitten) => (
            <KittenCard key={kitten.id} kitten={kitten} />
          ))}
        </div>

        {/* View All Catalog CTA */}
        <div className="mt-16 text-center">
          <Button
            href="/gatitos"
            variant="secondary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4 text-gold" />}
          >
            Explorar Todos los Gatitos ({kittensData.length})
          </Button>
        </div>
      </div>
    </section>
  );
}
