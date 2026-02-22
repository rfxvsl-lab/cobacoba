import { createServerSupabase } from "@/lib/supabase/serverSupabase";

export const postRepository = {
  async listPublished() {
    const supabase = createServerSupabase();
    const { data } = await supabase
      .from("posts")
      .select("id,title,slug,excerpt,content,status,cover_image,author_id,created_at")
      .eq("status", "published")
      .order("created_at", { ascending: false });

    return data ?? [];
  },
  async listAll() {
    const supabase = createServerSupabase();
    const { data } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
    return data ?? [];
  },
  async getBySlug(slug: string) {
    const supabase = createServerSupabase();
    const { data } = await supabase.from("posts").select("*").eq("slug", slug).single();
    return data;
  }
};
