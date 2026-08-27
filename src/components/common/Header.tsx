"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { catteryConfig } from "@/data/cattery";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/common/Logo";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/gatitos", label: "Gatitos" },
  { href: "/raza-persa", label: "Guía de Raza" },
  { href: "/#criadero", label: "Criadero" },
  { href: "/#adopcion", label: "Adopción" },
  { href: "/#garantias", label: "Garantías" },
  { href: "/#faqs", label: "Preguntas" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const whatsappUrl = getWhatsAppUrl(
    catteryConfig.contact.whatsappNumber,
    catteryConfig.contact.whatsappDefaultMessage
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-noir/90 backdrop-blur-md border-b border-noir-line/80 py-3.5 shadow-2xl"
          : "bg-gradient-to-b from-noir/90 via-noir/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3 focus-visible:outline-gold">
          <LogoMark className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 transition-transform duration-300 group-hover:scale-105" />
          <span className="flex flex-col min-w-0">
            <span className="font-cormorant text-2xl sm:text-3xl font-bold tracking-tight text-gold-gradient italic group-hover:opacity-90 transition-opacity duration-300 whitespace-nowrap">
              PERSIAN&rsquo;S
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-gold-light/80 -mt-1 whitespace-nowrap">
              Gatos de Alta Pureza
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-luxury transition-all duration-300 relative py-1 whitespace-nowrap ${
                  isActive
                    ? "text-gold-light font-semibold"
                    : "text-bone/80 hover:text-gold-light"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs Desktop */}
        <div className="hidden sm:flex items-center space-x-3">
          <Button
            href={whatsappUrl}
            isExternal
            variant="gold-outline"
            size="sm"
            leftIcon={<MessageCircle className="w-3.5 h-3.5 text-gold" />}
          >
            WhatsApp
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-bone hover:text-gold-light focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden bg-noir-soft/98 backdrop-blur-xl border-b border-noir-line px-6 py-6"
          >
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-luxury text-bone hover:text-gold-light py-2 border-b border-noir-line/40 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 flex flex-col space-y-3">
                <Button
                  href={whatsappUrl}
                  isExternal
                  variant="gold-outline"
                  size="md"
                  fullWidth
                  leftIcon={<MessageCircle className="w-4 h-4 text-gold" />}
                >
                  Hablar por WhatsApp
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
