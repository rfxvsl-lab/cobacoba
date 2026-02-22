export type Role = "admin" | "editor" | "viewer";

export interface AppUser {
  id: string;
  email: string;
  full_name: string | null;
  role: Role;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: "draft" | "published";
  cover_image: string | null;
  author_id: string;
  created_at: string;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  summary: string;
  description: string;
  image_url: string | null;
  repo_url: string | null;
  is_featured: boolean;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}
