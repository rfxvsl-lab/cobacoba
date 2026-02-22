import { redirect } from "next/navigation";
import { createServerSupabase } from "@/lib/supabase/serverSupabase";
import { hasRole } from "@/lib/auth/roles";
import { Role } from "@/types";

export const requireUser = async () => {
  const supabase = createServerSupabase();
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/auth/login");
  return data.user;
};

export const requireRole = async (minimumRole: Role) => {
  const user = await requireUser();
  const supabase = createServerSupabase();

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  const role = (profile?.role ?? "viewer") as Role;

  if (!hasRole(role, minimumRole)) redirect("/");

  return { user, role };
};
