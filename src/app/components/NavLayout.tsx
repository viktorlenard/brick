import { PropsWithChildren } from "react"

import { Nav } from "../components/Nav"
import { UserName } from './UserName'

export const NavLayout = (pageProps : PropsWithChildren) => {

    return(
        <>
            <section>
                <Nav />
                <UserName userName="Viktor" tenantName="Fake Business"/>
            </section>
            <section>{pageProps.children}</section>
        </>
    )
}