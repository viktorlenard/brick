import { PropsWithChildren } from "react"
import { TenantData } from "../types/tenant"
interface UserNameProps {
    userName: string,
    tenant: TenantData
}

export const UserName = ({ userName, tenant } : UserNameProps) => {

    return(
        <div className='flex flex-col my-2 items-end'>
            <h1 className='font-bold'>{userName}</h1>
            {tenant?.name && <h3 className='leading-none text-sm'>{tenant.name}</h3>}
        </div>
    )
}

export default UserName