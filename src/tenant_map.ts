// Tenant map for later use. Value can be repeating which isn't ideal.
export type TenantConfig = {
    domain: string;
    tenantId: string;
}

export type RouteConfig = {
    consumer: string[];
    business: string[];
};

const validRoutePattern = /^\/[a-z0-9-_]+$/;
const isValidRoute = (route: string): boolean => validRoutePattern.test(route);

export const TENANT_MAP: TenantConfig[] = [
    { domain: 'foxtons.com', tenantId: 'foxtons' },
    { domain: 'merton.com', tenantId: 'merton' },
    { domain: 'packt.com', tenantId: 'packt' },
    { domain: 'smiths.com', tenantId: 'smiths' },
];

const consumerProtectedRoutes = ['/consumer']
export const tenantIds = TENANT_MAP.map(config => `/${config.tenantId}`);

export const protectedRoutes: RouteConfig = {
    consumer: consumerProtectedRoutes,
    business: tenantIds
};