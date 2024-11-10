import { NextRequest, NextResponse } from "next/server"
import { SearchParams } from "next/dist/server/request/search-params"
import { sendOTPLink, LinkType } from "@/app/utils/sendOTPLink"

export const POST = async (request : NextRequest, params? : SearchParams) => {
    
    const formData = await request.formData()
    const email = formData.get("email") as string
    const type = formData.get('type') as LinkType
    const url = new URL(request.url);
    const tenant = url.searchParams.get('tenant');
    const errorUrl = new URL(`/error?type=${type}`, request.url)
    const thanksUrl = new URL(`/magic-thanks?type=${type}`, request.url)

    console.log(email, type, tenant, type)

    if(tenant){
        console.log(`${tenant} magic link type requested.`)
        const otpSuccess = await sendOTPLink( { email, tenant, type, request });
        if (!otpSuccess) {
            return NextResponse.redirect(errorUrl, 302);
          } else {
            return NextResponse.redirect(thanksUrl, 302);
        }
    } else {
        console.log('Consumer magic link type requested.')
        const otpSuccess = await sendOTPLink( { email, type, request });
        if (!otpSuccess) {
            return NextResponse.redirect(errorUrl, 302);
          } else {
            return NextResponse.redirect(thanksUrl, 302);
        }
    }
}