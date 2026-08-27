"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, MessageCircle, AlertCircle, ShieldCheck } from "lucide-react";
import { reservationSchema, ReservationFormValues } from "@/lib/schemas";
import { catteryConfig } from "@/data/cattery";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface ReservationFormProps {
  kittenName: string;
  kittenId: string;
  variety: string;
  isAvailable: boolean;
}

export function ReservationForm({
  kittenName,
  kittenId,
  variety,
  isAvailable,
}: ReservationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      kittenId,
      kittenName,
      experience: "experiencia_gatos",
      hasOtherPets: "no",
      homeType: "piso",
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al procesar tu solicitud. Por favor intenta nuevamente o contáctanos por WhatsApp.");
      }

      setIsSubmitted(true);
      reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error inesperado.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappDirectMsg = `Hola Imperium Persians, me gustaría solicitar la reserva de ${kittenName} (${variety}). ¿Podrían indicarme los siguientes pasos?`;
  const whatsappUrl = getWhatsAppUrl(catteryConfig.contact.whatsappNumber, whatsappDirectMsg);

  if (isSubmitted) {
    return (
      <div className="p-8 bg-noir-soft border border-gold/60 shadow-2xl text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7 stroke-[2]" />
        </div>
        <h3 className="font-cormorant text-2xl font-bold text-bone">
          Solicitud de Reserva Recibida
        </h3>
        <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-md mx-auto">
          Hemos recibido tu solicitud para <strong>{kittenName}</strong>. Elena revisará tu perfil y te contactará en menos de 2 horas para coordinar la videollamada de presentación.
        </p>
        <div className="pt-4">
          <Button href={whatsappUrl} isExternal variant="gold-outline" size="sm" leftIcon={<MessageCircle className="w-4 h-4 text-gold" />}>
            Escribir por WhatsApp ahora
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div id="formulario-reserva" className="bg-noir-soft border border-noir-line p-6 sm:p-8 shadow-2xl relative">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-noir-line/60">
        <div>
          <span className="text-[10px] uppercase tracking-luxury text-gold-light font-semibold block">
            Solicitud de Adopción
          </span>
          <h3 className="font-cormorant text-2xl font-bold text-bone">
            Reservar a {kittenName}
          </h3>
        </div>
        <ShieldCheck className="w-6 h-6 text-gold shrink-0" />
      </div>

      {!isAvailable && (
        <div className="mb-6 p-3.5 bg-noir border border-gold/40 text-xs text-gold-light flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>
            Este ejemplar se encuentra reservado. Puedes completar el formulario para anotarte en lista de espera prioritaria de la próxima camada idéntica.
          </span>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-3.5 bg-red-950/40 border border-red-800/60 text-xs text-red-200 flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-[11px] uppercase tracking-luxury text-bone mb-1 font-medium">
            Nombre y Apellidos *
          </label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="Ej. Carmen Velasco Ramos"
            className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-3 focus:border-gold focus:outline-none transition-colors"
          />
          {errors.fullName && (
            <p className="text-[11px] text-amber-400 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-luxury text-bone mb-1 font-medium">
              Correo Electrónico *
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="tu@email.com"
              className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-3 focus:border-gold focus:outline-none transition-colors"
            />
            {errors.email && (
              <p className="text-[11px] text-amber-400 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-luxury text-bone mb-1 font-medium">
              Teléfono / WhatsApp *
            </label>
            <input
              type="tel"
              {...register("phone")}
              placeholder="+593 99 000 0000"
              className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-3 focus:border-gold focus:outline-none transition-colors"
            />
            {errors.phone && (
              <p className="text-[11px] text-amber-400 mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* City & Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-luxury text-bone mb-1 font-medium">
              Ciudad de Residencia *
            </label>
            <input
              type="text"
              {...register("city")}
              placeholder="Ej. Quito, Guayaquil, Cuenca..."
              className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-3 focus:border-gold focus:outline-none transition-colors"
            />
            {errors.city && (
              <p className="text-[11px] text-amber-400 mt-1">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-luxury text-bone mb-1 font-medium">
              Experiencia previa *
            </label>
            <select
              {...register("experience")}
              className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-3 focus:border-gold focus:outline-none transition-colors cursor-pointer"
            >
              <option value="primera_vez">Primera vez con gatos</option>
              <option value="experiencia_gatos">Experiencia con gatos</option>
              <option value="experiencia_persas">He tenido gatos persas antes</option>
            </select>
          </div>
        </div>

        {/* Other Pets & Home Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-luxury text-bone mb-1 font-medium">
              ¿Convives con otras mascotas?
            </label>
            <select
              {...register("hasOtherPets")}
              className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-3 focus:border-gold focus:outline-none transition-colors cursor-pointer"
            >
              <option value="no">No, será mascota única</option>
              <option value="si">Sí, tengo perro(s) o gato(s)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-luxury text-bone mb-1 font-medium">
              Tipo de Vivienda
            </label>
            <select
              {...register("homeType")}
              className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-3 focus:border-gold focus:outline-none transition-colors cursor-pointer"
            >
              <option value="piso">Departamento</option>
              <option value="casa_con_jardin">Casa con jardín o patio protegido</option>
              <option value="atico">Departamento con balcón/terraza asegurado</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-[11px] uppercase tracking-luxury text-bone mb-1 font-medium">
            Cuéntanos sobre tu hogar y estilo de vida *
          </label>
          <textarea
            rows={3}
            {...register("message")}
            placeholder="Coméntanos con quién vivirá el gatito, horarios y cualquier detalle importante para su adaptación..."
            className="w-full bg-noir border border-noir-line text-bone text-xs p-3.5 focus:border-gold focus:outline-none transition-colors resize-none"
          />
          {errors.message && (
            <p className="text-[11px] text-amber-400 mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Terms Checkbox */}
        <div className="pt-2">
          <label className="flex items-start space-x-2.5 cursor-pointer">
            <input
              type="checkbox"
              {...register("acceptTerms")}
              className="mt-1 accent-[#C9A227] w-4 h-4 rounded-none bg-noir border-noir-line cursor-pointer"
            />
            <span className="text-[11px] text-muted leading-tight">
              Acepto las condiciones de crianza ética, política de privacidad y confirmo que busco un gato de compañía con máximas garantías. *
            </span>
          </label>
          {errors.acceptTerms && (
            <p className="text-[11px] text-amber-400 mt-1">{errors.acceptTerms.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="pt-4 space-y-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            size="lg"
            fullWidth
            rightIcon={<Send className="w-4 h-4 text-noir" />}
          >
            {isSubmitting ? "Enviando Solicitud..." : `Enviar Solicitud para ${kittenName}`}
          </Button>

          <Button
            href={whatsappUrl}
            isExternal
            variant="gold-outline"
            size="md"
            fullWidth
            leftIcon={<MessageCircle className="w-4 h-4 text-gold" />}
          >
            Preguntar directamente por WhatsApp
          </Button>
        </div>
      </form>
    </div>
  );
}
