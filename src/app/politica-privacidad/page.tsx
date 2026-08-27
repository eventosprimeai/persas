import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { catteryConfig } from "@/data/cattery";

export const metadata: Metadata = {
  title: `Política de Privacidad | ${catteryConfig.name}`,
  description: "Cómo tratamos, protegemos y utilizamos tus datos personales en Imperium Persians, conforme a la Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador.",
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalLayout
      title="Política de Privacidad"
      updatedAt="27 de agosto de 2026"
      breadcrumbLabel="Política de Privacidad"
    >
      <LegalSection title="1. Responsable del Tratamiento">
        <ul>
          <li><strong>Responsable:</strong> {catteryConfig.legalName}</li>
          <li><strong>RUC:</strong> [[DATO Número de RUC de la empresa]]</li>
          <li><strong>Domicilio:</strong> [[DATO Domicilio completo]], {catteryConfig.location.city}, {catteryConfig.location.country}</li>
          <li><strong>Correo electrónico de contacto:</strong> {catteryConfig.contact.email}</li>
        </ul>
        <p>
          Este sitio cumple con lo establecido en la Ley Orgánica de Protección de Datos
          Personales (LOPDP) del Ecuador.
        </p>
      </LegalSection>

      <LegalSection title="2. Datos que Recopilamos">
        <p>
          A través de los formularios de contacto y reserva del Sitio Web recopilamos los
          siguientes datos, siempre facilitados voluntariamente por el usuario:
        </p>
        <ul>
          <li>Nombre completo.</li>
          <li>Correo electrónico y número de teléfono.</li>
          <li>Contenido del mensaje o consulta enviada.</li>
          <li>Preferencias sobre el gatito de interés (cuando aplica al formulario de reserva).</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Finalidad del Tratamiento">
        <ul>
          <li>Atender y responder a las consultas realizadas a través de los formularios.</li>
          <li>Gestionar solicitudes de reserva de gatitos y comunicarnos sobre su estado.</li>
          <li>Enviar información relevante sobre disponibilidad cuando el usuario lo haya solicitado expresamente.</li>
        </ul>
        <p>No utilizamos los datos para fines distintos a los aquí descritos ni los cedemos a terceros ajenos a la gestión del propio servicio, salvo obligación legal.</p>
      </LegalSection>

      <LegalSection title="4. Legitimación">
        <p>
          La base legal para el tratamiento de tus datos es el consentimiento expreso,
          libre, específico e informado que otorgas al marcar la casilla de aceptación en
          nuestros formularios, conforme a la Ley Orgánica de Protección de Datos
          Personales (LOPDP) del Ecuador.
        </p>
      </LegalSection>

      <LegalSection title="5. Conservación de los Datos">
        <p>
          Los datos personales se conservarán mientras se mantenga la relación con el
          usuario (consulta o proceso de reserva) y, posteriormente, durante los plazos
          legalmente exigibles para atender eventuales responsabilidades.
        </p>
      </LegalSection>

      <LegalSection title="6. Destinatarios y Encargados del Tratamiento">
        <p>
          Tus datos podrán ser tratados por proveedores tecnológicos que prestan servicios
          de alojamiento web y mensajería (por ejemplo, WhatsApp Business, propiedad de
          Meta Platforms), quienes actúan como encargados del tratamiento bajo contrato,
          conforme a lo dispuesto en la Ley Orgánica de Protección de Datos Personales
          (LOPDP) del Ecuador.
        </p>
      </LegalSection>

      <LegalSection title="7. Derechos del Usuario">
        <p>
          Puedes ejercer en cualquier momento tus derechos de acceso, rectificación,
          actualización, eliminación, oposición y portabilidad de tus datos personales,
          escribiendo a{" "}
          <a href={`mailto:${catteryConfig.contact.email}`}>{catteryConfig.contact.email}</a>{" "}
          adjuntando copia de un documento que acredite tu identidad. Asimismo, tienes
          derecho a presentar una reclamación ante la Superintendencia de Protección de
          Datos Personales del Ecuador.
        </p>
      </LegalSection>

      <LegalSection title="8. Seguridad">
        <p>
          Adoptamos las medidas técnicas y organizativas necesarias para garantizar la
          seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o
          acceso no autorizado.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
