"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, ChevronDown, Award, ShieldCheck, HeartHandshake } from "lucide-react";
import { catteryConfig } from "@/data/cattery";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const whatsappUrl = getWhatsAppUrl(
    catteryConfig.contact.whatsappNumber,
    catteryConfig.contact.whatsappDefaultMessage
  );

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16">
      {/* Background Image with Dark Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=85&w=2000&auto=format&fit=crop"
          alt="Gato Persa Chinchilla de pedigrí sobre fondo oscuro"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-pulse-subtle"
        />
        {/* Multi-layered cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/80 to-noir/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/70 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-noir/40 to-noir" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-6 sm:pt-4">
        {/* Experience & Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-6"
        >
          <span className="inline-flex items-center text-[11px] sm:text-xs uppercase tracking-luxury text-gold-light bg-noir-soft/90 border border-gold/40 px-3.5 py-1.5 backdrop-blur-md">
            <Award className="w-3.5 h-3.5 mr-1.5 text-gold shrink-0" />
            {catteryConfig.experienceYears} Años de Crianza Selecta
          </span>
          <span className="inline-flex items-center text-[11px] sm:text-xs uppercase tracking-luxury text-bone/90 bg-noir/70 border border-noir-line px-3.5 py-1.5 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400 shrink-0" />
            Líneas 100% Libres de PKD (ADN)
          </span>
        </motion.div>

        {/* Main H1 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-bone tracking-tight leading-[1.08] max-w-4xl"
        >
          Gatos Persas de Alta Pureza y{" "}
          <span className="text-gold-gradient italic font-normal">
            Belleza Aristocrática
          </span>
        </motion.h1>

        {/* Credibility Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base sm:text-lg md:text-xl text-muted font-normal max-w-2xl leading-relaxed sm:mx-0 mx-auto"
        >
          Criadero especializado en ejemplares Persa Chinchilla, Golden Shaded y Bicolor. Salud certificada por ADN, linajes de campeones internacionales y socialización en un hogar cálido.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4"
        >
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
            Hablar por WhatsApp
          </Button>
        </motion.div>

        {/* Value Micro-Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-noir-line/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-2xl"
        >
          <div className="flex items-center space-x-2.5">
            <HeartHandshake className="w-4 h-4 text-gold shrink-0" />
            <span className="text-xs text-bone/90">Entrega en mano personalizada</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
            <span className="text-xs text-bone/90">Garantía contractual de 2 años</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center space-x-2.5">
            <Award className="w-4 h-4 text-gold shrink-0" />
            <span className="text-xs text-bone/90">Pedigrí oficial WCF / TICA</span>
          </div>
        </motion.div>
      </div>

      {/* Discrete Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer text-muted hover:text-gold-light transition-colors"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-1 font-medium text-gold-light/80">
          Descubre el criadero
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-gold" />
      </motion.div>
    </section>
  );
}
