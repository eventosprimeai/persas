import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { GoldFillet } from "@/components/common/GoldFillet";

interface LegalLayoutProps {
  title: string;
  updatedAt: string;
  breadcrumbLabel: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, updatedAt, breadcrumbLabel, children }: LegalLayoutProps) {
  return (
    <div className="pt-28 pb-24 md:pb-32 bg-noir min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-xs uppercase tracking-luxury text-muted mb-8">
          <Link href="/" className="hover:text-gold-light transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3 h-3 text-gold" />
          <span className="text-gold-light font-medium">{breadcrumbLabel}</span>
        </nav>

        <div className="mb-10">
          <h1 className="font-cormorant text-4xl sm:text-5xl font-bold text-bone tracking-tight leading-[1.1]">
            {title}
          </h1>
          <p className="mt-3 text-xs uppercase tracking-luxury text-muted">
            Última actualización: {updatedAt}
          </p>
        </div>

        <GoldFillet />

        <div className="legal-prose mt-10 space-y-8 text-sm text-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-cormorant text-xl sm:text-2xl font-semibold text-bone">{title}</h2>
      <div className="space-y-3 [&_a]:text-gold-light [&_a]:hover:underline [&_strong]:text-bone [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  );
}
