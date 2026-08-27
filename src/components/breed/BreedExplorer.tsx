"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, ShieldCheck, Heart, Info, ArrowRight, CheckCircle2, MessageCircle, Table as TableIcon, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { catteryConfig } from "@/data/cattery";
import { getWhatsAppUrl } from "@/lib/utils";

export interface BreedFamily {
  id: string;
  family: string;
  category: "solidos" | "humo" | "sombreado" | "tabby" | "bicolor" | "particolor" | "himalaya";
  variants: string;
  typicalEyes: string;
  coatDetails: string;
  temperament: string;
  curiosity: string;
  image: string;
}

const CATEGORIES = [
  { id: "all", label: "Todas las Familias (7)" },
  { id: "sombreado", label: "Sombreado / Chinchilla" },
  { id: "himalaya", label: "Himalaya / Colorpoint" },
  { id: "solidos", label: "Sólidos (Self)" },
  { id: "bicolor", label: "Bicolor / Van / Arlequín" },
  { id: "particolor", label: "Particolor (Tortie & Calicó)" },
  { id: "humo", label: "Humo (Smoke)" },
  { id: "tabby", label: "Atigrado (Tabby)" },
];

export const OFFICIAL_BREED_FAMILIES: BreedFamily[] = [
  {
    id: "sombreado-chinchilla",
    family: "Sombreado / Chinchilla (Tipped)",
    category: "sombreado",
    variants: "Plateado (Silver Chinchilla / Silver Shaded), Dorado (Golden NY11 / NY12), Cameo (Red Tipped)",
    typicalEyes: "Verde Esmeralda profundo o Turquesa con delineado negro azabache (rim natural en párpados y trufa)",
    coatDetails: "Manto base blanco puro o albaricoque dorado cálido con pigmento oscuro solo en la punta exterior de cada pelo (1/8 a 1/3 del tallo capilar).",
    temperament: "Sereno, aristocrático, sumamente limpio y de dulzura angelical.",
    curiosity: "Considerada la joya de la corona en exposiciones WCF/TICA; su delineado negro parece un maquillaje natural perfecto.",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "himalaya-colorpoint",
    family: "Himalaya / Colorpoint (Pointed)",
    category: "himalaya",
    variants: "Seal Point, Blue Point, Chocolate Point, Lilac Point, Red Point (Flame), Cream Point, Lynx Point",
    typicalEyes: "Azul Zafiro Intenso y brillante (requisito indispensable del estándar)",
    coatDetails: "Cuerpo claro uniforme (tono marfil, crema o blanco glaciar) con contraste térmico oscuro en los 'puntos': máscara facial, orejitas, patitas y cola.",
    temperament: "Muy sociable, vivaz, juguetón y profundamente apegado a la familia.",
    curiosity: "Nace completamente blanco; los puntos oscuros se van coloreando gradualmente durante las primeras semanas por temperatura corporal.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "solidos-self",
    family: "Sólidos (Self)",
    category: "solidos",
    variants: "Blanco (White), Negro (Black), Azul (Blue / Gris pizarra), Rojo (Red), Crema (Cream), Chocolate, Lila (Lilac)",
    typicalEyes: "Cobre profundo / Naranja brillante (en Blanco: Azul, Cobre o Impares/Odd-eyed)",
    coatDetails: "Pelaje de color 100% monocromático, uniforme desde la raíz hasta la punta, sin sombras, marcas atigradas ni pelos blancos dispersos.",
    temperament: "Plácido, silencioso, extremadamente tolerante y cariñoso.",
    curiosity: "El Persa Azul Sólido fue la mascota favorita de la Reina Victoria de Inglaterra e impulsó la raza en toda Europa.",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "bicolor-van-arlequin",
    family: "Bicolor / Van / Arlequín",
    category: "bicolor",
    variants: "Cualquier color sólido o tabby combinado con blanco (Bicolor clásico, patrón Van con color solo en cabeza y cola, o Arlequín)",
    typicalEyes: "Cobre cálido, Ámbar o Avellana",
    coatDetails: "Parches nítidos y bien delimitados de color sobre un fondo blanco inmaculado, con la clásica 'V' invertida blanca simétrica en el rostro y patas blancas.",
    temperament: "Extrovertido, afectuoso, curioso y con gran energía positiva.",
    curiosity: "Los jueces felinos valoran enormemente la simetría de las manchas faciales y la pureza del blanco en el pecho.",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "particolor-tortie",
    family: "Particolor (Tortie / Calicó)",
    category: "particolor",
    variants: "Carey (Tortoiseshell: Negro y Rojo), Azul-Crema (Blue-Cream), Calicó (Carey con Blanco), Calicó Diluido (Azul, Crema y Blanco)",
    typicalEyes: "Cobre brillante o Naranja profundo",
    coatDetails: "Mezcla artística y moteada de tonalidades cálidas y frías. En Calicó, las manchas de color descansan sobre un cuerpo predominantemente blanco.",
    temperament: "Famosas por el 'tortie-tude': cariñosas, leales, protectoras y de gran personalidad.",
    curiosity: "Casi el 99.9% de los ejemplares particolor son hembras debido a la genética ligada al cromosoma X.",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "humo-smoke",
    family: "Humo (Smoke)",
    category: "humo",
    variants: "Negro Humo (Black Smoke), Azul Humo (Blue Smoke), Crema Humo, Cameo Humo (Rojo), Tortuga Humo",
    typicalEyes: "Cobre intenso / Naranja fuego",
    coatDetails: "En reposo parece un gato de color sólido, pero al moverse o acariciarlo se revela un subpelo interior blanco plateado inmaculado.",
    temperament: "Misterioso, dócil, tranquilo y de mirada sumamente expresiva.",
    curiosity: "Es uno de los efectos visuales más fascinantes de la raza persa gracias al gen inhibidor de melanina.",
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "atigrado-tabby",
    family: "Atigrado (Tabby)",
    category: "tabby",
    variants: "Patrón Clásico (Blotched/Marmoleado), Mackerel (Rayado atigrado), Ticked — en tonalidades Plata, Dorado, Rojo, Marrón, Azul y Crema",
    typicalEyes: "Cobre intenso, Ámbar o Verde esmeralda (según el color base del manto)",
    coatDetails: "Dibujos nítidos y contrastados con la clásica marca en forma de 'M' en la frente, líneas delineadas en los pómulos y anillos en cola y patas.",
    temperament: "Inteligente, atento, muy juguetón y amante de los mimos.",
    curiosity: "El patrón Tabby es el dibujo ancestral de los primeros felinos, que en el persa adquiere una textura de terciopelo única.",
    image: "https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=800&auto=format&fit=crop",
  },
];

export function BreedExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  const filteredFamilies =
    selectedCategory === "all"
      ? OFFICIAL_BREED_FAMILIES
      : OFFICIAL_BREED_FAMILIES.filter((v) => v.category === selectedCategory);

  const getCustomWhatsApp = (familyName: string) => {
    return getWhatsAppUrl(
      catteryConfig.contact.whatsappNumber,
      `Hola PERSIAN´S, estuve revisando la guía de colores oficiales y me gustaría consultar sobre la disponibilidad o próximas camadas de la familia "${familyName}".`
    );
  };

  return (
    <div className="space-y-10">
      {/* View Switcher & Category Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2 border-b border-noir-line/60">
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-luxury rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-gold text-noir font-bold shadow-lg shadow-gold/20 scale-105"
                    : "bg-noir-soft border border-noir-line text-bone/70 hover:text-gold-light hover:border-gold/40"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Toggle Mode Button */}
        <div className="flex items-center gap-2 bg-noir-soft border border-noir-line p-1 rounded-full shrink-0">
          <button
            onClick={() => setViewMode("cards")}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-full transition-colors ${
              viewMode === "cards"
                ? "bg-gold/20 text-gold-light font-medium border border-gold/40"
                : "text-muted hover:text-bone"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Fichas</span>
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-full transition-colors ${
              viewMode === "table"
                ? "bg-gold/20 text-gold-light font-medium border border-gold/40"
                : "text-muted hover:text-bone"
            }`}
          >
            <TableIcon className="w-3.5 h-3.5" />
            <span>Tabla Oficial</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Table View */}
      {viewMode === "table" ? (
        <div className="bg-noir-card border border-noir-line rounded-lg overflow-hidden shadow-2xl overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-noir-soft border-b border-noir-line text-gold-light text-xs uppercase tracking-luxury font-semibold">
                <th className="py-4 px-6">Familia Oficial (CFA / WCF)</th>
                <th className="py-4 px-6">Variantes Reconocidas</th>
                <th className="py-4 px-6">Color de Ojos Típico</th>
                <th className="py-4 px-6 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-noir-line text-xs">
              {filteredFamilies.map((item) => (
                <tr key={item.id} className="hover:bg-noir-soft/50 transition-colors group">
                  <td className="py-4 px-6 font-semibold text-bone">
                    <span className="text-gold-light block font-cormorant text-base">
                      {item.family}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-bone/80 max-w-xs leading-relaxed">
                    {item.variants}
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 text-gold font-medium bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
                      <Eye className="w-3.5 h-3.5" />
                      {item.typicalEyes}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Button
                      href={getCustomWhatsApp(item.family)}
                      isExternal
                      variant="gold-outline"
                      size="sm"
                      leftIcon={<MessageCircle className="w-3 h-3 text-gold" />}
                    >
                      Consultar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Mode 2: Card Grid View */
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredFamilies.map((variety) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={variety.id}
                className="bg-noir-card border border-noir-line hover:border-gold/50 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-gold/5"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-noir-soft">
                    <Image
                      src={variety.image}
                      alt={variety.family}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-card via-transparent to-black/40" />

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] uppercase tracking-luxury text-gold-light/90 font-semibold bg-noir/80 px-2.5 py-0.5 rounded-full border border-gold/30">
                        CFA / TICA / WCF Standard
                      </span>
                      <h3 className="font-cormorant text-2xl font-bold text-bone leading-tight group-hover:text-gold-light transition-colors mt-1.5">
                        {variety.family}
                      </h3>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-4 text-xs text-muted">
                    {/* Variants */}
                    <div className="space-y-1">
                      <span className="font-semibold text-bone text-[11px] uppercase tracking-wider block">
                        Variantes Principales:
                      </span>
                      <p className="text-bone/85 leading-relaxed bg-noir-soft/60 p-2.5 rounded border border-noir-line/60">
                        {variety.variants}
                      </p>
                    </div>

                    {/* Eye Color */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <Eye className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-bone block text-[11px] uppercase tracking-wider">
                          Ojos Típicos:
                        </span>
                        <p className="text-gold-light/90 font-medium mt-0.5 leading-relaxed">
                          {variety.typicalEyes}
                        </p>
                      </div>
                    </div>

                    {/* Coat description */}
                    <div className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-bone block text-[11px] uppercase tracking-wider">
                          Manto y Genética:
                        </span>
                        <p className="text-bone/80 mt-0.5 leading-relaxed">
                          {variety.coatDetails}
                        </p>
                      </div>
                    </div>

                    {/* Curiosity / Highlight */}
                    <div className="flex items-start gap-2.5 pt-2 border-t border-noir-line/60">
                      <CheckCircle2 className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                      <p className="text-gold-light/90 italic text-[11px] leading-relaxed">
                        {variety.curiosity}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <Button
                    href={getCustomWhatsApp(variety.family)}
                    isExternal
                    variant="gold-outline"
                    size="sm"
                    fullWidth
                    leftIcon={<MessageCircle className="w-3.5 h-3.5 text-gold" />}
                  >
                    Consultar Disponibilidad
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
