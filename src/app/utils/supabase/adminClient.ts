// Create admin client. 
//No cookie management, as we're not handling user sessions with adminClient

import { createClient } from "@supabase/supabase-js";

export const getAdminClient = () => {

    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {
            auth: {
                persistSession: false,
            }
        }
    )
}