import { NextResponse } from "next/server";
import { createRouteSupabase } from "@/lib/supabase/serverSupabase";

export async function POST() {
  const supabase = createRouteSupabase();
  await supabase.auth.signOut();
  return NextResponse.json({ ok: true });
}
