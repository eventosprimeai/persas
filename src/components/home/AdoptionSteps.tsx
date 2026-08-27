import { adoptionSteps } from "@/data/cattery";
import { SectionHeading } from "@/components/common/SectionHeading";

export function AdoptionSteps() {
  return (
    <section id="adopcion" className="py-24 md:py-32 bg-noir relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Protocolo Exclusivo"
          title="El Proceso de"
          highlight="Adopción"
          description="Un camino guiado y transparente diseñado para garantizar que cada gatito llegue al hogar ideal y que tu familia reciba todas las certezas legales y sanitarias."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-gold/10 via-gold/40 to-gold/10 z-0" />

          {adoptionSteps.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="relative z-10 flex flex-col p-8 bg-noir-soft border border-noir-line hover:border-gold/50 transition-all duration-300 group"
            >
              {/* Step Number with Gold Accent */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-cormorant text-4xl font-bold text-gold-light group-hover:text-gold transition-colors">
                  {stepItem.step}
                </span>
                <span className="text-[10px] uppercase tracking-luxury text-muted bg-noir px-2 py-1 border border-noir-line">
                  Paso 0{index + 1}
                </span>
              </div>

              <h3 className="font-cormorant text-2xl font-bold text-bone group-hover:text-gold-light transition-colors mb-3">
                {stepItem.title}
              </h3>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
