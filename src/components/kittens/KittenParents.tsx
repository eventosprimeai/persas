import Image from "next/image";
import { Award, Dna, ShieldCheck } from "lucide-react";
import { ParentInfo } from "@/types";

interface KittenParentsProps {
  sire: ParentInfo;
  dam: ParentInfo;
}

export function KittenParents({ sire, dam }: KittenParentsProps) {
  return (
    <div className="bg-noir-soft border border-noir-line p-6 sm:p-8">
      <div className="flex items-center space-x-2 text-xs uppercase tracking-luxury text-gold-light font-semibold mb-6">
        <Award className="w-4 h-4 text-gold" />
        <span>Linaje de Campeones & Progenitores</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sire (Padre) */}
        <div className="p-5 bg-noir border border-noir-line hover:border-gold/40 transition-colors">
          <div className="flex items-start space-x-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 border border-gold/40 shrink-0 overflow-hidden bg-noir-soft">
              <Image
                src={sire.photo}
                alt={`Padre: ${sire.name}`}
                fill
                sizes="100px"
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-luxury text-gold-light font-semibold block">
                Padre (Sire)
              </span>
              <h4 className="font-cormorant text-xl font-bold text-bone truncate" title={sire.name}>
                {sire.name}
              </h4>
              {sire.titles && (
                <p className="text-xs text-gold font-medium mt-0.5">{sire.titles}</p>
              )}
              <p className="text-xs text-muted mt-1">{sire.color}</p>
              {sire.origin && (
                <p className="text-[11px] text-[#8E8B85] mt-0.5">{sire.origin}</p>
              )}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-noir-line/60 flex items-center justify-between text-xs text-emerald-400">
            <span className="flex items-center space-x-1.5">
              <Dna className="w-3.5 h-3.5" />
              <span>PKD Genético: {sire.pkdStatus}</span>
            </span>
            <ShieldCheck className="w-4 h-4 text-gold" />
          </div>
        </div>

        {/* Dam (Madre) */}
        <div className="p-5 bg-noir border border-noir-line hover:border-gold/40 transition-colors">
          <div className="flex items-start space-x-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 border border-gold/40 shrink-0 overflow-hidden bg-noir-soft">
              <Image
                src={dam.photo}
                alt={`Madre: ${dam.name}`}
                fill
                sizes="100px"
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-luxury text-gold-light font-semibold block">
                Madre (Dam)
              </span>
              <h4 className="font-cormorant text-xl font-bold text-bone truncate" title={dam.name}>
                {dam.name}
              </h4>
              {dam.titles && (
                <p className="text-xs text-gold font-medium mt-0.5">{dam.titles}</p>
              )}
              <p className="text-xs text-muted mt-1">{dam.color}</p>
              {dam.origin && (
                <p className="text-[11px] text-[#8E8B85] mt-0.5">{dam.origin}</p>
              )}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-noir-line/60 flex items-center justify-between text-xs text-emerald-400">
            <span className="flex items-center space-x-1.5">
              <Dna className="w-3.5 h-3.5" />
              <span>PKD Genético: {dam.pkdStatus}</span>
            </span>
            <ShieldCheck className="w-4 h-4 text-gold" />
          </div>
        </div>
      </div>
    </div>
  );
}
