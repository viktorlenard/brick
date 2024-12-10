import { getReqResClient } from "./app/utils/supabase/reqResClient";
import { type NextRequest, NextResponse } from "next/server";
import { getUserConfig } from "./app/utils/user-helpers";
import { getRouteConfig, RouteTypes } from "./app/utils/routing-helpers";
import { 
    handleConsumerLoginRoute,
    handleBusinessLoginRoute,
    handleConsumerRoute,
    handleBusinessRoute,
    handleSharedRoute
 } from "./app/utils/routing-helpers";

export async function middleware(request: NextRequest) {
    
    // getSession is less safe but faster than getUser.
    // Since the app is protected by RLS policies it is fine to use getSession in middleware
    const { supabase, response } = getReqResClient({ request })
    const session = await supabase.auth.getSession() 
    
    const requestedPath = request.nextUrl.pathname;
    const sessionUser = session.data?.session?.user

    const user = getUserConfig(sessionUser)
    const route = getRouteConfig(requestedPath)

    switch (route.type) {
        case RouteTypes.None:
            return NextResponse.redirect(new URL("/not-found", request.url));
        case RouteTypes.Consumer:
            return handleConsumerRoute(user, request)
        case RouteTypes.Shared:
            return handleSharedRoute(user, request)
        case RouteTypes.Business:
            return handleBusinessRoute(user, route, request)
        case RouteTypes.ConsumerLogin:
            return handleConsumerLoginRoute(user, request)
        case RouteTypes.BusinessLogin:
            return handleBusinessLoginRoute(user, route, request)
    }
    return response.value
}

// Matcher to avoid running the middleware on static file requests, such as favicon.ico
export const config = {
    matcher: ["/((?!.*\\.).*)"],
};