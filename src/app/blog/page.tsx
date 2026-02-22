import Link from "next/link";
import { postUseCases } from "@/use-cases/posts/postUseCases";
import { Card } from "@/components/ui/Card";

export default async function BlogPage() {
  const posts = await postUseCases.listPublished();
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Blog</h1>
      {posts.map((post: any) => (
        <Card key={post.id}>
          <Link href={`/blog/${post.slug}`} className="text-xl text-primaryGlow">{post.title}</Link>
          <p className="mt-2 text-muted">{post.excerpt}</p>
        </Card>
      ))}
    </section>
  );
}
