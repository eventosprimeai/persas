import { CatteryConfig, Testimonial } from "@/types";

export const catteryConfig: CatteryConfig = {
  name: "Imperium Persians",
  legalName: "Imperium Persians Cattery S.L.",
  tagline: "Crianza selecta y ética de gatos persas de alta pureza genética",
  founderName: "Elena V. de Montellano",
  experienceYears: 12,
  littersCount: 38,
  location: {
    city: "Madrid",
    state: "Comunidad de Madrid",
    country: "España",
    addressNote: "Finca privada de crianza familiar (visitas concertadas exclusivamente tras videollamada previa)",
    shippingInfo: "Entrega personalizada en mano en toda la Península, Islas y principales capitales europeas mediante transporte especializado pet-nanny.",
  },
  contact: {
    phoneFormatted: "+34 612 345 678",
    whatsappNumber: "34612345678",
    whatsappDefaultMessage: "Hola Imperium Persians, me gustaría solicitar información sobre la disponibilidad de gatitos persas y el proceso de reserva.",
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
      name: "Club Felino de España",
      shortName: "CFE",
      description: "Certificación de bienestar animal y control genético avalado.",
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
    subtitle: "Árbol genealógico de 5 generaciones con múltiples campeones internacionales.",
  },
  {
    id: "health",
    title: "100% Libres de PKD & FIV/FeLV",
    subtitle: "Certificados genéticos por laboratorio de referencia internacional (ADN).",
  },
  {
    id: "legal",
    title: "Contrato Legal de Garantía",
    subtitle: "Cláusulas transparentes de sanidad, bienestar y compromiso ético.",
  },
  {
    id: "socialization",
    title: "Socialización en Entorno Hogareño",
    subtitle: "Crianza sin jaulas, integrados en la vida cotidiana con temperamento dulce y equilibrado.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    family: "Familia Gómez-Larrañaga",
    city: "Barcelona",
    kittenName: "Lord Aurelius",
    variety: "Persa Golden Shaded",
    quote: "Buscábamos un criadero con máximas garantías éticas. La transparencia de Elena, las pruebas genéticas y el seguimiento post-entrega marcaron la diferencia. Aurelius es un gato de belleza hipnótica y una dulzura infinita.",
    year: "2024",
    photo: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "test-2",
    family: "Dr. Carlos y Beatriz Mendoza",
    city: "Madrid (La Moraleja)",
    kittenName: "Princesse Geneviève",
    variety: "Persa Silver Shaded",
    quote: "La atención personalizada y el nivel de cuidado se nota desde el primer segundo. Geneviève llegó perfectamente adaptada al arenero, cariñosa y con un manto impecable. El kit de bienvenida fue un detalle digno de alta gama.",
    year: "2024",
    photo: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "test-3",
    family: "Sra. Victoria Hamilton",
    city: "Valencia / Londres",
    kittenName: "Baron Sterling",
    variety: "Persa Smoke",
    quote: "La entrega mediante su pet-nanny fue impecable. Es mi tercer gato persa a lo largo de mi vida y sin duda el linaje de Imperium Persians destaca por salud respiratoria, ojos limpios y un pelaje denso y sedoso.",
    year: "2023",
    photo: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=800&auto=format&fit=crop",
  },
];
