import { Sparkles, MessageCircle, ShieldCheck, Heart } from "lucide-react";
import { catteryConfig } from "@/data/cattery";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl(
    catteryConfig.contact.whatsappNumber,
    catteryConfig.contact.whatsappDefaultMessage
  );

  return (
    <section className="py-24 md:py-32 bg-noir relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 md:p-20 bg-noir-soft border border-gold/40 shadow-2xl text-center relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          {/* Micro Tag */}
          <div className="inline-block text-xs uppercase tracking-luxury text-gold-light font-medium px-3.5 py-1.5 bg-noir border border-noir-line rounded-full mb-6">
            Crianza Exclusiva y Limitada
          </div>

          {/* Headline */}
          <h2 className="font-cormorant text-3xl sm:text-5xl md:text-6xl font-bold text-bone tracking-tight leading-[1.15] max-w-2xl mx-auto">
            ¿Preparado para dar la bienvenida a tu{" "}
            <span className="text-gold-gradient italic font-normal">
              nuevo miembro familiar
            </span>
            ?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed">
            Las reservas se gestionan por riguroso orden de contacto y aprobación de perfil. Escríbenos para consultar las próximas camadas o concertar una videollamada.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/gatitos"
              variant="primary"
              size="lg"
              rightIcon={<Sparkles className="w-4 h-4 text-noir" />}
            >
              Ver Gatitos Disponibles
            </Button>

            <Button
              href={whatsappUrl}
              isExternal
              variant="gold-outline"
              size="lg"
              leftIcon={<MessageCircle className="w-4 h-4 text-gold" />}
            >
              Hablar con la Criadora por WhatsApp
            </Button>
          </div>

          {/* Trust points micro */}
          <div className="mt-12 pt-8 border-t border-noir-line/60 flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Contrato de reserva vinculante</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Heart className="w-4 h-4 text-gold" />
              <span>Acompañamiento vitalicio</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Respuesta en menos de 2 horas</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
