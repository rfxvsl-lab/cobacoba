import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl px-4 py-2 text-sm font-medium transition",
        variant === "primary" && "bg-primary text-white hover:bg-primaryGlow",
        variant === "ghost" && "glass text-light hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}
