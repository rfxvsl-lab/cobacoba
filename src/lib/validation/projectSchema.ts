import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(3),
  slug: z.string().min(3),
  summary: z.string().min(20),
  description: z.string().min(20),
  is_featured: z.boolean().default(false),
  image_url: z.string().url().optional().nullable(),
  repo_url: z.string().url().optional().or(z.literal(""))
});
