import { NextRequest, NextResponse } from "next/server"
import { getUtilClient } from "@/app/utils/supabase/cookiesUtilClient"
import { TENANT_MAP } from "@/tenant_map"
import { LinkType } from "@/app/utils/sendOTPLink"

export const GET = async (request : NextRequest) => {

    const { searchParams } = new URL(request.url)
    const hashed_token = searchParams.get('hashed_token')
    const type = searchParams.get('type') as LinkType

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
        } else if ((type === 'magiclink' || 'signup ') && (user && user.app_metadata.user_type === 'business')) {
            if(tenantId){
                return NextResponse.redirect(new URL(`/${tenantId}/login`, request.url));    
            }
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
}