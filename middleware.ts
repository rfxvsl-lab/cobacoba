import { NextResponse, type NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

const routeRoleMap: Record<string, "admin" | "editor" | "viewer"> = {
  "/dashboard/users": "admin",
  "/dashboard/posts": "editor",
  "/dashboard/projects": "editor",
  "/dashboard": "viewer"
};

const hierarchy = { viewer: 1, editor: 2, admin: 3 };

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data: { user } } = await supabase.auth.getUser();

  if (!req.nextUrl.pathname.startsWith("/dashboard")) return res;
  if (!user) return NextResponse.redirect(new URL("/auth/login", req.url));

  const minRole =
    Object.entries(routeRoleMap).find(([path]) => req.nextUrl.pathname.startsWith(path))?.[1] ?? "viewer";

  const { data } = await supabase.from("profiles").select("role").eq("id", user.id).single();
  const role = (data?.role ?? "viewer") as keyof typeof hierarchy;

  if (hierarchy[role] < hierarchy[minRole]) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/dashboard/:path*"]
};
