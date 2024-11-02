import { getReqResClient } from "./app/utils/supabase/reqResClient";
import { type NextRequest, NextResponse } from "next/server";
import { TENANT_MAP, protectedRoutes } from "./tenant_map";
import { handleRouting, getFirstSegment } from "./app/utils/middleware/helpers";

export async function middleware(request: NextRequest) {
    
    const { supabase, response } = getReqResClient({ request })
    // getSession is less safe but faster than getUser.
    // Since the app is protected by RLS policies it is fine to use getSession in middleware
    const session = await supabase.auth.getSession() 
    
    // Using the middleware to protect routes & redirect logged in users.
    const requestedPath = request.nextUrl.pathname;
    const { tenant, applicationPath} = handleRouting(requestedPath)

    const sessionUser = session.data?.session?.user

    console.log(sessionUser)

    // Business route requested.
    if (protectedRoutes.business.includes('/'+ tenant)){
        if(!sessionUser){
            return NextResponse.redirect(new URL("/", request.url))
    }
    // Consumer route requsted
    } else if (protectedRoutes.consumer.includes(getFirstSegment(applicationPath))) {
        if(!sessionUser){
            return NextResponse.redirect(new URL("/", request.url))
        }
    // Home page requested
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