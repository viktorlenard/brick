import { PropsWithChildren } from "react"

import { Nav } from "../components/Nav"
import { UserName } from "./listings/UserName"

export const DefaultLayout = (pageProps : PropsWithChildren) => {

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

export default DefaultLayout