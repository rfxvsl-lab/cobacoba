import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contactSchema";
import { contactUseCases } from "@/use-cases/contact/contactUseCases";

export async function POST(request: Request) {
  const payload = contactSchema.parse(await request.json());
  const { error } = await contactUseCases.create(payload);

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true, message: "Pesan berhasil dikirim" });
}
