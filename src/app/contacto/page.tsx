"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChevronRight,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Plane,
} from "lucide-react";
import { contactSchema, ContactFormValues } from "@/lib/schemas";
import { catteryConfig } from "@/data/cattery";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "Consulta sobre adopción y próximas camadas",
      acceptTerms: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("No se pudo enviar el mensaje. Por favor intenta por WhatsApp.");
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

  const whatsappGeneralUrl = getWhatsAppUrl(
    catteryConfig.contact.whatsappNumber,
    catteryConfig.contact.whatsappDefaultMessage
  );

  return (
    <div className="pt-28 pb-24 md:pb-32 bg-noir min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs uppercase tracking-luxury text-muted mb-8">
          <Link href="/" className="hover:text-gold-light transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3 h-3 text-gold" />
          <span className="text-gold-light font-medium">Contacto y Visitas</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-xs uppercase tracking-luxury text-gold-light font-medium px-3 py-1 bg-noir-soft border border-noir-line rounded-full mb-4">
            Atención Personalizada
          </span>
          <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-bold text-bone tracking-tight leading-[1.1]">
            Conversemos sobre tu{" "}
            <span className="text-gold-gradient italic font-normal">
              Próximo Persa
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Estamos a tu entera disposición para resolver cualquier duda sobre nuestras camadas, genética, protocolos de reserva y transporte especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels & Visiting Policy (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority Card */}
            <div className="p-8 bg-noir-soft border border-gold/50 shadow-2xl space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-noir border border-gold/40 text-gold">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-luxury text-gold-light font-semibold block">
                    Canal Directo & Rápido
                  </span>
                  <h3 className="font-cormorant text-2xl font-bold text-bone">
                    WhatsApp Criador
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Respuesta directa por la criadora principal en menos de 2 horas para consultas de disponibilidad y fotos actualizadas.
              </p>
              <div className="pt-2">
                <Button
                  href={whatsappGeneralUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  fullWidth
                  leftIcon={<MessageCircle className="w-4 h-4 text-noir" />}
                >
                  Abrir Chat de WhatsApp
                </Button>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="p-8 bg-noir-soft border border-noir-line space-y-6">
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-bone block text-xs uppercase tracking-luxury">
                      Ubicación:
                    </strong>
                    <p className="text-xs text-muted mt-0.5">
                      {catteryConfig.location.city}, {catteryConfig.location.state} ({catteryConfig.location.country})
                    </p>
                    <p className="text-[11px] text-[#8E8B85] mt-1 italic">
                      {catteryConfig.location.addressNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-noir-line/60">
                  <Plane className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-bone block text-xs uppercase tracking-luxury">
                      Envíos & Pet-Nanny:
                    </strong>
                    <p className="text-xs text-muted mt-0.5">
                      {catteryConfig.location.shippingInfo}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-noir-line/60">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-bone block text-xs uppercase tracking-luxury">
                      Horario de Atención:
                    </strong>
                    <p className="text-xs text-muted mt-0.5">
                      {catteryConfig.contact.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-3 border-t border-noir-line/60">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-bone block text-xs uppercase tracking-luxury">
                      Correo Electrónico:
                    </strong>
                    <a
                      href={`mailto:${catteryConfig.contact.email}`}
                      className="text-xs text-gold-light hover:underline mt-0.5 block"
                    >
                      {catteryConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Biosecurity Notice */}
            <div className="p-5 bg-noir border border-noir-line flex items-start space-x-3 text-xs text-muted">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <span>
                <strong>Protocolo de Bioseguridad:</strong> Para proteger la inmunidad de los cachorros antes de completar su pauta vacunal, las visitas físicas a la finca se coordinan únicamente para familias con reserva formalizada previa.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-noir-soft border border-noir-line p-8 sm:p-10 shadow-2xl">
            <h2 className="font-cormorant text-3xl font-bold text-bone mb-2">
              Envíanos un Mensaje
            </h2>
            <p className="text-xs text-muted mb-8">
              Completa el formulario y te responderemos a la brevedad por correo o teléfono.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-noir border border-gold/60 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 stroke-[2]" />
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-bone">
                  Mensaje Enviado con Éxito
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-md mx-auto">
                  Gracias por comunicarte con Imperium Persians. Revisaremos tu consulta y nos pondremos en contacto contigo lo antes posible.
                </p>
                <div className="pt-4">
                  <Button onClick={() => setIsSubmitted(false)} variant="gold-outline" size="sm">
                    Enviar otro mensaje
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-red-950/40 border border-red-800/60 text-xs text-red-200 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] uppercase tracking-luxury text-bone mb-1 font-medium">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="Ej. Rodrigo San Martín"
                    className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-3 focus:border-gold focus:outline-none transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-amber-400 mt-1">{errors.fullName.message}</p>
                  )}
                </div>

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
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="+34 600 000 000"
                      className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-3 focus:border-gold focus:outline-none transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-amber-400 mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-luxury text-bone mb-1 font-medium">
                    Asunto de Consulta *
                  </label>
                  <input
                    type="text"
                    {...register("subject")}
                    placeholder="Ej. Información sobre camada Golden Shaded"
                    className="w-full bg-noir border border-noir-line text-bone text-xs px-3.5 py-3 focus:border-gold focus:outline-none transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-amber-400 mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-luxury text-bone mb-1 font-medium">
                    Tu Mensaje o Consulta *
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Escribe tu mensaje con el mayor detalle posible..."
                    className="w-full bg-noir border border-noir-line text-bone text-xs p-3.5 focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-amber-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <label className="flex items-start space-x-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("acceptTerms")}
                      className="mt-1 accent-[#C9A227] w-4 h-4 rounded-none bg-noir border-noir-line cursor-pointer"
                    />
                    <span className="text-[11px] text-muted leading-tight">
                      Acepto la política de privacidad y el tratamiento de mis datos con fines de contacto exclusivo. *
                    </span>
                  </label>
                  {errors.acceptTerms && (
                    <p className="text-[11px] text-amber-400 mt-1">{errors.acceptTerms.message}</p>
                  )}
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    fullWidth
                    rightIcon={<Send className="w-4 h-4 text-noir" />}
                  >
                    {isSubmitting ? "Enviando Mensaje..." : "Enviar Mensaje"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
