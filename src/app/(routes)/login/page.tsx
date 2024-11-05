import { Login } from "./Login";
import { SearchParams } from "next/dist/server/request/search-params";
import { getAdminClient } from "@/app/utils/supabase/adminClient";
import { notFound } from "next/navigation";

type TenantData = {
    name?: string,
    id?: string
} | undefined

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  
    const params = await searchParams;
    const isMagicLink = params.magicLink === 'yes'
    let searchTenant = Array.isArray(params.tenant) ? params.tenant[0] : params.tenant;
    let tenantData: TenantData = undefined

    const supabaseAdmin = getAdminClient();
    if(searchTenant) {
        try {
            const supabaseAdmin = getAdminClient();
            const { data, error } = await supabaseAdmin
                .from("tenants")
                .select("*")
                .eq("id", searchTenant)
                .single();
                
            if(!error && data) {
                tenantData = {
                    name: data.name,
                    id: data.id
                };
            }
        } catch {
            tenantData = undefined;
        }
    }

    console.log('Login page. Tenant: ' + searchTenant)
  
    return (
        <div className="min-h-dvh min-w-full flex flex-col justify-center items-center">
            <Login tenant={{name: tenantData?.name, id: tenantData?.id}} isPasswordLogin={!isMagicLink}/>
        </div>
  )
}
