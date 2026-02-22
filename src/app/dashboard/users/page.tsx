import { requireRole } from "@/lib/auth/authHelper";
import { userUseCases } from "@/use-cases/users/userUseCases";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RoleForm } from "@/components/forms/RoleForm";

export default async function DashboardUsersPage() {
  await requireRole("admin");
  const users = await userUseCases.listUsers();

  return (
    <section className="space-y-4">
      <SectionHeader title="User Management" subtitle="Khusus admin: ubah role user." />
      {users.map((user: any) => (
        <Card key={user.id}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p>{user.email}</p>
              <p className="text-sm text-muted">{user.full_name ?? "No Name"}</p>
            </div>
            <RoleForm userId={user.id} role={user.role} />
          </div>
        </Card>
      ))}
    </section>
  );
}
