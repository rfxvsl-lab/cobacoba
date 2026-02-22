"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function RoleForm({ userId, role }: { userId: string; role: string }) {
  const [nextRole, setNextRole] = useState(role);

  const onSubmit = async () => {
    await fetch("/api/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: userId, role: nextRole })
    });
  };

  return (
    <div className="flex items-center gap-2">
      <select value={nextRole} className="glass rounded-lg px-2 py-1 text-sm" onChange={(e) => setNextRole(e.target.value)}>
        <option value="viewer">viewer</option>
        <option value="editor">editor</option>
        <option value="admin">admin</option>
      </select>
      <Button variant="ghost" onClick={onSubmit}>Apply</Button>
    </div>
  );
}
