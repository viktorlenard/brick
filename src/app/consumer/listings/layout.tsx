import { PropsWithChildren } from "react"

import { Nav } from "./Nav"
import { UserName } from "./UserName"

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