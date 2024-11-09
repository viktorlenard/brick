import { getUtilClient } from "../utils/supabase/cookiesUtilClient"
import { PropsWithChildren } from "react"
import { TenantData } from "../types/tenant"
interface UserNameProps {
    userName: string,
    tenant?: string
}

export const UserName = async ({ userName, tenant } : UserNameProps) => {

    let tenantName = undefined
    const supabase = await getUtilClient()
    if(tenant){
        const { data, error } = await supabase.from('tenants').select("name").eq('id', tenant).single()
        console.log(data)
        if (data){
            tenantName = data.name
        }
    }

    return(
        <div className='flex flex-col my-2 items-end'>
            <h1 className='font-bold'>{userName}</h1>
            {tenant && <h3 className='leading-none text-sm'>{tenantName}</h3>}
        </div>
    )
}

export default UserName