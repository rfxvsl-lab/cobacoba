import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div className="glass rounded-2xl p-6">{children}</div>;
}
