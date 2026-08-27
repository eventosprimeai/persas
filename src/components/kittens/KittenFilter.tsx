"use client";

import { useState, useMemo } from "react";
import { Search, Filter, RotateCcw } from "lucide-react";
import { Kitten, KittenGender, KittenStatus } from "@/types";
import { KittenCard } from "@/components/kittens/KittenCard";
import { Button } from "@/components/ui/Button";

interface KittenFilterProps {
  initialKittens: Kitten[];
}

export function KittenFilter({ initialKittens }: KittenFilterProps) {
  const [selectedGender, setSelectedGender] = useState<string>("todos");
  const [selectedStatus, setSelectedStatus] = useState<string>("todos");
  const [selectedVariety, setSelectedVariety] = useState<string>("todos");
  const [sortOrder, setSortOrder] = useState<string>("default");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Extract unique varieties for the filter dropdown
  const varieties = useMemo(() => {
    const set = new Set<string>();
    initialKittens.forEach((k) => set.add(k.variety));
    return Array.from(set);
  }, [initialKittens]);

  // Filter and sort logic
  const filteredKittens = useMemo(() => {
    return initialKittens
      .filter((k) => {
        // Gender filter
        if (selectedGender !== "todos" && k.gender !== selectedGender) {
          return false;
        }
        // Status filter
        if (selectedStatus !== "todos" && k.status !== selectedStatus) {
          return false;
        }
        // Variety filter
        if (selectedVariety !== "todos" && k.variety !== selectedVariety) {
          return false;
        }
        // Search term
        if (searchTerm.trim() !== "") {
          const term = searchTerm.toLowerCase();
          const matchesName = k.name.toLowerCase().includes(term);
          const matchesVariety = k.variety.toLowerCase().includes(term);
          const matchesColor = k.color.toLowerCase().includes(term);
          if (!matchesName && !matchesVariety && !matchesColor) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortOrder === "price-asc") return a.price - b.price;
        if (sortOrder === "price-desc") return b.price - a.price;
        // Default: Available first, then featured
        if (a.status === "Disponible" && b.status !== "Disponible") return -1;
        if (a.status !== "Disponible" && b.status === "Disponible") return 1;
        return 0;
      });
  }, [initialKittens, selectedGender, selectedStatus, selectedVariety, sortOrder, searchTerm]);

  const resetFilters = () => {
    setSelectedGender("todos");
    setSelectedStatus("todos");
    setSelectedVariety("todos");
    setSortOrder("default");
    setSearchTerm("");
  };

  const hasActiveFilters =
    selectedGender !== "todos" ||
    selectedStatus !== "todos" ||
    selectedVariety !== "todos" ||
    searchTerm !== "" ||
    sortOrder !== "default";

  return (
    <div>
      {/* Filters Bar */}
      <div className="bg-noir-soft border border-noir-line p-6 mb-12 shadow-xl">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-noir-line/60">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-luxury text-gold-light font-semibold">
            <Filter className="w-4 h-4 text-gold" />
            <span>Filtros de Búsqueda</span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center space-x-1.5 text-xs text-muted hover:text-gold-light transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpiar filtros</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search box */}
          <div className="relative">
            <label className="block text-[10px] uppercase tracking-luxury text-muted mb-1 font-medium">
              Buscar por nombre o color
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Ej. Golden, Silver, Aurelius..."
                className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-2.5 pl-9 focus:border-gold focus:outline-none transition-colors"
              />
              <Search className="w-3.5 h-3.5 text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Gender Filter */}
          <div>
            <label className="block text-[10px] uppercase tracking-luxury text-muted mb-1 font-medium">
              Sexo
            </label>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-2.5 focus:border-gold focus:outline-none transition-colors cursor-pointer"
            >
              <option value="todos">Todos los sexos</option>
              <option value="Macho">Machos</option>
              <option value="Hembra">Hembras</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-[10px] uppercase tracking-luxury text-muted mb-1 font-medium">
              Disponibilidad
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-2.5 focus:border-gold focus:outline-none transition-colors cursor-pointer"
            >
              <option value="todos">Todos los estados</option>
              <option value="Disponible">Disponibles para reserva</option>
              <option value="Reservado">Reservados</option>
              <option value="Entregado">Entregados</option>
            </select>
          </div>

          {/* Variety Filter */}
          <div>
            <label className="block text-[10px] uppercase tracking-luxury text-muted mb-1 font-medium">
              Variedad / Línea
            </label>
            <select
              value={selectedVariety}
              onChange={(e) => setSelectedVariety(e.target.value)}
              className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-2.5 focus:border-gold focus:outline-none transition-colors cursor-pointer"
            >
              <option value="todos">Todas las variedades</option>
              {varieties.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Order */}
          <div>
            <label className="block text-[10px] uppercase tracking-luxury text-muted mb-1 font-medium">
              Ordenar por
            </label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-2.5 focus:border-gold focus:outline-none transition-colors cursor-pointer"
            >
              <option value="default">Recomendados</option>
              <option value="price-asc">Precio: de menor a mayor</option>
              <option value="price-desc">Precio: de mayor a menor</option>
            </select>
          </div>
        </div>

        {/* Counter and status */}
        <div className="mt-6 pt-4 border-t border-noir-line/40 flex items-center justify-between text-xs text-muted">
          <span>
            Mostrando <strong className="text-bone">{filteredKittens.length}</strong> de{" "}
            <strong className="text-bone">{initialKittens.length}</strong> ejemplares
          </span>
          <span className="text-[11px] text-gold-light">
            Crianza ética • Pedigrí WCF / TICA
          </span>
        </div>
      </div>

      {/* Kittens Listing Grid */}
      {filteredKittens.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredKittens.map((kitten) => (
            <KittenCard key={kitten.id} kitten={kitten} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-16 text-center bg-noir-soft border border-noir-line max-w-xl mx-auto">
          <h3 className="font-cormorant text-2xl font-bold text-bone mb-2">
            No se encontraron ejemplares con estos criterios
          </h3>
          <p className="text-sm text-muted mb-6 leading-relaxed">
            Actualmente no disponemos de un gatito que coincida exactamente con tu búsqueda. Puedes restablecer los filtros o consultarnos por próximas camadas planificadas.
          </p>
          <Button onClick={resetFilters} variant="gold-outline" size="sm">
            Restablecer Filtros
          </Button>
        </div>
      )}
    </div>
  );
}
