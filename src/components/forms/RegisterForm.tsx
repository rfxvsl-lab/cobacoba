"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "@/lib/validation/authSchema";
import { supabaseClient } from "@/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

type RegisterInput = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (values: RegisterInput) => {
    const supabase = supabaseClient();
    await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: { data: { full_name: values.fullName, role: "viewer" } }
    });
    router.push("/auth/login");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input className="glass w-full rounded-xl px-4 py-3" placeholder="Nama lengkap" {...register("fullName")} />
      <input className="glass w-full rounded-xl px-4 py-3" placeholder="Email" {...register("email")} />
      <input type="password" className="glass w-full rounded-xl px-4 py-3" placeholder="Password" {...register("password")} />
      <Button type="submit" className="w-full">Daftar</Button>
    </form>
  );
}
