import { getReqResClient } from "./app/utils/supabase/reqResClient";
import { type NextRequest, NextResponse } from "next/server";
import { protectedRoutes } from "./tenant_map";
import { handleRouting } from "./app/utils/routing-helpers";
import { TENANT_MAP } from "./tenant_map";

export async function middleware(request: NextRequest) {
    
    const { supabase, response } = getReqResClient({ request })
    // getSession is less safe but faster than getUser.
    // Since the app is protected by RLS policies it is fine to use getSession in middleware
    const session = await supabase.auth.getSession() 
    
    // Using the middleware to protect routes & redirect logged in users.
    const requestedPath = request.nextUrl.pathname;
    const { tenant, route, applicationPath} = handleRouting(requestedPath)

    const sessionUser = session.data?.session?.user

    // CURSED DEBUG LOG. I WANT IT.
    console.log('---------------------------------------------' + 
        '\nMIDDLEWARE \nROUTE REQUESTED    ' + requestedPath +
        '\nROUTE              ' + route + 
        '\nTENANT              ' + tenant + 
        '\nAPPLICATION PATH   ' + applicationPath + 
        '\n---------------------------------------------')

    // Tenant route requested.
    if (tenant && requestedPath !== `/${tenant}/login` && requestedPath !== `/${tenant}/register`){
        if(sessionUser && sessionUser.app_metadata?.user_type === 'consumer'){
            return NextResponse.redirect(new URL('/dashboard', request.url))
        } else if (!sessionUser) {
            return NextResponse.redirect(new URL(`/${tenant}/login`, request.url));
        } else if (!sessionUser.app_metadata?.tenants.includes(tenant)) {
            const email = sessionUser.email
            const domain = email?.split('@')[1];
            const tenantConfig = TENANT_MAP.find(config => config.domain === domain);
            const tenantId = tenantConfig ? tenantConfig.tenantId : undefined;
            if (tenantId){
                return NextResponse.redirect(new URL(`/${tenantId}/login`, request.url));
            } else {
                return NextResponse.redirect(new URL(`/${tenant}/login`, request.url));
            }
        }
    // Regular protected route requested.
    } else if (route && protectedRoutes.regular.includes(route)) {
        if(!sessionUser){
            return NextResponse.redirect(new URL('/login/', request.url));
        } else if (sessionUser && sessionUser.app_metadata?.user_type !== 'consumer' ){
            if(sessionUser.app_metadata?.user_type === 'business'){
                const email = sessionUser.email
                const domain = email?.split('@')[1];
                const tenantConfig = TENANT_MAP.find(config => config.domain === domain);
                const tenantId = tenantConfig ? tenantConfig.tenantId : undefined;
                if(tenantId){
                    return NextResponse.redirect(new URL(`/${tenantId}/dashboard`, request.url))
                } else {
                    return NextResponse.rewrite(new URL("/not-found", request.url));
                }
            }
            return NextResponse.rewrite(new URL("/not-found", request.url));
        }
    // Login page requested 
    } else if (requestedPath === "/login") {
        if (sessionUser && sessionUser.app_metadata?.user_type === 'consumer') {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        } 
    // Tenant login page requested
    } else if (requestedPath === `/${tenant}` || requestedPath === `/${tenant}/login`){
        if (sessionUser && sessionUser.app_metadata?.tenants.includes(tenant)) {
            return NextResponse.redirect(new URL(`/${tenant}/dashboard`, request.url))
        } else if (sessionUser && sessionUser.app_metadata?.user_type === 'consumer') {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
    // Shared protected route requested
    } else if (route && protectedRoutes.shared.includes(route)){
        if(!sessionUser){
            return NextResponse.redirect(new URL('/login/', request.url));}
    }
    
    return response.value
}

// Matcher to avoid running the middleware on static file requests, such as favicon.ico
export const config = {
    matcher: ["/((?!.*\\.).*)"],
};