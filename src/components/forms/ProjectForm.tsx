"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { projectSchema } from "@/lib/validation/projectSchema";
import { Button } from "@/components/ui/Button";

type ProjectInput = z.infer<typeof projectSchema>;

export function ProjectForm({ onSaved }: { onSaved?: () => void }) {
  const { register, handleSubmit, setValue } = useForm<ProjectInput>({
    resolver: zodResolver(projectSchema),
    defaultValues: { is_featured: false }
  });

  const onUpload = async (file?: File) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    const json = await res.json();
    setValue("image_url", json.url);
  };

  const onSubmit = async (values: ProjectInput) => {
    await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    onSaved?.();
  };

  return (
    <form className="grid gap-3" onSubmit={handleSubmit(onSubmit)}>
      <input className="glass rounded-xl px-3 py-2" placeholder="Project name" {...register("name")} />
      <input className="glass rounded-xl px-3 py-2" placeholder="Slug" {...register("slug")} />
      <textarea className="glass rounded-xl px-3 py-2" placeholder="Summary" {...register("summary")} />
      <textarea className="glass min-h-40 rounded-xl px-3 py-2" placeholder="Description" {...register("description")} />
      <input className="glass rounded-xl px-3 py-2" placeholder="Repository URL" {...register("repo_url")} />
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" {...register("is_featured")} /> Featured</label>
      <input type="file" className="text-sm text-muted" onChange={(e) => onUpload(e.target.files?.[0])} />
      <Button type="submit">Simpan Project</Button>
    </form>
  );
}
