import { Login } from "./Login";
import { SearchParams } from "next/dist/server/request/search-params";
import { getAdminClient } from "../utils/supabase/adminClient";
import { notFound } from "next/navigation";

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  
    const params = await searchParams;
    const isMagicLink = params.magicLink === 'yes'
    let tenant = Array.isArray(params.tenant) ? params.tenant[0] : params.tenant;
    // let tenant = params.tenant;

    const supabaseAdmin = getAdminClient();
    if(tenant) {
        try {
            const supabaseAdmin = getAdminClient();
            const { data, error } = await supabaseAdmin
                .from("tenants")
                .select("*")
                .eq("id", tenant)
                .single();
                
            if(error) {
                tenant = undefined;
            } else {
                const { name: tenantName, id: tenantId } = data;
            }
        } catch {
            tenant = undefined;
        }
    }

    console.log('Login page. Tenant: ' + tenant)
  
    return (
        <div className="min-h-dvh min-w-full flex flex-col justify-center items-center">
            <Login tenantName={tenant} isPasswordLogin={!isMagicLink}/>
        </div>
  )
}
