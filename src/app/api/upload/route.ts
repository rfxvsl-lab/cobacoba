import { NextResponse } from "next/server";
import { createRouteSupabase } from "@/lib/supabase/serverSupabase";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  const supabase = createRouteSupabase();
  const path = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage.from("assets").upload(path, file, { upsert: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  const { data } = supabase.storage.from("assets").getPublicUrl(path);
  return NextResponse.json({ url: data.publicUrl });
}
