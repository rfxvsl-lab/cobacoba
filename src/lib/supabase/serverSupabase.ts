import { createRouteHandlerClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const createServerSupabase = () => createServerComponentClient({ cookies });
export const createRouteSupabase = () => createRouteHandlerClient({ cookies });
