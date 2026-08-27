import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  Award,
  Sparkles,
  Calendar,
  CheckCircle2,
  HeartHandshake,
  Dna,
  Package,
} from "lucide-react";
import { kittensData } from "@/data/kittens";
import { catteryConfig } from "@/data/cattery";
import { formatPrice, formatBirthDate, calculateAge } from "@/lib/utils";
import { getKittenProductJsonLd } from "@/lib/jsonld";
import { KittenGallery } from "@/components/kittens/KittenGallery";
import { KittenParents } from "@/components/kittens/KittenParents";
import { ReservationForm } from "@/components/kittens/ReservationForm";
import { Badge } from "@/components/ui/Badge";

interface KittenDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return kittensData.map((kitten) => ({
    slug: kitten.slug,
  }));
}

export async function generateMetadata({
  params,
}: KittenDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const kitten = kittensData.find((k) => k.slug === slug);

  if (!kitten) {
    return {
      title: "Gatito No Encontrado | PERSIAN´S",
    };
  }

  return {
    title: `${kitten.name} | ${kitten.variety} - PERSIAN´S`,
    description: kitten.description,
    openGraph: {
      title: `${kitten.name} - Gato Persa de Pedigrí`,
      description: kitten.description,
      images: [
        {
          url: kitten.coverImage,
          width: 1200,
          height: 630,
          alt: kitten.name,
        },
      ],
    },
  };
}

export default async function KittenDetailPage({
  params,
}: KittenDetailPageProps) {
  const { slug } = await params;
  const kitten = kittensData.find((k) => k.slug === slug);

  if (!kitten) {
    notFound();
  }

  const isAvailable = kitten.status === "Disponible";
  const jsonLd = getKittenProductJsonLd(kitten);
  const age = calculateAge(kitten.birthDate);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-28 pb-24 md:pb-32 bg-noir min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs uppercase tracking-luxury text-muted mb-8">
            <Link href="/" className="hover:text-gold-light transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3 h-3 text-gold" />
            <Link href="/gatitos" className="hover:text-gold-light transition-colors">
              Gatitos Disponibles
            </Link>
            <ChevronRight className="w-3 h-3 text-gold" />
            <span className="text-gold-light font-medium truncate">{kitten.name}</span>
          </nav>

          {/* Main 2-Column Product Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Gallery, Story, Health & Parents (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Photo Gallery with Thumbnail switcher */}
              <KittenGallery photos={kitten.photos} kittenName={kitten.name} />

              {/* Description Section */}
              <div className="bg-noir-soft border border-noir-line p-6 sm:p-8 space-y-4">
                <div className="inline-block text-xs uppercase tracking-luxury text-gold-light font-semibold">
                  Carácter y Morfología
                </div>
                <h2 className="font-cormorant text-3xl font-bold text-bone">
                  Conoce a {kitten.name}
                </h2>
                <p className="text-sm text-muted leading-relaxed font-normal">
                  {kitten.longDescription}
                </p>

                {/* Temperament Tags */}
                <div className="pt-4 border-t border-noir-line/60 flex flex-wrap gap-2">
                  {kitten.temperament.map((trait, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] uppercase tracking-luxury px-3 py-1.5 bg-noir border border-noir-line text-bone"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* What is Included Box */}
              <div className="bg-noir-soft border border-noir-line p-6 sm:p-8 space-y-6">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-luxury text-gold-light font-semibold">
                  <Package className="w-4 h-4 text-gold" />
                  <span>Ajuar y Documentación Incluida</span>
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-bone">
                  Qué incluye la entrega de {kitten.name}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-bone/90">
                  {kitten.includedItems.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 p-2.5 bg-noir border border-noir-line">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Parents Lineage Showcase */}
              <KittenParents sire={kitten.parents.sire} dam={kitten.parents.dam} />
            </div>

            {/* Right Column: Spec Card & Contextual Form (5 cols) */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              {/* Header Price & Status Box */}
              <div className="bg-noir-soft border border-gold/50 p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <Badge status={kitten.status} />
                  <span className="text-xs uppercase tracking-luxury text-gold-light bg-noir px-2.5 py-1 border border-noir-line">
                    {kitten.litterName}
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-luxury text-gold-light/90 block mb-1">
                    {kitten.variety}
                  </span>
                  <h1 className="font-cormorant text-3xl sm:text-4xl font-bold text-bone">
                    {kitten.name}
                  </h1>
                </div>

                <div className="py-4 border-y border-noir-line/60 flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-luxury text-muted">
                    {isAvailable ? "Inversión:" : "Estado actual:"}
                  </span>
                  <span className="font-cormorant text-3xl sm:text-4xl font-bold text-gold-light">
                    {isAvailable ? formatPrice(kitten.price, kitten.currency) : kitten.status}
                  </span>
                </div>

                {/* Technical Specs List */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-noir-line/40">
                    <span className="text-muted">Sexo:</span>
                    <span className="text-bone font-medium">{kitten.gender}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-noir-line/40">
                    <span className="text-muted">Color de Manto:</span>
                    <span className="text-bone font-medium">{kitten.color}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-noir-line/40">
                    <span className="text-muted">Color de Ojos:</span>
                    <span className="text-bone font-medium">{kitten.eyeColor}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-noir-line/40">
                    <span className="text-muted">Fecha de Nacimiento:</span>
                    <span className="text-bone font-medium">
                      {formatBirthDate(kitten.birthDate)} ({age})
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-noir-line/40">
                    <span className="text-muted">Fecha Estimada de Entrega:</span>
                    <span className="text-gold-light font-medium">
                      {formatBirthDate(kitten.deliveryDate)} (14 sem.)
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-noir-line/40">
                    <span className="text-muted">Registro de Pedigrí:</span>
                    <span className="text-bone font-medium">{kitten.pedigree.registrationNumber}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-muted">Test Genético PKD:</span>
                    <span className="text-emerald-400 font-semibold flex items-center">
                      <Dna className="w-3.5 h-3.5 mr-1" /> Negativo por ADN
                    </span>
                  </div>
                </div>
              </div>

              {/* Contextual Reservation Form Component */}
              <ReservationForm
                kittenName={kitten.name}
                kittenId={kitten.id}
                variety={kitten.variety}
                isAvailable={isAvailable}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
