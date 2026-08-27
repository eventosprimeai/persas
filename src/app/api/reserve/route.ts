import { NextResponse } from "next/server";
import { reservationSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Datos de formulario inválidos",
          details: parsed.error.format(),
        },
        { status: 400 }
      );
    }

    const { fullName, email, phone, city, kittenName, experience, hasOtherPets, message } =
      parsed.data;

    // In a production environment, this integrates with Resend / SendGrid / Telegram / CRM
    console.log("Nueva solicitud de reserva de gatito persa:", {
      fullName,
      email,
      phone,
      city,
      kittenName,
      experience,
      hasOtherPets,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Tu solicitud de reserva ha sido recibida correctamente.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en endpoint /api/reserve:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al procesar la reserva." },
      { status: 500 }
    );
  }
}
