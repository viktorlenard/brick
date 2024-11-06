'use server'
import { Login } from "@/app/components/Login";
import { getAdminClient } from "@/app/utils/supabase/adminClient";
import { PageParams } from "@/app/types/pages";
import { TenantData } from "@/app/types/tenant";
import { redirect } from "next/navigation";

export const LoginPage = async ({ searchParams, params }: PageParams) => {
  
    const { tenant } = await params
    const search = await searchParams;
    const isMagicLink = search.magicLink === 'yes'
    let tenantData: TenantData = undefined

    if (tenant) {
        const supabaseAdmin = getAdminClient();
        try {
          const { data, error } = await supabaseAdmin
            .from("tenants")
            .select("*")
            .eq("id", tenant)
            .single();
            
          if (!error && data) {
            tenantData = {
              name: data.name,
              id: data.id,
            };
          }
        } catch {
          tenantData = undefined;
        }
    }

    if(tenant && !tenantData) {
        redirect(`/login`);
    }
    
    return (
        <div className="min-h-dvh min-w-full flex flex-col justify-center items-center">
            <Login tenant={tenantData} isPasswordLogin={!isMagicLink}/>
        </div>
  )
}
