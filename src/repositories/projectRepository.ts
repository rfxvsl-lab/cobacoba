import { createServerSupabase } from "@/lib/supabase/serverSupabase";

export const projectRepository = {
  async listAll() {
    const supabase = createServerSupabase();
    const { data } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
    return data ?? [];
  },
  async listFeatured() {
    const supabase = createServerSupabase();
    const { data } = await supabase.from("projects").select("*").eq("is_featured", true).limit(6);
    return data ?? [];
  }
};
