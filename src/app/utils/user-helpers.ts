import { TENANT_MAP } from "@/tenant_map";
import { type User } from "@supabase/supabase-js";

export enum UserTypes {
    Anonymous,
    Consumer,
    Business,
}

export type TenantId = typeof TENANT_MAP[number]['tenantId'];

type UserTenantConfig =  {
    primary: TenantId,
    secondary: TenantId[]
}
export interface UserData {
    type: UserTypes,
    tenants?: UserTenantConfig
}

const getTenantConfig = (user : User): UserTenantConfig | undefined => {
    if (!user.email || !user.app_metadata.tenants || !user.app_metadata.user_type) {
        return undefined
    }
    const domain = TENANT_MAP.find(config => config.domain === (user.email!.split('@')[1]));
    const domainId = domain ? domain.tenantId : undefined;
    if(!domainId || !user.app_metadata.tenants.includes(domainId)){
        return undefined
    } else {
        const secondary = user.app_metadata.tenants.filter((tenant: string) => tenant !== domainId);
        return {
            primary: domainId,
            secondary: secondary
        }
    }
}

export const getUserConfig = (user : User | undefined): UserData => {
    let sessionUser: UserData
    if(!user || !user.email || !user.app_metadata.user_type || !user.app_metadata.tenants) {
        return sessionUser = {
            type: UserTypes.Anonymous
        }
    } else {
        const metaData = user.app_metadata
        if(metaData.tenants.length === 0 && metaData.user_type === 'consumer'){
            return sessionUser = {
                type: UserTypes.Consumer
            } 
        } else if (metaData.tenants.length >= 1 && metaData.user_type === 'business'){
            const tenantConfig = getTenantConfig(user)
            return sessionUser = {
                type: UserTypes.Business,
                tenants: tenantConfig
            }
        }
    }
    return sessionUser = {
        type: UserTypes.Anonymous
    }
}