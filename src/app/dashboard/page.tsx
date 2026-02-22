import Link from "next/link";
import { requireRole } from "@/lib/auth/authHelper";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LogoutButton } from "@/components/forms/LogoutButton";

export default async function DashboardPage() {
  const { role } = await requireRole("viewer");

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <SectionHeader title="Admin Panel" subtitle={`Role aktif: ${role}`} />
        <LogoutButton />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card><Link href="/dashboard/posts">Kelola Blog Posts</Link></Card>
        <Card><Link href="/dashboard/projects">Kelola Portfolio Projects</Link></Card>
        <Card><Link href="/dashboard/users">Kelola User & Role</Link></Card>
      </div>
    </section>
  );
}
