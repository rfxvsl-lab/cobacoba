import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(4),
  slug: z.string().min(4),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  status: z.enum(["draft", "published"]),
  cover_image: z.string().url().optional().nullable()
});
