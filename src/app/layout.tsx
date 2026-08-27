import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { WhatsAppFloating } from "@/components/common/WhatsAppFloating";
import { NoiseOverlay } from "@/components/common/NoiseOverlay";
import { getCatteryJsonLd } from "@/lib/jsonld";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Imperium Persians | Criadero Exclusivo de Gatos Persas de Pedigrí",
  description:
    "Criadero especializado en gatos persas de alta pureza genética en Madrid, España. Ejemplares Chinchilla Silver, Golden Shaded y Bicolor 100% libres de PKD por ADN. Reserva tu gatito con contrato y garantía.",
  keywords: [
    "criadero gatos persas",
    "comprar gato persa con pedigri",
    "gato persa chinchilla madrid",
    "persa golden shaded españa",
    "criadero persas etico",
    "gatitos persas libres de pkd",
  ],
  authors: [{ name: "Imperium Persians" }],
  creator: "Imperium Persians",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://imperiumpersians.com",
    siteName: "Imperium Persians",
    title: "Imperium Persians | Criadero Exclusivo de Gatos Persas",
    description:
      "Belleza aristocrática, salud genética certificada y temperamento inigualable. Conoce nuestros gatitos persas disponibles.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Gato Persa Chinchilla de Imperium Persians",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imperium Persians | Criadero de Gatos Persas de Pedigrí",
    description: "Crianza selecta y ética de gatos persas. Salud garantizada por ADN.",
    images: ["https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://imperiumpersians.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getCatteryJsonLd();

  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-noir text-bone antialiased selection:bg-gold/30 selection:text-gold-light">
        <NoiseOverlay />
        <Header />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
