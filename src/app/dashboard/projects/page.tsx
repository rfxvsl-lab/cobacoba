import { requireRole } from "@/lib/auth/authHelper";
import { projectUseCases } from "@/use-cases/projects/projectUseCases";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectForm } from "@/components/forms/ProjectForm";

export default async function DashboardProjectsPage() {
  await requireRole("editor");
  const projects = await projectUseCases.listAll();

  return (
    <section className="space-y-6">
      <SectionHeader title="CRUD Projects" subtitle="Kelola portfolio proyek perusahaan." />
      <Card>
        <ProjectForm />
      </Card>
      <div className="space-y-3">
        {projects.map((project: any) => (
          <Card key={project.id}>
            <p className="font-semibold">{project.name}</p>
            <p className="text-sm text-muted">/{project.slug} • featured: {project.is_featured ? "yes" : "no"}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
