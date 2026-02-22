import { NextResponse } from "next/server";
import { createRouteSupabase } from "@/lib/supabase/serverSupabase";
import { hasRole } from "@/lib/auth/roles";
import { Role } from "@/types";

export async function guardRoute(minimumRole: Role) {
  const supabase = createRouteSupabase();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  const role = (profile?.role ?? "viewer") as Role;
  if (!hasRole(role, minimumRole)) {
    return { error: NextResponse.json({ error: "Forbidden" }, { status: 403 }) };
  }

  return { supabase, user, role };
}
