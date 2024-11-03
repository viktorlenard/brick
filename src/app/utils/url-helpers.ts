import { TENANT_MAP } from "@/tenant_map";
import { NextRequest } from "next/server";

// Check whether requested path is for a tenant. Returns boolean
const isTenantRoute = (path: string): boolean => {
    if (!path || !path.startsWith('/')) return false;
    const [potentialTenant] = path.slice(1).split('/');
    if(TENANT_MAP.some(config => config.tenantId === potentialTenant)){
        return true
    } else if (potentialTenant === 'consumer'){
        return true
    } else {
        return false
    }
}
// Returns the tenant, and the rest of the path requested. 
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

// Grab the first segment of a url
export const getFirstSegment = (applicationPath: string): string => {
    // Split the path by '/'
    const segments = applicationPath.split('/').filter(segment => segment.length > 0);
    // Get the first segment and add the leading '/'
    return segments.length > 0 ? `/${segments[0]}` : '';
};

// Generate pathname for the front-end
export const urlPath = (applicationPath : string, tenant : string) => {
    return `/${tenant}${applicationPath}`;
}
// Generate URL object for the back-end
export const buildUrl = (applicationPath : string, tenant : string, request : NextRequest) => {
    return new URL(urlPath(applicationPath, tenant), request.url);
}