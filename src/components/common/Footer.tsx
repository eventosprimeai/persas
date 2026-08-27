import Link from "next/link";
import { ShieldCheck, Heart, Award, ArrowUpRight } from "lucide-react";
import { catteryConfig } from "@/data/cattery";
import { GoldFillet } from "./GoldFillet";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-noir-soft text-bone border-t border-noir-line relative">
      <GoldFillet />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-cormorant text-2xl font-bold tracking-tight text-bone">
                IMPERIUM <span className="text-gold-gradient italic">PERSIANS</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Crianza ética y selecta de gatos persas de alta pureza genética, libres de PKD por ADN y socializados en un entorno familiar cálido y respetuoso.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-gold-light">
              <Award className="w-4 h-4 text-gold shrink-0" />
              <span>Afijo Oficial Registrado WCF / TICA</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-luxury text-gold-light font-semibold mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/gatitos"
                  className="text-muted hover:text-gold-light transition-colors inline-flex items-center group"
                >
                  <span>Gatitos Disponibles</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/#criadero"
                  className="text-muted hover:text-gold-light transition-colors"
                >
                  Nuestra Filosofía y Crianza
                </Link>
              </li>
              <li>
                <Link
                  href="/#adopcion"
                  className="text-muted hover:text-gold-light transition-colors"
                >
                  Protocolo de Adopción
                </Link>
              </li>
              <li>
                <Link
                  href="/#garantias"
                  className="text-muted hover:text-gold-light transition-colors"
                >
                  Garantía Sanitaria y Contrato
                </Link>
              </li>
              <li>
                <Link
                  href="/#faqs"
                  className="text-muted hover:text-gold-light transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-muted hover:text-gold-light transition-colors"
                >
                  Contacto y Ubicación
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Associations & Standards */}
          <div>
            <h3 className="text-xs uppercase tracking-luxury text-gold-light font-semibold mb-4">
              Acreditaciones
            </h3>
            <ul className="space-y-3 text-xs text-muted">
              {catteryConfig.associations.map((assoc) => (
                <li key={assoc.shortName} className="p-2.5 bg-noir border border-noir-line rounded-none">
                  <div className="font-semibold text-bone">{assoc.name} ({assoc.shortName})</div>
                  <div className="text-[11px] text-muted mt-0.5">{assoc.description}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h3 className="text-xs uppercase tracking-luxury text-gold-light font-semibold mb-4">
              Atención Exclusiva
            </h3>
            <div className="space-y-2.5 text-sm text-muted">
              <p>
                <strong className="text-bone block text-xs uppercase tracking-wider">Ubicación:</strong>
                {catteryConfig.location.city}, {catteryConfig.location.country}
              </p>
              <p>
                <strong className="text-bone block text-xs uppercase tracking-wider">Teléfono / WhatsApp:</strong>
                <a
                  href={`https://wa.me/${catteryConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-light hover:underline"
                >
                  {catteryConfig.contact.phoneFormatted}
                </a>
              </p>
              <p>
                <strong className="text-bone block text-xs uppercase tracking-wider">Correo:</strong>
                <a
                  href={`mailto:${catteryConfig.contact.email}`}
                  className="hover:text-gold-light transition-colors"
                >
                  {catteryConfig.contact.email}
                </a>
              </p>
              <p className="text-xs text-[#8E8B85] pt-1">
                {catteryConfig.contact.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Ethical commitment banner */}
        <div className="p-4 sm:p-5 bg-noir border border-noir-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
            <span>
              <strong>Compromiso Ético Felino:</strong> No criamos de forma masiva. Cada camada es planificada rigurosamente priorizando la salud y el bienestar de los reproductores.
            </span>
          </div>
          <div className="flex items-center space-x-1 text-gold-light shrink-0">
            <Heart className="w-4 h-4 text-gold fill-gold/20" />
            <span>Crianza con Amor y Respeto</span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-noir-line/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-4">
          <p>© {currentYear} {catteryConfig.legalName}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center space-x-6 text-xs">
            <Link href="/aviso-legal" className="hover:text-gold-light transition-colors">Aviso Legal</Link>
            <Link href="/politica-privacidad" className="hover:text-gold-light transition-colors">Política de Privacidad</Link>
            <Link href="/condiciones-reserva" className="hover:text-gold-light transition-colors">Condiciones de Reserva</Link>
            <Link href="/politica-cookies" className="hover:text-gold-light transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
