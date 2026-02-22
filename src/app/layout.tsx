import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { GradientMesh } from "@/components/layout/GradientMesh";

export const metadata: Metadata = {
  title: "CobaCorp Enterprise",
  description: "Enterprise website with Next.js + Supabase"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <GradientMesh />
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
