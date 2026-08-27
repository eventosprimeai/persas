# 👑 Imperium Persians — Sitio Web Premium de Criadero de Gatos Persas

Sitio web de ultra-lujo y alta conversión para criadero especializado en gatos persas de pedigrí, construido con **Next.js 15 (App Router)**, **TypeScript** en modo estricto, **Tailwind CSS**, **Framer Motion**, **React Hook Form + Zod** y optimización CRO / SEO.

---

## 🎨 Dirección de Arte — Sistema Noir & Gold

Paleta de lujo estricta:
- `noir` (`#0A0A0B`): Fondo principal con overlay sutil de grano SVG (3.5% opacidad).
- `noir-soft` (`#141416`): Superficies de tarjetas, modales y paneles elevados.
- `noir-line` (`#26262A`): Bordes estructurales ultrafinos.
- `gold` (`#C9A227`): Acento principal, CTAs de alta conversión e iconografía destacada.
- `gold-light` (`#E7D08A`): Texto de alto contraste sobre fondo oscuro, estados hover y destellos.
- `gold-deep` (`#8C6D1F`): Sombras y gradientes dorados.
- `bone` (`#F2EFE7`): Texto principal de lectura y titulares.
- `muted` (`#A3A099`): Metadatos y descripciones secundarias.

**Tipografías**:
- Titulares: **Cormorant Garamond** (Google Fonts).
- Cuerpo & Microcopy: **Inter** (Google Fonts).

---

## 📂 Estructura del Proyecto

```text
persas/
├── public/                    # Archivos estáticos
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Layout raíz con fuentes, NoiseOverlay, Header, Footer y WhatsApp
│   │   ├── page.tsx           # Home completa (10 secciones de alta gama)
│   │   ├── sitemap.ts         # Sitemap dinámico XML para SEO
│   │   ├── robots.ts          # Configuración de rastreo de robots.txt
│   │   ├── not-found.tsx      # Página 404 de diseño
│   │   ├── gatitos/
│   │   │   ├── page.tsx       # Catálogo con filtrado reactivo en cliente
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Ficha individual con galería, linaje y reserva contextual
│   │   ├── contacto/
│   │   │   └── page.tsx       # Contacto directo, WhatsApp y política de visitas
│   │   └── api/
│   │       ├── reserve/       # Endpoint de recepción de reservas con Zod
│   │       └── contact/       # Endpoint de consultas generales
│   ├── components/
│   │   ├── common/            # Header, Footer, GoldFillet, SectionHeading, WhatsAppFloating, NoiseOverlay
│   │   ├── home/              # HeroSection, TrustStrip, FeaturedKittens, BreederStory, AdoptionSteps, HealthGuarantee, MosaicGallery, Testimonials, FAQSection, FinalCTA
│   │   ├── kittens/           # KittenCard, KittenFilter, KittenGallery, KittenParents, ReservationForm
│   │   └── ui/                # Button, Badge
│   ├── data/
│   │   ├── kittens.ts         # Dataset tipado con los 6 gatitos persas y sus progenitores
│   │   ├── cattery.ts         # Configuración del criadero, contacto, garantías y testimonios
│   │   └── faqs.ts            # Preguntas frecuentes exhaustivas
│   ├── lib/
│   │   ├── schemas.ts         # Esquemas de validación Zod
│   │   ├── utils.ts           # Utilidades de formato de moneda, edades y WhatsApp
│   │   └── jsonld.ts          # Generadores de Schema.org (LocalBusiness, Product, FAQPage)
│   └── types/index.ts         # Tipado estricto de TypeScript
├── tailwind.config.ts         # Tokens de diseño y gradientes dorados
└── tsconfig.json
```

---

## 🛠️ Cómo Editar el Catálogo y Personalizar Datos

### 1. Añadir o Modificar Gatitos
Edita el archivo `src/data/kittens.ts`. Cada gatito sigue esta estructura tipada:

```typescript
{
  id: "k-01",
  slug: "nombre-del-gatito",
  name: "Nombre del Ejemplar",
  litterName: "Camada Imperial 'A'",
  variety: "Persa Chinchilla Golden Shaded",
  color: "Golden Shaded (NY 11)",
  eyeColor: "Verde Esmeralda",
  gender: "Macho", // "Macho" | "Hembra"
  birthDate: "2024-11-12", // Formato ISO AAAA-MM-DD
  deliveryDate: "2025-02-28",
  price: 2200,
  currency: "EUR", // "EUR", "USD", "MXN", "COP", etc.
  status: "Disponible", // "Disponible" | "Reservado" | "Entregado"
  description: "Resumen corto para la tarjeta...",
  longDescription: "Descripción completa de morfología y carácter...",
  coverImage: "URL_DE_LA_FOTO_PRINCIPAL",
  photos: [
    { src: "URL_FOTO_1", alt: "Descripción..." },
    { src: "URL_FOTO_2", alt: "Descripción..." }
  ],
  pedigree: {
    association: "WCF / TICA",
    registrationNumber: "WCF-ES-2024-0988A",
    championshipLines: true,
    generationCount: 5,
  },
  parents: {
    sire: { ... }, // Datos y foto del padre
    dam: { ... }   // Datos y foto de la madre
  },
  includedItems: [ ... ] // Ajuar, pasaporte, vacunas, etc.
}
```

### 2. Cambiar Datos de Negocio, Teléfono o Moneda
Edita el archivo `src/data/cattery.ts`:
- **Nombre y Fundador**: `name`, `legalName`, `founderName`.
- **Teléfono y WhatsApp**: `contact.phoneFormatted` y `contact.whatsappNumber` (en formato internacional sin símbolos, ej. `34612345678`).
- **Ubicación y Horarios**: `location.city`, `location.country`, `contact.hours`.

### 3. Preguntas Frecuentes
Edita el archivo `src/data/faqs.ts` para modificar respuestas o añadir nuevas preguntas.

---

## 🚀 Comandos de Ejecución

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en http://localhost:3000
npm run dev

# Compilar para producción (validación TypeScript y bundling estricto)
npm run build

# Iniciar en modo producción
npm run start
```
