import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Datos de contacto inválidos",
          details: parsed.error.format(),
        },
        { status: 400 }
      );
    }

    const { fullName, email, phone, subject, message } = parsed.data;

    console.log("Nueva consulta general recibida:", {
      fullName,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Tu mensaje ha sido enviado con éxito.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en endpoint /api/contact:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al enviar la consulta." },
      { status: 500 }
    );
  }
}
