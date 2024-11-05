import { TENANT_MAP, protectedRoutes,  } from "@/tenant_map";

// Custom type for the TENANT_MAP
export type TenantConfig = {
    domain: string;
    tenantId: string;
}
// Custom type for valid routes.
export type ValidRoute = `/${string}`

// ProtectedRoutes is an object with arrays of ValidRoutes
export type ProtectedRoutes = {
    regular: ValidRoute[];
    business: ValidRoute[];
};

// Check whether requested path is for a tenant. Returns boolean. Used for handleRouting below.
const isTenantRoute = (path: string): boolean => {
    if (!path || !path.startsWith('/')) return false;
    const [potentialTenant] = path.slice(1).split('/');
    const tenantPath = `/${potentialTenant}` as ValidRoute;
    
    return protectedRoutes.business.includes(tenantPath)
}

/**
 * Parses a URL path and determines if it's a tenant route or a regular route.
 * For tenant routes (e.g. /tenant/dashboard), splits the path into tenant, route and remaining path.
 * For regular routes (e.g. /dashboard), splits into route and remaining path.
 * 
 * @param requestedPath - The full URL path to parse (e.g. "/tenant/dashboard/settings")
 * @returns An object containing:
 *   - tenant: The tenant identifier if it's a tenant route, undefined otherwise
 *   - route: The main route path with leading slash (e.g. "/dashboard")
 *   - applicationPath: The remaining path after tenant/route parsing
 */
export const handleRouting = (requestedPath: string) : {tenant: string | undefined, route: ValidRoute | undefined, applicationPath: string } => {
    if(isTenantRoute(requestedPath)) {
        const [tenant, route, ...restOfPath] = requestedPath.slice(1).split("/");
        const applicationPath = "/" + route + restOfPath.join("/");
        return {
            tenant: tenant,
            route: `/${route}`,
            applicationPath: applicationPath
        }
    } else {
        const [route, ...restOfPath] = requestedPath.slice(1).split("/");
        return {
            tenant: undefined,
            route: `/${route}`,
            applicationPath: requestedPath
        }
    }
}

//NOT IN USE
const validRoutePattern = /^\/[a-z0-9-_]+$/;
const isValidRoute = (route: string): boolean => validRoutePattern.test(route);