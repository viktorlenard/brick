import { Nav } from "./Nav"
import { UserName } from './UserName'
import { TenantData } from "../types/tenant"

interface TopBarProps {
    tenant?: TenantData
}
export const NavBar = ({ tenant } : TopBarProps) => {

    return(
        <>
            <section>
                <Nav />
                <UserName userName="Viktor" tenant={tenant}/>
            </section>
        </>
    )
}