import { Nav } from "./Nav"
import { UserName } from './UserName'
import { PageParams } from "../types/pages"

export const NavBar = ({ tenant } : { tenant : string } ) => {
    
    return(
        <>
            <section>
                <Nav />
                <UserName tenant={tenant}/>
            </section>
        </>
    )
}