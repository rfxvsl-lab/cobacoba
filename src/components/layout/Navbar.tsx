import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-light">CobaCorp</Link>
        <div className="flex gap-5 text-sm text-muted">
          <Link href="/blog">Blog</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/auth/login">Login</Link>
        </div>
      </nav>
    </header>
  );
}
