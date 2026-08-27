import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, currency: string = "USD"): string {
  try {
    return new Intl.NumberFormat("es-EC", {
      style: "currency",
      currency: currency === "EUR" ? "EUR" : currency === "MXN" ? "MXN" : currency === "COP" ? "COP" : "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${amount} ${currency}`;
  }
}

export function formatBirthDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-EC", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function calculateAge(birthDateStr: string): string {
  const birth = new Date(birthDateStr);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - birth.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(diffDays / 7);
  const months = Math.floor(diffDays / 30.44);

  if (months < 1) {
    return `${weeks} ${weeks === 1 ? "semana" : "semanas"}`;
  }
  if (months < 12) {
    const remainingWeeks = Math.floor((diffDays % 30.44) / 7);
    if (remainingWeeks > 0) {
      return `${months} ${months === 1 ? "mes" : "meses"} y ${remainingWeeks} sem.`;
    }
    return `${months} ${months === 1 ? "mes" : "meses"}`;
  }
  const years = (diffDays / 365).toFixed(1);
  return `${years} años`;
}

export function getWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

export function getKittenWhatsAppMessage(catteryName: string, kittenName: string, variety: string): string {
  return `Hola ${catteryName}, me he enamorado de ${kittenName} (${variety}) que vi en su web. ¿Podrían confirmarme si aún sigue disponible y cómo proceder con la reserva? Muchas gracias.`;
}
