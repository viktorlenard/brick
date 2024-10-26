// This wrapper function handles cookies in server components/actions and routes.

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { type Database } from "../../../../supabase/supabase";

export const getUtilClient = async () => {

    const cookieStore = await cookies();
    
    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) => {
                            cookieStore.set(name, value, options);
                        });
                        } catch (err) {
                            console.error("Failed to set cookies", err);
                        }
                }
            }
        }
    )
}