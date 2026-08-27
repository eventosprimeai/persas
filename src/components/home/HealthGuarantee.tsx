import { ShieldCheck, FileText, Stethoscope, Dna, Check } from "lucide-react";
import { catteryConfig } from "@/data/cattery";
import { SectionHeading } from "@/components/common/SectionHeading";

export function HealthGuarantee() {
  const documentationIncluded = [
    "Certificado Oficial de Pedigrí WCF / TICA (5 generaciones)",
    "Cartilla de vacunación y salud oficial con microchip homologado ISO",
    "Cartilla con pauta vacunal completa (Trivalente felina + refuerzo)",
    "Certificado de salud expedido por veterinario colegiado en las 48h previas",
    "Informe de laboratorio de ADN negativo a PKD y PRA de los progenitores",
    "Contrato legal de cesión y garantías vinculante por 2 años",
  ];

  return (
    <section id="garantias" className="py-24 md:py-32 bg-noir-soft border-t border-noir-line relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Seguridad Contractual"
          title="Garantía de Salud y"
          highlight="Sanidad Genética"
          description="Tu tranquilidad es absoluta. Cada adopción está blindada por un contrato legal exhaustivo y controles veterinarios de nivel hospitalario."
        />

        {/* Guarantees 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {catteryConfig.guarantees.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-noir border border-noir-line hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-3 bg-noir-soft border border-noir-line text-gold">
                    {idx === 0 ? (
                      <Dna className="w-6 h-6" />
                    ) : idx === 1 ? (
                      <ShieldCheck className="w-6 h-6" />
                    ) : (
                      <Stethoscope className="w-6 h-6" />
                    )}
                  </span>
                  <span className="text-[10px] uppercase tracking-luxury text-gold-light bg-gold/10 border border-gold/30 px-2.5 py-1">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-cormorant text-2xl font-bold text-bone group-hover:text-gold-light transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Documentation Box */}
        <div className="p-8 md:p-10 bg-noir border border-gold/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-2 text-gold-light text-xs uppercase tracking-luxury font-semibold mb-2">
                <FileText className="w-4 h-4 text-gold" />
                <span>Documentación Oficial</span>
              </div>
              <h3 className="font-cormorant text-3xl font-bold text-bone">
                Todo lo que recibes el día de la entrega
              </h3>
              <p className="text-xs text-muted mt-2 leading-relaxed">
                Entregamos cada ejemplar con su expediente veterinario completo y transferencias de titularidad oficiales.
              </p>
            </div>

            <div className="lg:col-span-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {documentationIncluded.map((doc, i) => (
                  <li key={i} className="flex items-start space-x-2.5 text-xs text-bone">
                    <span className="w-4 h-4 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
