import { TENANT_MAP } from "@/tenant_map";

// Check whether requested path is for a tenant. Returns boolean
const isTenantRoute = (path: string): boolean => {
    if (!path || !path.startsWith('/')) return false;
    const [potentialTenant] = path.slice(1).split('/');
    return TENANT_MAP.some(config => config.tenantId === potentialTenant);
}
// Returns the tenant, and the rest of the path requested. 
export const handleRouting = (requestedPath: string) : {tenant: string, applicationPath: string} => {
    if(isTenantRoute(requestedPath)) {
        const [tenant, ...restOfPath] = requestedPath.slice(1).split("/");
        const applicationPath = "/" + restOfPath.join("/");
        return {
            tenant: tenant,
            applicationPath: applicationPath
        }
    } else {
        return {
            tenant: 'consumer',
            applicationPath: requestedPath
        }
    }
}

export const getFirstSegment = (applicationPath: string): string => {
    // Split the path by '/'
    const segments = applicationPath.split('/').filter(segment => segment.length > 0);
    // Get the first segment and add the leading '/'
    return segments.length > 0 ? `/${segments[0]}` : '';
};