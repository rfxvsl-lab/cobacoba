# CobaCorp Enterprise (Next.js 14 + Supabase)

Website perusahaan enterprise dengan Next.js 14 App Router, TypeScript, Tailwind custom palette biru/hitam/putih, Framer Motion, glassmorphism UI, dan integrasi Supabase lengkap.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript (TSX)
- TailwindCSS custom palette
- Framer Motion
- Supabase (Auth, Postgres, Storage)
- React Hook Form + Zod
- Zustand

## Struktur Folder (Scalable / Clean Architecture)

```text
src/
  app/
    (marketing)/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx
    auth/login/page.tsx
    auth/register/page.tsx
    dashboard/page.tsx
    dashboard/posts/page.tsx
    dashboard/projects/page.tsx
    dashboard/users/page.tsx
    api/
      auth/logout/route.ts
      contact/route.ts
      posts/route.ts
      projects/route.ts
      users/route.ts
      upload/route.ts
  components/
    forms/
    layout/
    ui/
  lib/
    auth/
    stores/
    supabase/
    utils/
    validation/
  repositories/
  use-cases/
  types/
docs/supabase-schema.sql
middleware.ts
```

## Fitur yang Sudah Lengkap
1. Landing page aesthetic dark blue + gradient mesh + glassmorphism.
2. Login / register / logout via Supabase Auth.
3. Multi-role auth (admin, editor, viewer) di helper + middleware route protection.
4. Blog page + dynamic slug page.
5. Admin panel protected route.
6. CRUD posts (draft & publish) via `/api/posts` + admin UI.
7. CRUD projects via `/api/projects` + admin UI.
8. User management (admin only) via `/api/users` + admin UI role selector.
9. Contact form tersimpan ke database (`contacts`).
10. Upload image ke Supabase Storage bucket `assets`.
11. React Hook Form + Zod validation.
12. Zustand state management.

## Setup
1. Copy `.env.local.example` ke `.env.local`.
2. Isi environment Supabase.
3. Jalankan `npm install` lalu `npm run dev`.
4. Jalankan SQL pada `docs/supabase-schema.sql` di Supabase SQL Editor.

## Catatan Supabase
- Buat bucket storage bernama `assets`.
- Tambahkan trigger atau flow provisioning agar user baru otomatis punya baris di tabel `profiles`.
