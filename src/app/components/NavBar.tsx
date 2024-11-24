import { Nav } from "./Nav"
import { UserName } from './UserName'
import { PageParams } from "../types/pages"

export const NavBar = ({ tenant } : { tenant : string } ) => {
    const tenantId = tenant
    return(
        <>
            <section>
                <Nav tenant={tenantId}/>
                <UserName tenant={tenant}/>
            </section>
        </>
    )
}