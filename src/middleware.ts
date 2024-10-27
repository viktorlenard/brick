import { getReqResClient } from "./app/utils/supabase/reqResClient";
import { type NextRequest, NextResponse } from "next/server";

const protectedRoutes = ['/listings', '/profile']

export async function middleware(request: NextRequest) {
    
    const { supabase, response } = getReqResClient({ request })
    // getSession is less safe but faster than getUser.
    // Since the app is protected by RLS policies it is fine to use getSession in middleware
    const session = await supabase.auth.getSession() 
    
    // Using the middleware to protect routes & redirect logged in users.
    const requestedPath = request.nextUrl.pathname;
    const sessionUser = session.data?.session?.user

    if (protectedRoutes.some(route => requestedPath.startsWith(route))) {
        if(!sessionUser){
            return NextResponse.redirect(new URL("/", request.url))
        }
    } else if (requestedPath === "/") {
        if(sessionUser){
            return NextResponse.redirect(new URL("/listings", request.url))
        }
    }
    
    return response.value
}

// Matcher to avoid running the middleware on static file requests, such as favicon.ico
export const config = {
    matcher: ["/((?!.*\\.).*)"],
};