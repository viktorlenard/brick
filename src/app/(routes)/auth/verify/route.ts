import { NextRequest, NextResponse } from "next/server"
import { getUtilClient } from "@/app/utils/supabase/cookiesUtilClient"
import { TENANT_MAP } from "@/tenant_map"
import { LinkType } from "@/app/utils/sendOTPLink"

export const GET = async (request : NextRequest) => {

    const { searchParams } = new URL(request.url)
    const hashed_token = searchParams.get('hashed_token')
    const type = searchParams.get('type') as LinkType
    const tenant = searchParams.get('tenant')

    // FOR NOW ONLY THESE LINKTYPES ARE SUPPORTED.
    if (type !== 'magiclink' && type !== 'signup' && type !== 'recovery') {
        return NextResponse.redirect(new URL('/error?type=invalid_magiclink', request.url));
    }
    const supabase = await getUtilClient()

    if(!hashed_token){
        return NextResponse.redirect(
            new URL('/error?type=invalid_token', request.url)
        )
    }

    const { data, error } = await supabase.auth.verifyOtp({
        type: type,
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
        if(type === 'recovery'){
            return NextResponse.redirect(new URL('/change-password', request.url))
        } else if ((type === 'magiclink' || 'signup ') && (user && user.app_metadata.user_type === 'consumer')){
            return NextResponse.redirect(new URL('/dashboard/', request.url));
        } else if ((type === 'signup') && (user && user.app_metadata.user_type === 'business')) {
            if(tenantId === tenant){
                return NextResponse.redirect(new URL(`/${tenantId}/login`, request.url));    
            }
            return NextResponse.redirect(new URL('/login', request.url));
        } else if (type === 'magiclink' && user && user.app_metadata.user_type === 'business'){
            // Feature needs implementing.
            console.log("BUSINESS MAGIC LINK", tenant, tenantId )
            if(tenantId === tenant){
                return NextResponse.redirect(new URL(`/${tenantId}/dashboard`, request.url));    
            } else if (TENANT_MAP.some(config => config.tenantId === tenant)){
                return NextResponse.redirect(new URL(`/${tenant}/dashboard`, request.url));
            }
            console.log("BUSINESS MAGIC LINK FAILED")
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
}