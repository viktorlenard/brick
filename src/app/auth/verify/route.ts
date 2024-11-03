import { NextRequest, NextResponse } from "next/server"
import { getUtilClient } from "@/app/utils/supabase/cookiesUtilClient"
import { link } from "fs"

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

    const { error } = await supabase.auth.verifyOtp({
        type: 'magiclink',
        token_hash: hashed_token
    })

    if (error) {
        return NextResponse.redirect(
            new URL("/error?type=invalid_magiclink", request.url)
        );
    } else {
        if(linkType === 'recovery'){
            return NextResponse.redirect(new URL('/account/change-password', request.url))
        } else if (linkType === 'login'){
            return NextResponse.redirect(new URL('/consumer/listings', request.url));
        }
    }
}