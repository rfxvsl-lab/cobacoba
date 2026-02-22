"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactSchema } from "@/lib/validation/contactSchema";
import { Button } from "@/components/ui/Button";

type ContactInput = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { register, handleSubmit, reset } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (values: ContactInput) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input className="glass w-full rounded-xl px-4 py-3" placeholder="Nama" {...register("name")} />
      <input className="glass w-full rounded-xl px-4 py-3" placeholder="Email" {...register("email")} />
      <textarea className="glass h-28 w-full rounded-xl px-4 py-3" placeholder="Pesan" {...register("message")} />
      <Button type="submit">Kirim</Button>
    </form>
  );
}
