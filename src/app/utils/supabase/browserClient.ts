// Using supabase/ssr over supabase/supabase-js.

// Singleton wrapper function for createBrowserClient, to be used on the front end.
// Using on the back end will not recognise currently authenticated user.

import { createBrowserClient } from "@supabase/ssr";
import { type Database } from "../../../../supabase/supabase";

export const getClient = () => {
    return createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
}
