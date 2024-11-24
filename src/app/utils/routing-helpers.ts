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
            if(path === `/${firstSegment}` || path === `/${firstSegment}/login` || path === `/${firstSegment}/register`){
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