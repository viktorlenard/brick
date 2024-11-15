import { NextRequest, NextResponse } from "next/server"
import { getUtilClient } from "@/app/utils/supabase/cookiesUtilClient"
import { SearchParams } from "next/dist/server/request/search-params"
import { getUserConfig, UserTypes } from "@/app/utils/user-helpers"

export const POST = async (request : NextRequest, params? : SearchParams) => {
    
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    if (typeof email !== "string" || typeof password !== "string") {
        return NextResponse.redirect(
            new URL(`/error?type=invalid-input`, request.url),
            { status: 302 }
        );
    }

    const url = new URL(request.url);
    const tenant = url.searchParams.get('tenant');

    const supabase = await getUtilClient()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
        await supabase.auth.signOut()
        return NextResponse.redirect(
            new URL("/error?type=login-failed", request.url),
            { status: 302 }) }
    
    if(data.user){
        const user = getUserConfig(data.user)
        if (tenant && (user.tenants?.primary === tenant || user.tenants?.secondary.includes(tenant))){
            return NextResponse.redirect(
                new URL(`/${tenant}/dashboard`, request.url),{ status: 302 })
        } else if (user.type === UserTypes.Consumer){
            return NextResponse.redirect(
                new URL('/dashboard', request.url),{ status: 302 })
        } else if (user.type === UserTypes.Business){
            return NextResponse.redirect(
                new URL(`/${user.tenants?.primary}/dashboard`, request.url),{ status: 302 })
        } else {
            await supabase.auth.signOut()
            return NextResponse.redirect(
                new URL('/login', request.url),{ status: 302 })
        }
    }
}