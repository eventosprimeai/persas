import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/cattery";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-noir-soft border-t border-noir-line relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Experiencias Reales"
          title="Historias de Nuestras"
          highlight="Familias"
          description="La verdadera recompensa de nuestra crianza: ver a nuestros gatitos convertidos en compañeros amados en hogares extraordinarios."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-noir border border-noir-line hover:border-gold/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold/30" />
                </div>

                <p className="text-sm text-bone/90 italic leading-relaxed mb-6 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Family & Adult Cat Info */}
              <div className="pt-6 border-t border-noir-line/60 flex items-center space-x-4">
                <div className="relative w-12 h-12 border border-gold/40 shrink-0 overflow-hidden bg-noir-soft">
                  <Image
                    src={t.photo}
                    alt={`Gato persa de ${t.family}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-bone">{t.family}</h4>
                  <p className="text-xs text-muted">
                    {t.city} • <span className="text-gold-light">{t.kittenName}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
