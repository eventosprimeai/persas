import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Award, Sparkles, MessageCircle, HeartHandshake, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BreedExplorer } from "@/components/breed/BreedExplorer";
import { BreedAuthenticitySection } from "@/components/breed/BreedAuthenticitySection";
import { BreedMorphologyCare } from "@/components/breed/BreedMorphologyCare";
import { catteryConfig } from "@/data/cattery";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Guía Oficial de la Raza Persa: Variedades, Colores y Morfología | PERSIAN´S",
  description:
    "Descubre las variedades oficiales de gatos persas: Chinchilla Silver, Golden Shaded, Himalayos y Sólidos. Aprende a distinguir un ejemplar auténtico con pedigrí libre de PKD frente a ofertas dudosas en Ecuador.",
  keywords: [
    "variedades gatos persas",
    "colores de gatos persas",
    "gato persa chinchilla silver",
    "gato persa golden shaded",
    "gato persa himalayo seal point",
    "persa doll face vs peke face",
    "comprar gato persa autentico ecuador",
    "precio gato persa pedigri",
    "cuidados del gato persa",
  ],
  alternates: {
    canonical: "https://imperiumpersians.com/raza-persa",
  },
  openGraph: {
    title: "Guía Oficial de la Raza Persa: Variedades, Colores y Morfología | PERSIAN´S",
    description:
      "Aprende todo sobre los colores oficiales, la morfología ética Doll-Face y cómo identificar un gato persa 100% puro con certificación genética en Ecuador.",
    url: "https://imperiumpersians.com/raza-persa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Gato Persa Chinchilla Golden Shaded de pura raza",
      },
    ],
  },
};

export default function RazaPersaPage() {
  const generalWhatsAppUrl = getWhatsAppUrl(
    catteryConfig.contact.whatsappNumber,
    "Hola PERSIAN´S, estuve revisando la Guía Oficial de la Raza Persa y me gustaría recibir asesoría sobre las variedades y gatitos disponibles."
  );

  return (
    <div className="pt-28 pb-24 md:pb-32 bg-noir min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs uppercase tracking-luxury text-muted">
          <Link href="/" className="hover:text-gold-light transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3 h-3 text-gold" />
          <span className="text-gold-light font-medium">Guía de la Raza</span>
        </nav>

        {/* Hero Section */}
        <div className="relative border-b border-noir-line pb-16">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-gold px-3 py-1 bg-gold/10 border border-gold/30 rounded-full">
                <Award className="w-3.5 h-3.5" />
                Estándares Oficiales WCF / TICA
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-emerald-400 px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Líneas 100% Libres de PKD por ADN
              </span>
            </div>

            <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-bone tracking-tight leading-[1.08]">
              Guía Oficial de la Raza:{" "}
              <span className="text-gold-gradient italic font-normal">
                Morfología, Tipos y Colores del Persa
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-bone/80 leading-relaxed max-w-3xl">
              El gato persa es la máxima expresión de elegancia y serenidad felina. Esta guía especializada fue creada para ayudarte a conocer los colores oficiales, entender la morfología ética y saber exactamente qué esperar al incorporar un ejemplar de pura raza a tu hogar.
            </p>

            {/* Quick action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                href="/gatitos"
                variant="primary"
                size="md"
                rightIcon={<Sparkles className="w-4 h-4 text-noir" />}
              >
                Ver Camadas Disponibles
              </Button>
              <Button
                href={generalWhatsAppUrl}
                isExternal
                variant="gold-outline"
                size="md"
                leftIcon={<MessageCircle className="w-4 h-4 text-gold" />}
              >
                Asesoría Personalizada
              </Button>
            </div>
          </div>
        </div>

        {/* Section 1: Interactive Varieties and Colors Explorer */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block text-xs uppercase tracking-luxury text-gold-light font-medium px-3 py-1 bg-noir-soft border border-noir-line rounded-full">
              Catálogo de Colores Oficiales
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-bone">
              Variedades y Patrones de Manto
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Explora las líneas genéticas más exclusivas del Persa. Desde los hipnóticos ojos esmeralda del Chinchilla hasta el contraste zafiro del Himalayo.
            </p>
          </div>

          <BreedExplorer />
        </section>

        {/* Section 2: Morphology and Care */}
        <BreedMorphologyCare />

        {/* Section 3: Authenticity, Scams & Price Comparison */}
        <BreedAuthenticitySection />

        {/* Final CTA Banner */}
        <div className="bg-gradient-to-r from-noir-card via-noir-soft to-noir-card border border-gold/40 p-8 sm:p-14 rounded-lg text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
          <h3 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-bone relative z-10 max-w-2xl mx-auto leading-tight">
            ¿Listo para Encontrar a tu{" "}
            <span className="text-gold-gradient italic font-normal">
              Compañero Persa Ideal?
            </span>
          </h3>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto relative z-10">
            Conversa directamente con nosotros. Te enviamos fotos y videos en tiempo real, resolvemos todas tus dudas y coordinamos la entrega segura hasta la puerta de tu hogar en cualquier ciudad de Ecuador.
          </p>
          <div className="pt-2 flex flex-wrap justify-center items-center gap-4 relative z-10">
            <Button
              href="/gatitos"
              variant="primary"
              size="lg"
              rightIcon={<Sparkles className="w-4 h-4 text-noir" />}
            >
              Explorar Gatitos Disponibles
            </Button>
            <Button
              href={generalWhatsAppUrl}
              isExternal
              variant="gold-outline"
              size="lg"
              leftIcon={<MessageCircle className="w-4 h-4 text-gold" />}
            >
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
