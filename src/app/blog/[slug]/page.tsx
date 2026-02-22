import { notFound } from "next/navigation";
import { postUseCases } from "@/use-cases/posts/postUseCases";

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await postUseCases.detailBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="glass rounded-2xl p-8">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-6 whitespace-pre-line text-light/90">{post.content}</p>
    </article>
  );
}
