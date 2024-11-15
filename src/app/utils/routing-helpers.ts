import { protectedRoutes } from "@/tenant_map";
import { NextRequest, NextResponse } from "next/server";
import { TenantId, UserTypes, UserData } from "./user-helpers";

// Custom type for the TENANT_MAP
export type TenantConfig = {
    domain: string;
    tenantId: string;
}
// Custom type for valid routes.
export type ValidRoute = `/${string}`

// ProtectedRoutes is an object with arrays of ValidRoutes
export type ProtectedRoutes = {
    consumer: ValidRoute[];
    business: ValidRoute[];
    shared: ValidRoute[];
};

// // Check whether requested path is for a tenant. Returns boolean. Used for handleRouting below.
// export const isTenantRoute = (path: string): boolean => {
//     const [potentialTenant] = path.slice(1).split('/');
//     const tenantPath = `/${potentialTenant}` as ValidRoute;
//     return protectedRoutes.business.includes(tenantPath)
// }

// /**
//  * Parses a URL path and determines if it's a tenant route or a regular route.
//  * For tenant routes (e.g. /tenant/dashboard), splits the path into tenant, route and remaining path.
//  * For regular routes (e.g. /dashboard), splits into route and remaining path.
//  * 
//  * @param requestedPath - The full URL path to parse (e.g. "/tenant/dashboard/settings")
//  * @returns An object containing:
//  *   - tenant: The tenant identifier if it's a tenant route, undefined otherwise
//  *   - route: The main route path with leading slash (e.g. "/dashboard")
//  *   - applicationPath: The remaining path after tenant/route parsing
//  */
// export const handleRouting = (requestedPath: string) : {tenant: string | undefined, route: ValidRoute | undefined, applicationPath: string } => {
//     if(isTenantRoute(requestedPath)) {
//         const [tenant, route, ...restOfPath] = requestedPath.slice(1).split("/");
//         const applicationPath = "/" + route + restOfPath.join("/");
//         return {
//             tenant: tenant,
//             route: `/${route}`,
//             applicationPath: applicationPath
//         }
//     } else {
//         const [route, ...restOfPath] = requestedPath.slice(1).split("/");
//         return {
//             tenant: undefined,
//             route: `/${route}`,
//             applicationPath: requestedPath
//         }
//     }
// }

// //NOT IN USE
// const validRoutePattern = /^\/[a-z0-9-_]+$/;
// const isValidRoute = (route: string): boolean => validRoutePattern.test(route);

export enum RouteTypes {
    None,
    Public,
    Shared,
    Consumer,
    Business,
    ConsumerLogin,
    BusinessLogin
}

interface Route {
    path: string
    type: RouteTypes
    tenant?: TenantId
}

export const getRouteConfig = (path: string) : Route => {
    if(!path || !path.startsWith('/')) return { path: path, type: RouteTypes.None}
    const match = path.match(/^\/([^\/]+)(\/.*)?$/);
    if (match) {
        const firstSegment = match[1];
        if (`/${firstSegment}` === '/login') {
            return { path: path, type: RouteTypes.ConsumerLogin} 
        } else if (protectedRoutes.consumer.includes(`/${firstSegment}`)) {
            return { path: path, type: RouteTypes.Consumer}
        } else if (protectedRoutes.shared.includes(`/${firstSegment}`)) {
            return { path: path, type: RouteTypes.Shared}
        } else if (protectedRoutes.business.includes(`/${firstSegment}`)) {
            if(path === `/${firstSegment}` || path === `/${firstSegment}/login`){
                return { path: path, type: RouteTypes.BusinessLogin, tenant: firstSegment}
            } 
            return { path: path, type: RouteTypes.Business, tenant: firstSegment}
        }
    }
    return { path: path, type: RouteTypes.Public }
}

// ROUTING FUNCTIONS

export const handleConsumerRoute = (user : UserData, request: NextRequest) => {
    switch (user.type) {
        case UserTypes.Anonymous:
            return NextResponse.redirect(new URL('/login/', request.url));
        case UserTypes.Business:
            return NextResponse.redirect(new URL(`/${user.tenants?.primary}/dashboard`, request.url));
    }
    return NextResponse.next();
}

export const handleSharedRoute = (user : UserData, request: NextRequest) => {
    switch (user.type) {
        case UserTypes.Anonymous:
            return NextResponse.redirect(new URL('/login/', request.url));
        }
    return NextResponse.next();
}

export const handleConsumerLoginRoute = (user : UserData, request: NextRequest) => {
    switch (user.type) {
        case UserTypes.Consumer:
            return NextResponse.redirect(new URL('/dashboard/', request.url));
        case UserTypes.Business:
            return NextResponse.redirect(new URL(`/${user.tenants?.primary}/dashboard/`, request.url));
    }
    return NextResponse.next();
}

export const handleBusinessLoginRoute = (user : UserData, route: Route, request: NextRequest) => {
    switch(user.type) {
        case UserTypes.Consumer:
            return NextResponse.redirect(new URL('/dashboard/', request.url));
        case UserTypes.Business:
            if(user.tenants?.primary === route.tenant || user.tenants?.secondary.includes(route.tenant!)){
                return NextResponse.redirect(new URL(`${route.tenant}/dashboard/`, request.url))
            } else {
                return NextResponse.redirect(new URL(`${user.tenants?.primary}/dashboard/`, request.url))
            }
    }
    return NextResponse.next();
}

export const handleBusinessRoute = (user : UserData, route: Route, request: NextRequest) => {
    switch(user.type) {
        case UserTypes.Anonymous:
            return NextResponse.redirect(new URL(`/${route.tenant}/login/`, request.url));
        case UserTypes.Consumer:
            return NextResponse.redirect(new URL('/dashboard/', request.url));
        case UserTypes.Business:
            if(user.tenants?.primary === route.tenant || user.tenants?.secondary.includes(route.tenant!)) {
                return NextResponse.next();
            } else {
                return NextResponse.redirect(new URL(`/${user.tenants?.primary}/dashboard/`, request.url));
            }
        }
}

const doRouting = (route: Route, user: UserData, request: NextRequest) => {
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
}