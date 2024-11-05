import { PropsWithChildren } from "react"

import { Nav } from "./listings/Nav"
import { UserName } from "./listings/UserName"

export const ListingsLayout = (pageProps : PropsWithChildren) => {

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

export default ListingsLayout