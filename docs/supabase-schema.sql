-- Roles
create type public.app_role as enum ('admin', 'editor', 'viewer');

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  full_name text,
  role public.app_role not null default 'viewer',
  created_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  cover_image text,
  status text not null check (status in ('draft','published')) default 'draft',
  author_id uuid not null references public.profiles(id),
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  summary text not null,
  description text not null,
  image_url text,
  repo_url text,
  is_featured boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.projects enable row level security;
alter table public.contacts enable row level security;

create policy "profiles self read"
  on public.profiles for select
  using (auth.uid() = id);

create policy "posts public read published"
  on public.posts for select
  using (status = 'published');

create policy "contacts insert public"
  on public.contacts for insert
  with check (true);

-- Recommended storage bucket: assets (public read, authenticated write)
