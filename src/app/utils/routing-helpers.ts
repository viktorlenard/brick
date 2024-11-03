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
    consumer: ValidRoute[];
    business: ValidRoute[];
    shared: ValidRoute[];
};

// Check whether requested path is for a tenant. Returns boolean. Used for handleRouting below.
const isTenantRoute = (path: string): boolean => {
    if (!path || !path.startsWith('/')) return false;
    const [potentialTenant] = path.slice(1).split('/');
    const tenantPath = `/${potentialTenant}` as ValidRoute;
    
    return protectedRoutes.business.includes(tenantPath) || 
           protectedRoutes.consumer.includes(tenantPath) ||
           protectedRoutes.shared.includes(tenantPath);
}
/**
 * Extracts tenant and application path from the requested URL path.
 * @param requestedPath - The full URL path (e.g. "/tenant/some/path")
 * @returns Object containing tenant (if present) and remaining application path
 * @example
 * handleRouting("/tenant/path") // returns { tenant: "tenant", applicationPath: "/path" }
 * handleRouting("/path") // returns { tenant: undefined, applicationPath: "/path" }
 */
export const handleRouting = (requestedPath: string) : {tenant: string | undefined, applicationPath: string} => {
    if(isTenantRoute(requestedPath)) {
        const [tenant, ...restOfPath] = requestedPath.slice(1).split("/");
        const applicationPath = "/" + restOfPath.join("/");
        return {
            tenant: tenant,
            applicationPath: applicationPath
        }
    } else {
        return {
            tenant: undefined,
            applicationPath: requestedPath
        }
    }
}

//NOT IN USE
const validRoutePattern = /^\/[a-z0-9-_]+$/;
const isValidRoute = (route: string): boolean => validRoutePattern.test(route);