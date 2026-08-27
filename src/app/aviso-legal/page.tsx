import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { catteryConfig } from "@/data/cattery";

export const metadata: Metadata = {
  title: `Aviso Legal | ${catteryConfig.name}`,
  description: "Información legal, identificación del titular y condiciones generales de uso del sitio web de Imperium Persians.",
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso Legal" updatedAt="27 de agosto de 2026" breadcrumbLabel="Aviso Legal">
      <LegalSection title="1. Datos Identificativos del Titular">
        <p>
          En cumplimiento del deber de información al consumidor establecido en la Ley
          Orgánica de Defensa del Consumidor y la Ley Orgánica de Comercio Electrónico,
          Firmas y Mensajes de Datos del Ecuador, se informa a los usuarios de los
          siguientes datos:
        </p>
        <ul>
          <li><strong>Titular:</strong> {catteryConfig.legalName}</li>
          <li><strong>Nombre comercial:</strong> {catteryConfig.name}</li>
          <li><strong>RUC:</strong> [[DATO Número de RUC de la empresa]]</li>
          <li><strong>Domicilio:</strong> [[DATO Domicilio completo]], {catteryConfig.location.city}, {catteryConfig.location.country}</li>
          <li><strong>Correo electrónico:</strong> {catteryConfig.contact.email}</li>
          <li><strong>Teléfono:</strong> {catteryConfig.contact.phoneFormatted}</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Objeto y Ámbito de Aplicación">
        <p>
          El presente Aviso Legal regula el uso del sitio web{" "}
          <strong>imperiumpersians.com</strong>{" "}
          (en adelante, el &quot;Sitio Web&quot;), del que es titular {catteryConfig.legalName}. La
          navegación por el Sitio Web atribuye la condición de usuario e implica la
          aceptación plena de todas las cláusulas del presente Aviso Legal.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de Uso">
        <p>
          El usuario se compromete a hacer un uso adecuado y lícito del Sitio Web, así como
          de los contenidos y servicios que se ofrecen, de conformidad con la legislación
          vigente, la moral y el orden público. Queda prohibido el uso del Sitio Web con
          fines ilícitos, lesivos de los derechos de terceros, o que de cualquier forma
          pueda dañar, inutilizar o sobrecargar el Sitio Web.
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad Intelectual e Industrial">
        <p>
          Todos los contenidos del Sitio Web (textos, fotografías, gráficos, imágenes,
          iconos, tecnología, software, diseño gráfico y códigos fuente) son propiedad de{" "}
          {catteryConfig.legalName} o de terceros que han autorizado su uso, y están
          protegidos por la normativa de propiedad intelectual e industrial. Queda
          prohibida su reproducción, distribución, comunicación pública o transformación
          total o parcial sin autorización expresa y por escrito del titular.
        </p>
      </LegalSection>

      <LegalSection title="5. Exclusión de Garantías y Responsabilidad">
        <p>
          {catteryConfig.legalName} no garantiza la disponibilidad y continuidad ininterrumpida
          del funcionamiento del Sitio Web. La información sobre disponibilidad, precios y
          características de los ejemplares tiene carácter orientativo y puede ser
          actualizada sin previo aviso hasta la formalización de un contrato de reserva.
        </p>
      </LegalSection>

      <LegalSection title="6. Enlaces a Terceros">
        <p>
          El Sitio Web puede contener enlaces a sitios de terceros (redes sociales,
          WhatsApp). {catteryConfig.legalName} no asume responsabilidad alguna por el
          contenido, políticas de privacidad o prácticas de dichos sitios externos.
        </p>
      </LegalSection>

      <LegalSection title="7. Legislación Aplicable y Jurisdicción">
        <p>
          Las presentes condiciones se rigen por la legislación de la República del
          Ecuador. Para cualquier controversia derivada del acceso o uso del Sitio Web, las
          partes se someten a los jueces y tribunales competentes de{" "}
          [[DATO Ciudad de jurisdicción, ej. Quito]], salvo que la normativa de defensa del
          consumidor establezca un fuero distinto de carácter imperativo.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
