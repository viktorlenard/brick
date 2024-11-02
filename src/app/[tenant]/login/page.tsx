import { Login } from "@/app/Login";
import { SearchParams } from "next/dist/server/request/search-params";
import { getAdminClient } from "@/app/utils/supabase/adminClient";
import { notFound } from "next/navigation";

interface TenantLoginProps {
    searchParams: SearchParams;
    params: {
        magicLink: string;
        tenant: string;
    };
}

export default async function TenantLogin({ searchParams, params }: TenantLoginProps) {

    const optionalParams = await searchParams;
    const fixedparams = await params
    const isMagicLink = optionalParams.magicLink === 'yes'

    const supabaseAdmin = getAdminClient();
    const { data, error } = await supabaseAdmin
        .from("tenants")
        .select("*")
        .eq("id", fixedparams.tenant).single();
    if(error) {
        notFound();
    }
    const { name: tenantName, id: tenantId } = data
  
    return (
        <div className="min-h-dvh min-w-full flex flex-col justify-center items-center">
            <Login tenantId={tenantId} tenantName={tenantName} isPasswordLogin={!isMagicLink}/>
        </div>
    )
}
