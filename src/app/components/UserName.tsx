import { PropsWithChildren } from "react"

interface UserNameProps {
    userName: string,
    tenantName?: string
}

export const UserName = ({ userName, tenantName } : UserNameProps) => {

    return(
        <div className='flex flex-col my-2 items-end'>
            <h1 className='font-bold'>{userName}</h1>
            {tenantName && <h3 className='leading-none text-sm'>{tenantName}</h3>}
        </div>
    )
}

export default UserName