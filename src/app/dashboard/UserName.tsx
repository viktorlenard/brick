import { PropsWithChildren } from "react"

interface UserNameProps {
    userName: string,
    tenantName?: string
}

export const UserName = ({ userName, tenantName } : UserNameProps) => {

    return(
        <>
            <h1>{userName}</h1>
            {tenantName && <h3>{tenantName}</h3>}
        </>
    )
}

export default UserName