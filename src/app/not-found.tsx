import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-noir px-4 py-24">
      <div className="max-w-md w-full text-center space-y-6 bg-noir-soft border border-noir-line p-10 shadow-2xl">
        <span className="font-cormorant text-7xl sm:text-8xl font-bold text-gold-light">
          404
        </span>

        <h1 className="font-cormorant text-3xl font-bold text-bone">
          Página No Encontrada
        </h1>

        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          El ejemplar o sección que buscas no está disponible o ha cambiado de ubicación. Te invitamos a descubrir nuestros gatitos persas disponibles.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="secondary" size="md" leftIcon={<ArrowLeft className="w-4 h-4 text-gold" />}>
            Volver al Inicio
          </Button>
          <Button href="/gatitos" variant="primary" size="md" rightIcon={<Sparkles className="w-4 h-4 text-noir" />}>
            Ver Gatitos
          </Button>
        </div>
      </div>
    </div>
  );
}
