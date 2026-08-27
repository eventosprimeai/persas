import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { catteryConfig } from "@/data/cattery";

export const metadata: Metadata = {
  title: `Política de Cookies | ${catteryConfig.name}`,
  description: "Información sobre el uso de cookies técnicas en el sitio web de Imperium Persians.",
  robots: { index: true, follow: true },
};

export default function PoliticaCookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies"
      updatedAt="27 de agosto de 2026"
      breadcrumbLabel="Política de Cookies"
    >
      <LegalSection title="1. ¿Qué son las Cookies?">
        <p>
          Las cookies son pequeños archivos de texto que un sitio web almacena en el
          navegador del usuario para recordar información sobre su visita. Este Sitio Web,
          titularidad de {catteryConfig.legalName}, utiliza únicamente cookies técnicas
          estrictamente necesarias para su correcto funcionamiento.
        </p>
      </LegalSection>

      <LegalSection title="2. Cookies que Utilizamos">
        <ul>
          <li>
            <strong>Cookies técnicas propias:</strong> necesarias para la navegación básica
            y el funcionamiento de los formularios de contacto y reserva. No requieren
            consentimiento conforme al artículo 22.2 de la LSSI-CE.
          </li>
        </ul>
        <p>
          Actualmente el Sitio Web no utiliza cookies de analítica, publicidad ni de
          terceros con fines de seguimiento. Si en el futuro se incorporan herramientas de
          este tipo (por ejemplo, analítica de tráfico), se actualizará esta política y se
          solicitará el consentimiento previo del usuario mediante un panel específico.
        </p>
      </LegalSection>

      <LegalSection title="3. Gestión de Cookies">
        <p>
          El usuario puede configurar su navegador para aceptar, rechazar o eliminar las
          cookies almacenadas, así como para ser avisado antes de que se instalen. A
          continuación, algunos enlaces de ayuda de los navegadores más comunes:
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Más Información">
        <p>
          Para cualquier duda sobre esta Política de Cookies, puedes escribirnos a{" "}
          <a href={`mailto:${catteryConfig.contact.email}`}>{catteryConfig.contact.email}</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
