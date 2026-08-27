"use client";

import { ShieldCheck, AlertTriangle, Check, X, Sparkles, Heart, FileCheck, Stethoscope, Camera, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function BreedAuthenticitySection() {
  const comparisonData = [
    {
      feature: "Genética y Salud (Test de ADN PKD)",
      certified: "100% Libre de Enfermedad Renal Poliquística (PKD) con test de ADN certificado de ambos padres. Cero riesgo de fallo renal hereditario.",
      informal: "Sin pruebas genéticas. Hasta un 38% de gatos persas sin control sufren fallo renal irreversible a los 3-6 años.",
      isCertifiedBetter: true,
    },
    {
      feature: "Morfología y Línea Facial (Doll-Face Ético)",
      certified: "Estructura Cobby genuina: cabeza redondeada, orejas pequeñas y separadas, ojos grandes y abiertos, stop nasal equilibrado que permite respirar y lagrimear de forma 100% natural.",
      informal: "Gatos estirados anunciados como 'semi persas' con hocico afilado y orejas puntiagudas, o chatos extremos con graves problemas respiratorios crónicos.",
      isCertifiedBetter: true,
    },
    {
      feature: "Transparencia de Fotos y Videos",
      certified: "Fotografías y vídeos reales del ejemplar exacto con su nombre, fecha y cartel personalizado. Posibilidad de videollamada en directo antes de reservar.",
      informal: "Fotos descargadas de Pinterest o criaderos extranjeros. Al momento de la entrega reciben un gato totalmente distinto al de la publicación.",
      isCertifiedBetter: true,
    },
    {
      feature: "Documentación y Pedigrí Oficial",
      certified: "Certificado de Pedigrí oficial de 5 generaciones WCF / TICA, microchip veterinario dado de alta, cartilla sanitaria completa y contrato legal con 2 años de garantía.",
      informal: "Sin pedigrí ni documentos legales. Ninguna garantía si el cachorro enferma a los pocos días de la entrega.",
      isCertifiedBetter: true,
    },
    {
      feature: "Socialización y Ambiente de Crianza",
      certified: "Criados en el salón de nuestro hogar familiar, acostumbrados al contacto humano, mimos diarios, cepillado y ruidos cotidianos. Nunca en jaulas.",
      informal: "Criaderos masivos o fábricas de cachorros con animales asustadizos, sin vacunas completas y destetados precozmente a las 4-6 semanas.",
      isCertifiedBetter: true,
    },
    {
      feature: "Traslado y Entrega en Ecuador",
      certified: "Servicio Pet-Nanny personalizado en cabina hasta Quito, Guayaquil, Cuenca y todo el país, garantizando cero estrés y entrega en tus manos.",
      informal: "Envíos en bodegas de carga o citas apresuradas en lugares públicos sin identificación clara del vendedor.",
      isCertifiedBetter: true,
    },
  ];

  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-gold px-3 py-1 bg-gold/10 border border-gold/30 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          Guía Anti-Estafas y Transparencia
        </span>
        <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-bone">
          ¿Cómo Distinguir un{" "}
          <span className="text-gold-gradient italic font-normal">
            Persa Auténtico de Raza
          </span>{" "}
          frente a Anuncios Informales?
        </h2>
        <p className="text-sm sm:text-base text-muted leading-relaxed">
          En internet existen anuncios desde $80 por ejemplares &quot;semi persas&quot; y ofertas dudosas en redes sociales. Conoce las diferencias científicas, sanitarias y legales para proteger a tu familia y tu inversión.
        </p>
      </div>

      {/* Comparison Table / Cards */}
      <div className="bg-noir-card border border-noir-line rounded-lg overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-noir-line">
          {/* Columna Criadero Certificado */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-gold/5 via-transparent to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-full bg-gold/10 border border-gold/30 text-gold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-gold-light">
                  Criadero Especializado PERSIAN´S
                </h3>
                <p className="text-xs uppercase tracking-wider text-muted">
                  Garantía, Pedigrí y Salud Genética
                </p>
              </div>
            </div>

            <ul className="space-y-6">
              {comparisonData.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <div className="mt-1 p-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-semibold uppercase tracking-wider text-bone mb-1">
                      {item.feature}
                    </strong>
                    <p className="text-xs sm:text-sm text-bone/85 leading-relaxed">
                      {item.certified}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Anuncios Informales */}
          <div className="p-6 sm:p-8 bg-noir-soft/40">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-full bg-rose-950/40 border border-rose-500/30 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-rose-200">
                  Anuncios Informales / &quot;Semi Persas&quot;
                </h3>
                <p className="text-xs uppercase tracking-wider text-muted">
                  Mercado Libre, Grupos de Facebook y Reventa
                </p>
              </div>
            </div>

            <ul className="space-y-6">
              {comparisonData.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <div className="mt-1 p-1 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-400 shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                      {item.feature}
                    </strong>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {item.informal}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Banner inside the card */}
        <div className="p-6 sm:p-8 bg-noir-soft border-t border-noir-line flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-cormorant text-xl font-bold text-bone">
              ¿Deseas verificar la autenticidad y salud de una camada?
            </h4>
            <p className="text-xs text-muted mt-0.5">
              Te enviamos fotos en alta definición, videos personalizados y copias de los certificados de ADN de los padres.
            </p>
          </div>
          <Button
            href="/gatitos"
            variant="primary"
            size="sm"
            rightIcon={<Sparkles className="w-3.5 h-3.5 text-noir" />}
          >
            Ver Gatitos con Garantía
          </Button>
        </div>
      </div>
    </section>
  );
}
