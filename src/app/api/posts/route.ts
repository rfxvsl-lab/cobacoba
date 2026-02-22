import { NextResponse } from "next/server";
import { postSchema } from "@/lib/validation/postSchema";
import { guardRoute } from "@/lib/auth/guards";

export async function GET() {
  const access = await guardRoute("editor");
  if (access.error) return access.error;

  const { data, error } = await access.supabase.from("posts").select("*").order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const access = await guardRoute("editor");
  if (access.error) return access.error;

  const payload = postSchema.parse(await request.json());
  const { error } = await access.supabase.from("posts").insert({ ...payload, author_id: access.user.id });
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true });
}

export async function PATCH(request: Request) {
  const access = await guardRoute("editor");
  if (access.error) return access.error;

  const { id, ...raw } = await request.json();
  const payload = postSchema.partial().parse(raw);
  const { error } = await access.supabase.from("posts").update(payload).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const access = await guardRoute("editor");
  if (access.error) return access.error;

  const { id } = await request.json();
  const { error } = await access.supabase.from("posts").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true });
}
