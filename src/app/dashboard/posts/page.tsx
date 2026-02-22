import { requireRole } from "@/lib/auth/authHelper";
import { postUseCases } from "@/use-cases/posts/postUseCases";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PostForm } from "@/components/forms/PostForm";

export default async function DashboardPostsPage() {
  await requireRole("editor");
  const posts = await postUseCases.listAll();

  return (
    <section className="space-y-6">
      <SectionHeader title="CRUD Posts" subtitle="Buat draft/publish artikel blog." />
      <Card>
        <PostForm />
      </Card>
      <div className="space-y-3">
        {posts?.map((post: any) => (
          <Card key={post.id}>
            <p className="font-semibold">{post.title}</p>
            <p className="text-sm text-muted">/{post.slug} • {post.status}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
