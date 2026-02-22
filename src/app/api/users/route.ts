import { NextResponse } from "next/server";
import { guardRoute } from "@/lib/auth/guards";

export async function GET() {
  const access = await guardRoute("admin");
  if (access.error) return access.error;

  const { data, error } = await access.supabase.from("profiles").select("id,email,full_name,role").order("email");
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data);
}

export async function PATCH(request: Request) {
  const access = await guardRoute("admin");
  if (access.error) return access.error;

  const { id, role } = await request.json();
  const { error } = await access.supabase.from("profiles").update({ role }).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true });
}
