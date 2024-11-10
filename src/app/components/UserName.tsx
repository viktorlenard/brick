import { getUtilClient } from "../utils/supabase/cookiesUtilClient"
import { PropsWithChildren } from "react"
import { TenantData } from "../types/tenant"
interface UserNameProps {
    tenant?: string
}

export const UserName = async ({ tenant } : UserNameProps) => {

    let tenantName = undefined
    let userName = undefined
    const supabase = await getUtilClient()
    const user = await supabase.auth.getUser()
    const sessionUserId = user.data?.user?.id
    if(sessionUserId){
        const { data, error } = await supabase.from('service_users').select("full_name").eq('supabase_user', sessionUserId).single()
        if(error){
            console.log(error)
        }
        userName = data?.full_name
    }
    if(tenant){
        const { data, error } = await supabase.from('tenants').select("name").eq('id', tenant).single()
        if(error){
            console.log(error)
        }
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