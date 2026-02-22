import { createServerSupabase } from "@/lib/supabase/serverSupabase";

export const userUseCases = {
  async listUsers() {
    const supabase = createServerSupabase();
    const { data } = await supabase.from("profiles").select("id,email,full_name,role");
    return data ?? [];
  }
};
