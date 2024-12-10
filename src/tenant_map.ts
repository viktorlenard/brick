import { TenantConfig, ValidRoute, ProtectedRoutes } from "./app/utils/routing-helpers";

const consumerProtectedRoutes: ValidRoute[] = [
    '/account',
    '/dashboard', 
    '/listings',]

const sharedProtectedRoutes: ValidRoute[] = [
    '/change-password'
]

export const publicRoutes: ValidRoute[] = [
    '/',
    '/not-found',
]
// Manually add tenants to match DB.
export const TENANT_MAP: TenantConfig[] = [
    { domain: 'foxtons.com', tenantId: 'foxtons' },
    { domain: 'merton.com', tenantId: 'merton' },
    { domain: 'packt.com', tenantId: 'packt' },
    { domain: 'smiths.com', tenantId: 'smiths' },
];

export const isValidTenant = (tenant: any): tenant is string => {
    return TENANT_MAP.some(config => config.tenantId === tenant);
};


const tenantRoutes: ValidRoute[] = TENANT_MAP.map(config => `/${config.tenantId}` as ValidRoute);


export const protectedRoutes: ProtectedRoutes = {
    consumer: consumerProtectedRoutes,
    business: tenantRoutes,
    shared: sharedProtectedRoutes
};