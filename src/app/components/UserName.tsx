import { getUtilClient } from "../utils/supabase/cookiesUtilClient"

export const UserName = async ({ tenant } : { tenant : string }) => {
    
    let sessionUserId
    let userName
    let tenantName
    const tenantId = tenant
    
    const supabase = await getUtilClient()
    const { data, error } = await supabase.auth.getUser()
    if(data.user){
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
                .eq('id', tenantId)
                .single()
        ])
        const { data: userData } = userResult;
        const { data: tenantData } = tenantResult;
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