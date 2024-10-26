import { PropsWithChildren } from "react"

import { Nav } from "./Nav"
import { UserName } from "./UserName"

export const DashboardLayout = (pageProps : PropsWithChildren) => {

    return(
        <>
            <section>
                <UserName userName="Viktor" tenantName="Fake Business"/>
                <Nav />
            </section>
            <section>{pageProps.children}</section>
        </>
    )
}

export default DashboardLayout