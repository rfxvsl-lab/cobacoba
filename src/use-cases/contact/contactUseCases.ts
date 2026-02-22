import { createRouteSupabase } from "@/lib/supabase/serverSupabase";

export const contactUseCases = {
  async create(payload: { name: string; email: string; message: string }) {
    const supabase = createRouteSupabase();
    return supabase.from("contacts").insert(payload);
  }
};
