import { TenantConfig, ValidRoute, ProtectedRoutes } from "./app/utils/routing-helpers";

// TENANT_MAP. Manually add tenants to match DB.
export const TENANT_MAP: TenantConfig[] = [
    { domain: 'foxtons.com', tenantId: 'foxtons' },
    { domain: 'merton.com', tenantId: 'merton' },
    { domain: 'packt.com', tenantId: 'packt' },
    { domain: 'smiths.com', tenantId: 'smiths' },
];

// consumer and shared protectedRoutes. Manually add routes. 
const consumerProtectedRoutes: ValidRoute[] = ['/consumer']
const sharedProtectedRoutes: ValidRoute[] = ['/account']
// Fill protectedRoutes with the proper information.
const tenantIds: ValidRoute[] = TENANT_MAP.map(config => `/${config.tenantId}` as ValidRoute);


export const protectedRoutes: ProtectedRoutes = {
    consumer: consumerProtectedRoutes,
    business: tenantIds,
    shared: sharedProtectedRoutes
};