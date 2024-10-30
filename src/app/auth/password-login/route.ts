import { NextRequest, NextResponse } from "next/server"
import { getUtilClient } from "@/app/utils/supabase/cookiesUtilClient"

export const POST = async (request : NextRequest) => {
    
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    const supabase = await getUtilClient()

    if (typeof email !== "string" || typeof password !== "string") {
        return NextResponse.redirect(
            new URL(`/error?type=invalid-input`, request.url),
            { status: 302 }
        );
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    const userData = data?.user
    if(error || !userData) {
        return NextResponse.redirect(
            new URL("/error?type=login-failed", request.url),
            { status: 302 }
        )
    }

    return NextResponse.redirect(
        new URL('/listings', request.url),{ status: 302 }
    )

}