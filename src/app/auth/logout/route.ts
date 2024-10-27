import { getUtilClient } from "@/app/utils/supabase/cookiesUtilClient";
import { type NextRequest, NextResponse } from "next/server";

export const GET = async (request : NextRequest) => {

    const supabase = await getUtilClient()
    await supabase.auth.signOut()
    return NextResponse.redirect(new URL("/", request.url))
}