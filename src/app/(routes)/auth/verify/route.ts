import { NextRequest, NextResponse } from "next/server"
import { getUtilClient } from "@/app/utils/supabase/cookiesUtilClient"
import { TENANT_MAP } from "@/tenant_map"

export const GET = async (request : NextRequest) => {

    const { searchParams } = new URL(request.url)
    const hashed_token = searchParams.get('hashed_token')
    const linkType = searchParams.get('type')

    const supabase = await getUtilClient()

    if(!hashed_token){
        return NextResponse.redirect(
            new URL('/error?type=invalid_token', request.url)
        )
    }

    const { data, error } = await supabase.auth.verifyOtp({
        type: 'magiclink',
        token_hash: hashed_token
    })

    const user = data.user
    const email = data.user?.email
    const domain = email?.split('@')[1];
    const tenantConfig = TENANT_MAP.find(config => config.domain === domain);
    const tenantId = tenantConfig ? tenantConfig.tenantId : undefined;

    if (error) {
        return NextResponse.redirect(
            new URL("/error?type=invalid_magiclink", request.url)
        );
    } else {
        if(linkType === 'recovery'){
            return NextResponse.redirect(new URL('/change-password', request.url))
        } else if (linkType === 'login' && (user && user.app_metadata.user_type === 'consumer')){
            return NextResponse.redirect(new URL('/dashboard/', request.url));
        } else if (linkType === 'login' && (user && user.app_metadata.user_type === 'business')) {
            if(tenantId){
                return NextResponse.redirect(new URL(`/${tenantId}/login`, request.url));    
            }
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
}