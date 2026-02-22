"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { postSchema } from "@/lib/validation/postSchema";
import { Button } from "@/components/ui/Button";

type PostInput = z.infer<typeof postSchema>;

interface Props {
  initialValues?: Partial<PostInput>;
  onSaved?: () => void;
}

export function PostForm({ initialValues, onSaved }: Props) {
  const { register, handleSubmit, setValue } = useForm<PostInput>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: initialValues?.title ?? "",
      slug: initialValues?.slug ?? "",
      excerpt: initialValues?.excerpt ?? "",
      content: initialValues?.content ?? "",
      status: initialValues?.status ?? "draft",
      cover_image: initialValues?.cover_image ?? null
    }
  });

  const onUpload = async (file?: File) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    const json = await res.json();
    setValue("cover_image", json.url);
  };

  const onSubmit = async (values: PostInput) => {
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    onSaved?.();
  };

  return (
    <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
      <input className="glass rounded-xl px-3 py-2" placeholder="Title" {...register("title")} />
      <input className="glass rounded-xl px-3 py-2" placeholder="Slug" {...register("slug")} />
      <textarea className="glass rounded-xl px-3 py-2" placeholder="Excerpt" {...register("excerpt")} />
      <textarea className="glass min-h-40 rounded-xl px-3 py-2" placeholder="Content" {...register("content")} />
      <select className="glass rounded-xl px-3 py-2" {...register("status")}>
        <option value="draft">draft</option>
        <option value="published">published</option>
      </select>
      <input type="file" className="text-sm text-muted" onChange={(e) => onUpload(e.target.files?.[0])} />
      <Button type="submit">Simpan Post</Button>
    </form>
  );
}
