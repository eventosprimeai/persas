export type KittenStatus = "Disponible" | "Reservado" | "Entregado";
export type KittenGender = "Macho" | "Hembra";

export interface ParentInfo {
  name: string;
  titles?: string; // ej. "Gran Campeón Internacional WCF"
  color: string;
  breed: string;
  photo: string;
  origin?: string;
  pkdStatus: "Negativo (ADN)" | "Libre";
}

export interface KittenPhoto {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Kitten {
  id: string;
  slug: string;
  name: string;
  litterName: string;
  variety: string; // ej. "Persa Chinchilla Silver", "Persa Golden Shaded", "Persa Clásico Bicolor"
  color: string;
  eyeColor: string;
  gender: KittenGender;
  birthDate: string; // ISO date string "2024-11-15"
  deliveryDate: string; // ISO date string "2025-02-20"
  price: number;
  currency: string;
  status: KittenStatus;
  isFeatured: boolean;
  temperament: string[];
  description: string;
  longDescription: string;
  coverImage: string;
  photos: KittenPhoto[];
  pedigree: {
    association: string; // ej. "WCF / TICA"
    registrationNumber: string;
    championshipLines: boolean;
    generationCount: number;
  };
  health: {
    vaccinated: boolean;
    dewormed: boolean;
    microchipped: boolean;
    pkdNegative: boolean;
    fivFelvNegative: boolean;
    healthCertificate: boolean;
    neuteredOrSterilizationContract: boolean;
  };
  parents: {
    sire: ParentInfo; // Padre
    dam: ParentInfo;  // Madre
  };
  includedItems: string[];
}

export interface CatteryConfig {
  name: string;
  legalName: string;
  tagline: string;
  founderName: string;
  experienceYears: number;
  littersCount: number;
  location: {
    city: string;
    state?: string;
    country: string;
    addressNote: string;
    shippingInfo: string;
  };
  contact: {
    phoneFormatted: string;
    whatsappNumber: string; // números sin símbolos ej. "34612345678"
    whatsappDefaultMessage: string;
    email: string;
    instagram: string;
    facebook?: string;
    hours: string;
  };
  associations: Array<{
    name: string;
    shortName: string;
    logoUrl?: string;
    description: string;
  }>;
  guarantees: Array<{
    title: string;
    period: string;
    description: string;
  }>;
}

export interface Testimonial {
  id: string;
  family: string;
  city: string;
  kittenName: string;
  variety: string;
  quote: string;
  year: string;
  photo: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "salud" | "adopcion" | "cuidados" | "envio";
}
