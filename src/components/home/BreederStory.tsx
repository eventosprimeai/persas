import Image from "next/image";
import { Award, CheckCircle2, Heart, Sparkles } from "lucide-react";
import { catteryConfig } from "@/data/cattery";
import { SectionHeading } from "@/components/common/SectionHeading";

export function BreederStory() {
  return (
    <section id="criadero" className="py-24 md:py-32 bg-noir-soft relative border-y border-noir-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo Column with Gold Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full border border-gold/40 shadow-2xl p-2 bg-noir">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=80&w=1200&auto=format&fit=crop"
                  alt={`Criadora ${catteryConfig.founderName} en las instalaciones de ${catteryConfig.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-noir-soft border border-gold/60 p-4 shadow-2xl backdrop-blur-md">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-gold shrink-0" />
                  <div>
                    <div className="font-cormorant text-2xl font-bold text-gold-light leading-none">
                      {catteryConfig.experienceYears} Años
                    </div>
                    <div className="text-[10px] uppercase tracking-luxury text-muted mt-1">
                      Dedicación Exclusiva
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Philosophy Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block text-xs uppercase tracking-luxury text-gold-light font-medium px-3 py-1 bg-noir border border-noir-line rounded-full">
              Sobre el Criadero
            </div>

            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold text-bone tracking-tight leading-[1.15]">
              &ldquo;No criamos en serie; preservamos una{" "}
              <span className="text-gold-gradient italic">obra de arte viva</span>.&rdquo;
            </h2>

            <div className="space-y-4 text-base text-muted leading-relaxed font-normal">
              <p>
                Mi nombre es <strong>{catteryConfig.founderName}</strong>. Fundé{" "}
                <span className="text-bone">{catteryConfig.name}</span> con una convicción inquebrantable: demostrar que la crianza de gatos de alta competición puede y debe realizarse en un entorno 100% familiar, con amor absoluto y respeto biológico hacia la especie.
              </p>
              <p>
                Durante más de una década hemos seleccionado meticulosamente líneas de sangre de los campeonatos más prestigiosos de Europa. Cada uno de nuestros gatos persas vive libre dentro de nuestra casa, convive con nosotros a diario y recibe estimulación temprana para desarrollar ese temperamento dulce, sereno y empático que define al auténtico persa aristocrático.
              </p>
              <p>
                La salud es nuestro pilar innegociable: todos nuestros reproductores están testados por ADN libres de la mutación PKD (enfermedad poliquística renal), garantizando que tu nuevo miembro familiar disfrutará de una vida longeva, sana y plena.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-noir-line/80">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-bone">Cero Jaulas</h4>
                  <p className="text-xs text-muted mt-0.5">Integrados en el núcleo familiar desde su primer día de vida.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-bone">Control Genético de ADN</h4>
                  <p className="text-xs text-muted mt-0.5">Certificación oficial de ausencia de anomalías hereditarias.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-bone">Entrega con Inmunidad Completa</h4>
                  <p className="text-xs text-muted mt-0.5">Respetamos las 14 semanas mínimas de maduración biológica.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-bone">Asesoría Vitalicia</h4>
                  <p className="text-xs text-muted mt-0.5">Contacto directo conmigo para cualquier etapa de su crecimiento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
