import { Nav } from "./Nav"
import { UserName } from './UserName'
import { PageParams } from "../types/pages"

export const NavBar = () => {
    
    return(
        <>
            <section>
                <Nav />
                <UserName />
            </section>
        </>
    )
}