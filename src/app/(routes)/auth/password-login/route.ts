import { NextRequest, NextResponse } from "next/server"
import { getUtilClient } from "@/app/utils/supabase/cookiesUtilClient"
import { SearchParams } from "next/dist/server/request/search-params"

export const POST = async (request : NextRequest, params? : SearchParams) => {
    
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    const url = new URL(request.url);
    const tenant = url.searchParams.get('tenant');

    const supabase = await getUtilClient()

    if (typeof email !== "string" || typeof password !== "string") {
        return NextResponse.redirect(
            new URL(`/error?type=invalid-input`, request.url),
            { status: 302 }
        );
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    const userData = data?.user
    if(error || !userData || !userData.app_metadata?.user_type) {
        // await supabase.auth.signOut()
        return NextResponse.redirect(
            new URL("/error?type=login-failed", request.url),
            { status: 302 })
    } else if (params && userData.app_metadata?.tenants?.includes(tenant)){
        return NextResponse.redirect(
            new URL(`/${tenant}/dashboard`, request.url),{ status: 302 })
    } else if (userData.app_metadata?.user_type === "consumer"){
        return NextResponse.redirect(
            new URL('/dashboard', request.url),{ status: 302 })
    } else {
        await supabase.auth.signOut()
        return NextResponse.redirect(
            new URL('/login', request.url),{ status: 302 })
    }
}