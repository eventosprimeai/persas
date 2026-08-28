import { CatteryConfig, Testimonial } from "@/types";

export const catteryConfig: CatteryConfig = {
  name: "PERSIAN´S",
  legalName: "PERSIAN´S Cattery",
  tagline: "Crianza selecta y ética de gatos persas de alta pureza genética",
  founderName: "Elena V. de Montellano",
  experienceYears: 12,
  littersCount: 38,
  location: {
    city: "[[DATO Ciudad, ej. Quito]]",
    state: "[[DATO Provincia]]",
    country: "Ecuador",
    addressNote: "Hogar privado de crianza familiar (visitas concertadas exclusivamente tras videollamada previa)",
    shippingInfo: "Entrega personalizada en mano en tu ciudad, o mediante transporte especializado pet-nanny con protocolo de bioseguridad a Quito, Guayaquil, Cuenca y demás ciudades del Ecuador.",
  },
  contact: {
    phoneFormatted: "+593 96 999 7871",
    whatsappNumber: "593969997871",
    whatsappDefaultMessage: "Hola PERSIAN´S, me gustaría solicitar información sobre la disponibilidad de gatitos persas y el proceso de reserva.",
    email: "adopciones@imperiumpersians.com",
    instagram: "https://instagram.com/imperiumpersians",
    facebook: "https://facebook.com/imperiumpersians",
    hours: "Lunes a Sábado: 10:00 – 20:00 (Atención personalizada)",
  },
  associations: [
    {
      name: "World Cat Federation",
      shortName: "WCF",
      description: "Criadero registrado oficial con afijo internacional nº [[DATO Afijo WCF]].",
    },
    {
      name: "The International Cat Association",
      shortName: "TICA",
      description: "Miembros activos comprometidos con los estándares morfológicos y éticos más rigurosos.",
    },
    {
      name: "Asociación Felina del Ecuador",
      shortName: "AFE",
      description: "Certificación de bienestar animal y control genético avalado a nivel nacional. Afijo [[DATO Nº de registro nacional]].",
    },
  ],
  guarantees: [
    {
      title: "Garantía Genética de por Vida",
      period: "De por vida",
      description: "Padres testados 100% negativos por ADN para Enfermedad Poliquística Renal (PKD), Atrofia Progresiva de Retina (PRA) y anomalías hereditarias.",
    },
    {
      title: "Garantía Sanitaria Vírica y Congénita",
      period: "2 años por contrato",
      description: "Cobertura contractual total frente a patologías víricas (FIV, FeLV, PIF) y cualquier defecto genético o congénito.",
    },
    {
      title: "Acompañamiento y Asesoría Vitalicia",
      period: "Permanente",
      description: "Asesoramiento nutricional, de cepillado del manto, higiene lagrimal y salud veterinaria durante toda la vida de tu persa.",
    },
  ],
};

export const adoptionSteps = [
  {
    step: "01",
    title: "Contacto y Perfil de Familia",
    description: "Completas el formulario o nos escribes por WhatsApp para conocer el estilo de vida de tu hogar y tus preferencias de manto, carácter y sexo.",
  },
  {
    step: "02",
    title: "Videollamada y Selección",
    description: "Realizamos una videollamada privada en directo para que conozcas al gatito en su entorno, a sus progenitores y resolvamos todas tus dudas.",
  },
  {
    step: "03",
    title: "Contrato y Reserva Formal",
    description: "Formalizamos el contrato de reserva con número de microchip asignado y señal del 30%, garantizando la exclusividad de tu ejemplar.",
  },
  {
    step: "04",
    title: "Entrega con Kit Premium",
    description: "Cumplidas las 14 semanas (con primovacunación completa, chip, pasaporte y pedigree), te entregamos al gatito en mano junto a su ajuar de bienvenida.",
  },
];

export const trustPoints = [
  {
    id: "pedigree",
    title: "Pedigrí Oficial Registrado",
    subtitle: "Árbol genealógico de 5 generaciones con múltiples campeones internacionales. Así distingues un persa auténtico de un mestizo.",
  },
  {
    id: "real-photos",
    title: "Fotos y Video 100% Reales",
    subtitle: "El gatito que compras es exactamente el que ves en las fotos y en tu videollamada, no una imagen genérica de catálogo.",
  },
  {
    id: "health",
    title: "100% Libres de PKD & FIV/FeLV",
    subtitle: "Certificados genéticos por laboratorio de referencia internacional (ADN).",
  },
  {
    id: "legal",
    title: "Precio Claro y Contrato con Garantía",
    subtitle: "Sin precios ocultos ni letra pequeña: sabes cuánto pagas y qué cubre tu garantía desde el primer mensaje.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    family: "Carolina M.",
    city: "Quito",
    kittenName: "Celeste Argent",
    variety: "Persa Chinchilla Plateado",
    quote: "Antes de contactarlos ya me habían estafado una vez con un 'persa' que resultó ser mestizo. Aquí pedí videollamada antes de pagar nada y todo coincidía con las fotos: la gata, el pedigrí, el precio. Celeste es de una belleza plateada hipnótica, con esos ojos verde esmeralda, y una dulzura infinita.",
    year: "2026",
    photo: "/images/kittens/celeste-argent/cover.webp",
  },
  {
    id: "test-2",
    family: "Carlos y Beatriz Mendoza",
    city: "Guayaquil",
    kittenName: "Rafael Sunburst",
    variety: "Persa Bicolor Rojo y Blanco",
    quote: "La atención personalizada y el nivel de cuidado se nota desde el primer mensaje por WhatsApp. Rafael llegó a Guayaquil perfectamente adaptado al arenero, cariñoso y con su manto rojo y blanco impecablemente delimitado. El kit de bienvenida fue un detalle digno de alta gama.",
    year: "2026",
    photo: "/images/kittens/rafael-sunburst/cover.webp",
  },
  {
    id: "test-3",
    family: "Victoria Hamilton",
    city: "Cuenca",
    kittenName: "Elias Zafiro",
    variety: "Persa Himalaya",
    quote: "La entrega con protocolo pet-nanny hasta Cuenca fue impecable. Es mi tercer gato persa y sin duda el linaje de PERSIAN'S destaca por salud respiratoria, ojos limpios y un pelaje denso y sedoso. Los ojos azul zafiro de Elias son tan intensos en persona como en las fotos — nada que ver con lo que vi anunciado en Mercado Libre.",
    year: "2026",
    photo: "/images/kittens/elias-zafiro/cover.webp",
  },
];
