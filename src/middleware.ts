import { getReqResClient } from "./app/utils/supabase/reqResClient";
import { type NextRequest, NextResponse } from "next/server";
import { protectedRoutes } from "./tenant_map";
import { handleRouting } from "./app/utils/url-helpers";

export async function middleware(request: NextRequest) {
    
    const { supabase, response } = getReqResClient({ request })
    // getSession is less safe but faster than getUser.
    // Since the app is protected by RLS policies it is fine to use getSession in middleware
    const session = await supabase.auth.getSession() 
    
    // Using the middleware to protect routes & redirect logged in users.
    const requestedPath = request.nextUrl.pathname;
    const { tenant, applicationPath} = handleRouting(requestedPath)

    const sessionUser = session.data?.session?.user

    // CURSED DEBUG LOG. I WANT IT.
    console.log('---------------------------------------------' + 
        '\nMIDDLEWARE \nROUTE REQUESTED    ' + requestedPath +
        '\nTENANT              ' + tenant + 
        '\nAPPLICATION PATH   ' + applicationPath + 
        '\n---------------------------------------------')

    // Business route requested.
    if (protectedRoutes.business.includes('/'+ tenant)){
        if (!sessionUser) {
            return NextResponse.redirect(new URL(`/login/?tenant=${tenant}`, request.url));
    }
    // Consumer route requsted
    // protectedRoutes.consumer.includes(getFirstSegment(applicationPath)
    } else if (protectedRoutes.consumer.includes('/' + tenant)) {
        if(!sessionUser){
            if (requestedPath !== "/login") {
                return NextResponse.redirect(new URL("/consumer/listings", request.url));
            }
        }
    // Home page requested
    } else if (requestedPath === "/" || requestedPath === "/login") {
        if(sessionUser){
            return NextResponse.redirect(new URL("/consumer/listings", request.url))
        }
    }
    
    return response.value
}

// Matcher to avoid running the middleware on static file requests, such as favicon.ico
export const config = {
    matcher: ["/((?!.*\\.).*)"],
};