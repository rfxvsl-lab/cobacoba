import { Role } from "@/types";

const hierarchy: Record<Role, number> = {
  viewer: 1,
  editor: 2,
  admin: 3
};

export const hasRole = (role: Role, minimum: Role) => hierarchy[role] >= hierarchy[minimum];
