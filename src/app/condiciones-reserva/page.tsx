import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { catteryConfig } from "@/data/cattery";

export const metadata: Metadata = {
  title: `Condiciones de Reserva | ${catteryConfig.name}`,
  description: "Términos y condiciones aplicables a la reserva, señal, entrega y garantía sanitaria de los gatitos de Imperium Persians.",
  robots: { index: true, follow: true },
};

export default function CondicionesReservaPage() {
  return (
    <LegalLayout
      title="Condiciones de Reserva"
      updatedAt="27 de agosto de 2026"
      breadcrumbLabel="Condiciones de Reserva"
    >
      <LegalSection title="1. Objeto">
        <p>
          Las presentes condiciones regulan el proceso de reserva y entrega de los
          ejemplares de gato persa ofrecidos por {catteryConfig.legalName} a través del
          Sitio Web, WhatsApp o correo electrónico, y son aceptadas por el cliente en el
          momento de formalizar cualquier solicitud de reserva.
        </p>
      </LegalSection>

      <LegalSection title="2. Proceso de Reserva">
        <p>La reserva de un gatito se formaliza siguiendo estos pasos:</p>
        <ul>
          <li>Contacto inicial y videollamada de presentación del ejemplar y sus progenitores.</li>
          <li>Confirmación por escrito (correo electrónico o WhatsApp) del ejemplar seleccionado.</li>
          <li>Abono de una señal del 30% del precio total para bloquear la reserva.</li>
          <li>Firma del contrato de compraventa antes de la entrega definitiva.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Señal y Forma de Pago">
        <p>
          La señal abonada tiene carácter de arras confirmatorias y se descuenta del precio
          final. El importe restante se abona en el momento de la entrega del gatito, salvo
          acuerdo distinto reflejado por escrito. Métodos de pago aceptados:{" "}
          [[DATO Métodos de pago aceptados, ej. transferencia bancaria]].
        </p>
      </LegalSection>

      <LegalSection title="4. Política de Cancelación">
        <p>
          En caso de desistimiento por parte del cliente una vez abonada la señal, esta no
          será reembolsable, salvo que la cancelación se deba a causas imputables a{" "}
          {catteryConfig.legalName} (por ejemplo, incidencia sanitaria del ejemplar), en
          cuyo caso se devolverá el importe íntegro o se ofrecerá un ejemplar alternativo
          de igual valor.
        </p>
      </LegalSection>

      <LegalSection title="5. Edad y Condiciones de Entrega">
        <p>
          Los gatitos se entregan a partir de las 14 semanas de edad, con pauta de
          primovacunación completa, identificación por microchip, pasaporte europeo para
          mascotas y certificado de pedigrí. La entrega se realiza en mano dentro del área
          de cobertura indicada en la sección de Contacto, o mediante transporte
          especializado tipo &quot;pet-nanny&quot; con coste adicional a cargo del cliente.
        </p>
      </LegalSection>

      <LegalSection title="6. Garantía Sanitaria y Genética">
        <p>
          Cada ejemplar se entrega amparado por las garantías descritas en la sección
          &quot;Garantía de Salud&quot; del Sitio Web, incluyendo cobertura genética de por vida
          frente a PKD y PRA, y cobertura vírica y congénita de 2 años conforme a lo
          estipulado en el contrato de compraventa individual, documento que prevalece
          sobre esta información general en caso de discrepancia.
        </p>
      </LegalSection>

      <LegalSection title="7. Esterilización">
        <p>
          Los ejemplares vendidos como mascota de compañía se entregan con compromiso
          contractual de esterilización antes del primer año de vida, salvo que se acuerde
          expresamente lo contrario para ejemplares destinados a cría o exposición.
        </p>
      </LegalSection>

      <LegalSection title="8. Legislación Aplicable">
        <p>
          Estas condiciones se rigen por la legislación española en materia de protección
          animal y de consumidores. Cualquier controversia se someterá a los Juzgados y
          Tribunales de [[DATO Ciudad de jurisdicción]], sin perjuicio del fuero que
          corresponda al consumidor conforme a la normativa vigente.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
