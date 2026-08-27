import { Award, Dna, FileCheck, Home } from "lucide-react";
import { trustPoints } from "@/data/cattery";

export function TrustStrip() {
  const icons = [
    <Award key="award" className="w-7 h-7 text-gold stroke-[1.4]" />,
    <Dna key="dna" className="w-7 h-7 text-gold stroke-[1.4]" />,
    <FileCheck key="filecheck" className="w-7 h-7 text-gold stroke-[1.4]" />,
    <Home key="home" className="w-7 h-7 text-gold stroke-[1.4]" />,
  ];

  return (
    <section className="bg-noir-soft border-y border-noir-line relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={point.id}
              className="flex flex-col items-start p-6 bg-noir/50 border border-noir-line hover:border-gold/40 transition-all duration-300 group"
            >
              <div className="p-3 bg-noir-soft border border-noir-line mb-4 group-hover:border-gold/50 group-hover:shadow-gold-glow transition-all duration-300">
                {icons[index]}
              </div>
              <h3 className="font-cormorant text-xl font-bold text-bone group-hover:text-gold-light transition-colors">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                {point.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
