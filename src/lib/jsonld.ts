import { Kitten } from "@/types";
import { catteryConfig } from "@/data/cattery";
import { faqsData } from "@/data/faqs";

export function getCatteryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://imperiumpersians.com/#cattery",
    name: catteryConfig.name,
    legalName: catteryConfig.legalName,
    description: catteryConfig.tagline,
    url: "https://imperiumpersians.com",
    telephone: catteryConfig.contact.phoneFormatted,
    email: catteryConfig.contact.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: catteryConfig.location.city,
      addressRegion: catteryConfig.location.state,
      addressCountry: catteryConfig.location.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: catteryConfig.founderName,
      jobTitle: "Criadora Principal & Fundadora",
    },
    knowsAbout: [
      "Gatos Persas de Pedigrí",
      "Crianza Felina Ética",
      "Genética Felina PKD Negativo",
      "Persa Chinchilla",
      "Persa Golden Shaded",
    ],
    sameAs: [catteryConfig.contact.instagram, catteryConfig.contact.facebook].filter(Boolean),
  };
}

export function getKittenProductJsonLd(kitten: Kitten) {
  const isAvailable = kitten.status === "Disponible";

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${kitten.name} - ${kitten.variety}`,
    image: kitten.photos.map((p) => p.src),
    description: kitten.longDescription || kitten.description,
    sku: kitten.id,
    mpn: kitten.pedigree.registrationNumber,
    brand: {
      "@type": "Brand",
      name: catteryConfig.name,
    },
    offers: {
      "@type": "Offer",
      url: `https://imperiumpersians.com/gatitos/${kitten.slug}`,
      priceCurrency: kitten.currency,
      price: kitten.price,
      itemCondition: "https://schema.org/NewCondition",
      availability: isAvailable
        ? "https://schema.org/InStock"
        : "https://schema.org/SoldOut",
      seller: {
        "@type": "LocalBusiness",
        name: catteryConfig.name,
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Variedad",
        value: kitten.variety,
      },
      {
        "@type": "PropertyValue",
        name: "Sexo",
        value: kitten.gender,
      },
      {
        "@type": "PropertyValue",
        name: "Color",
        value: kitten.color,
      },
      {
        "@type": "PropertyValue",
        name: "Color de Ojos",
        value: kitten.eyeColor,
      },
      {
        "@type": "PropertyValue",
        name: "Asociación Pedigrí",
        value: kitten.pedigree.association,
      },
    ],
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
