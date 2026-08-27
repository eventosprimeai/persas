"use client";

import { Heart, Sparkles, CheckCircle2, Scissors, Stethoscope, Clock, ShieldCheck, Sun } from "lucide-react";
import Image from "next/image";

export function BreedMorphologyCare() {
  return (
    <div className="space-y-16">
      {/* Morphology Section */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs uppercase tracking-luxury text-gold-light font-medium px-3 py-1 bg-noir-soft border border-noir-line rounded-full">
            Anatomía y Estándar
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-bold text-bone">
            Morfología del Gato Persa:{" "}
            <span className="text-gold-gradient italic font-normal">
              Doll-Face vs Peke-Face
            </span>
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            La estructura del Persa es inconfundible en el mundo felino. Conoce por qué en PERSIAN´S nos enfocamos en la línea tradicional *Doll-Face* para garantizar la máxima calidad de vida y salud respiratoria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Doll Face */}
          <div className="bg-noir-card border border-gold/40 p-8 rounded-lg space-y-6 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-luxury text-gold font-semibold px-2.5 py-1 bg-gold/10 border border-gold/30 rounded-full">
                  Nuestra Especialidad
                </span>
                <span className="text-xs text-muted">Estándar Tradicional</span>
              </div>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-bone">
                Persa Doll-Face (Cara de Muñeca)
              </h3>
              <p className="text-sm text-bone/80 leading-relaxed">
                Posee una expresión dulce, ojos redondos y un stop nasal moderado. La nariz se sitúa justo por debajo del eje inferior de los ojos, permitiendo una perfecta apertura de las fosas nasales.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-bone/90">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Respiración 100% libre:</strong> Cero ronquidos nocturnos ni fatiga al jugar.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-bone/90">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Conductos lagrimales sanos:</strong> Ojos limpios sin manchas rojizas ni lagrimeo continuo.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-bone/90">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Mordida y mandíbula simétrica:</strong> Facilidad total para masticar su alimento seco superpremium.</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-noir-soft border border-gold/20 rounded text-xs text-gold-light italic">
              &quot;Es el compañero de hogar ideal: belleza exuberante sin los problemas clínicos asociados a la braquicefalia extrema.&quot;
            </div>
          </div>

          {/* Card 2: Estructura Cobby */}
          <div className="bg-noir-card border border-noir-line p-8 rounded-lg space-y-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-luxury text-muted font-semibold px-2.5 py-1 bg-noir-soft border border-noir-line rounded-full">
                  Fisionomía Oficial
                </span>
                <span className="text-xs text-muted">Hueso Pesado</span>
              </div>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-bone">
                Estructura Corporal Tipo &quot;Cobby&quot;
              </h3>
              <p className="text-sm text-bone/80 leading-relaxed">
                El Persa no es un gato largo ni estilizado. Su silueta debe ser compacta, cuadrada y de osamenta maciza, dándole la apariencia de un osito de peluche viviente.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-bone/90">
                  <Sparkles className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                  <span><strong>Patas cortas y fuertes:</strong> Hueso ancho con zarpas grandes y mechones de pelo entre los dedos.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-bone/90">
                  <Sparkles className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                  <span><strong>Orejas minúsculas y redondeadas:</strong> Implantadas bajas en el cráneo con penachos internos.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-bone/90">
                  <Sparkles className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                  <span><strong>Manto de triple capa:</strong> Subpelo denso y lanoso con capa de cobertura flotante de tacto seda.</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-noir-soft border border-noir-line rounded text-xs text-muted">
              Un Persa auténtico debe pesar entre 3.5 kg y 5.5 kg en la edad adulta, con una contextura sólida y lomo nivelado.
            </div>
          </div>
        </div>
      </section>

      {/* Routine & Care Guide (For Busy Professionals and Families) */}
      <section className="bg-noir-card border border-noir-line p-8 sm:p-12 rounded-lg space-y-10 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-gold px-3 py-1 bg-gold/10 border border-gold/30 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            Rutina Fácil para Personas Ocupadas
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-bone">
            Cuidados Reales del Persa:{" "}
            <span className="text-gold-gradient italic font-normal">
              Solo 5 a 10 Minutos al Día
            </span>
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Existe el mito de que un gato persa requiere horas de trabajo diario. Con la técnica correcta y la morfología Doll-Face adecuada, mantener a tu gatito radiante es un momento de relajación y vínculo mutuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="p-6 bg-noir-soft border border-noir-line/60 rounded space-y-3 hover:border-gold/30 transition-colors">
            <div className="p-3 bg-gold/10 text-gold rounded-full w-fit">
              <Scissors className="w-5 h-5" />
            </div>
            <h4 className="font-cormorant text-xl font-bold text-bone">
              1. Cepillado Rápido (3-5 min)
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              Usa un peine metálico tipo mantequilla (<em>buttercomb</em>). Pásalo suavemente a favor del pelo. Al estar acostumbrados desde bebés en el criadero, disfrutan del cepillado como un masaje.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-noir-soft border border-noir-line/60 rounded space-y-3 hover:border-gold/30 transition-colors">
            <div className="p-3 bg-gold/10 text-gold rounded-full w-fit">
              <Sun className="w-5 h-5" />
            </div>
            <h4 className="font-cormorant text-xl font-bold text-bone">
              2. Limpieza Ocular (1 min)
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              Con una gasa suave humedecida en suero fisiológico o loción de manzanilla, retiras cualquier polvillo acumulado en el lagrimal. Rápido, higiénico y sin esfuerzo.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-noir-soft border border-noir-line/60 rounded space-y-3 hover:border-gold/30 transition-colors">
            <div className="p-3 bg-gold/10 text-gold rounded-full w-fit">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h4 className="font-cormorant text-xl font-bold text-bone">
              3. Nutrición Superpremium
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              Alimento seco formulado con Omega 3 y 6 (ej. Royal Canin Persian Kitten o Hill&apos;s). Ayuda a la expulsión natural de bolas de pelo y mantiene el brillo sedoso del manto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
