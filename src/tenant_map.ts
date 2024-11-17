import { TenantConfig, ValidRoute, ProtectedRoutes } from "./app/utils/routing-helpers";

const consumerProtectedRoutes: ValidRoute[] = [
    '/account',
    '/dashboard', 
    '/listings',]

const sharedProtectedRoutes: ValidRoute[] = [
    '/change-password'
]
// Manually add tenants to match DB.
export const TENANT_MAP: TenantConfig[] = [
    { domain: 'foxtons.com', tenantId: 'foxtons', name: 'Foxtons' },
    { domain: 'merton.com', tenantId: 'merton', name: 'Merton Housing' },
    { domain: 'packt.com', tenantId: 'packt', name: 'Packt Housing' },
    { domain: 'smiths.com', tenantId: 'smiths', name: `Smith's Lettings` },
];
const tenantRoutes: ValidRoute[] = TENANT_MAP.map(config => `/${config.tenantId}` as ValidRoute);


export const protectedRoutes: ProtectedRoutes = {
    consumer: consumerProtectedRoutes,
    business: tenantRoutes,
    shared: sharedProtectedRoutes
};