import { TenantConfig, ValidRoute, ProtectedRoutes } from "./app/utils/routing-helpers";

const regularProtectedRoutes: ValidRoute[] = [
    '/account',
    '/dashboard', 
    '/listings',]

const sharedProtectedRoutes: ValidRoute[] = [
    '/change-password'
]
// Manually add tenants to match DB.
export const TENANT_MAP: TenantConfig[] = [
    { domain: 'foxtons.com', tenantId: 'foxtons' },
    { domain: 'merton.com', tenantId: 'merton' },
    { domain: 'packt.com', tenantId: 'packt' },
    { domain: 'smiths.com', tenantId: 'smiths' },
];
const tenantRoutes: ValidRoute[] = TENANT_MAP.map(config => `/${config.tenantId}` as ValidRoute);


export const protectedRoutes: ProtectedRoutes = {
    regular: regularProtectedRoutes,
    business: tenantRoutes,
    shared: sharedProtectedRoutes
};