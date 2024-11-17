import { getUtilClient } from "../utils/supabase/cookiesUtilClient"
import { getUserConfig } from "../utils/user-helpers"

export const UserName = async () => {
    let sessionUser
    let sessionUserId
    let userName
    let tenantName
    
    const supabase = await getUtilClient()
    const { data, error } = await supabase.auth.getUser()
    if(data.user){
        sessionUser = getUserConfig(data.user)
        sessionUserId = data.user.id
    }

    if(sessionUserId) {
        const [userResult, tenantResult] = await Promise.all([
            supabase
                .from('service_users')
                .select('full_name')
                .eq('supabase_user', sessionUserId)
                .single(),
            supabase
                .from('tenants')
                .select('name')
                .eq('id', sessionUser?.tenants?.primary)
                .single()
        ])
        const { data: userData, error: userError } = userResult;
        const { data: tenantData, error: tenantError } = tenantResult;
        if(userData){
            userName = userData?.full_name
        }
        if(tenantData){
            tenantName = tenantData.name
        }
    }

    return(
        <div className='flex flex-col my-2 items-end'>
            <h1 className='font-bold'>{userName}</h1>
            {tenantName && <h3 className='leading-none text-sm'>{tenantName}</h3>}
        </div>
    )
}

export default UserName