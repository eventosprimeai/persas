import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { WhatsAppFloating } from "@/components/common/WhatsAppFloating";
import { ViewKittensFloating } from "@/components/common/ViewKittensFloating";
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
  title: "PERSIAN´S | Gatos Persas con Pedigrí en Ecuador",
  description:
    "Criadero especializado en gatos persas de pedigrí en Ecuador. Fotos y video reales antes de comprar, ejemplares 100% libres de PKD por ADN, precio claro sin sorpresas y entrega segura a Quito, Guayaquil, Cuenca y todo el país.",
  keywords: [
    "gatos persas ecuador",
    "gatos persas en venta ecuador",
    "gatitos persas quito",
    "gatos persas guayaquil",
    "comprar gato persa con pedigri",
    "criadero de gatos persas ecuador",
    "gato persa chinchilla ecuador",
    "gatitos persas libres de pkd",
  ],
  authors: [{ name: "PERSIAN´S" }],
  creator: "PERSIAN´S",
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://imperiumpersians.com",
    siteName: "PERSIAN´S",
    title: "PERSIAN´S | Gatos Persas con Pedigrí en Ecuador",
    description:
      "Fotos y video 100% reales, salud genética certificada y precio claro desde el primer mensaje. Conoce nuestros gatitos persas disponibles en Ecuador.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Gato Persa Chinchilla de PERSIAN´S",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PERSIAN´S | Criadero de Gatos Persas de Pedigrí",
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
        <ViewKittensFloating />
      </body>
    </html>
  );
}
