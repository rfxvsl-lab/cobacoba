"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/lib/validation/authSchema";
import { supabaseClient } from "@/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

type LoginInput = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (values: LoginInput) => {
    const supabase = supabaseClient();
    await supabase.auth.signInWithPassword(values);
    router.push("/dashboard");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input className="glass w-full rounded-xl px-4 py-3" placeholder="Email" {...register("email")} />
      {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
      <input type="password" className="glass w-full rounded-xl px-4 py-3" placeholder="Password" {...register("password")} />
      {errors.password && <p className="text-xs text-red-400">{errors.password.message}</p>}
      <Button type="submit" className="w-full">Masuk</Button>
    </form>
  );
}
