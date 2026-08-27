import { z } from "zod";

export const reservationSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "El nombre completo debe tener al menos 3 caracteres." })
    .max(80, { message: "Nombre demasiado largo." }),
  email: z
    .string()
    .email({ message: "Por favor, introduce un correo electrónico válido." }),
  phone: z
    .string()
    .min(8, { message: "Introduce un número de teléfono o WhatsApp válido." })
    .max(20, { message: "Número demasiado largo." }),
  city: z
    .string()
    .min(2, { message: "Indica tu ciudad de residencia." }),
  kittenId: z.string().optional(),
  kittenName: z.string().optional(),
  experience: z.enum(["primera_vez", "experiencia_gatos", "experiencia_persas"], {
    errorMap: () => ({ message: "Selecciona tu nivel de experiencia." }),
  }),
  hasOtherPets: z.enum(["si", "no"], {
    errorMap: () => ({ message: "Indica si convives con otras mascotas." }),
  }),
  homeType: z.enum(["piso", "casa_con_jardin", "atico"], {
    errorMap: () => ({ message: "Selecciona el tipo de vivienda." }),
  }),
  message: z
    .string()
    .min(15, { message: "Cuéntanos brevemente sobre el hogar que ofrecerás al gatito (mínimo 15 caracteres)." })
    .max(800, { message: "El mensaje no debe superar los 800 caracteres." }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar las condiciones de reserva y política de privacidad.",
  }),
});

export type ReservationFormValues = z.infer<typeof reservationSchema>;

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "El nombre completo debe tener al menos 3 caracteres." }),
  email: z
    .string()
    .email({ message: "Introduce un correo electrónico válido." }),
  phone: z
    .string()
    .min(8, { message: "Introduce un teléfono de contacto." }),
  subject: z
    .string()
    .min(4, { message: "Especifica el motivo de tu consulta." }),
  message: z
    .string()
    .min(15, { message: "Por favor escribe tu consulta (mínimo 15 caracteres)." }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad.",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
