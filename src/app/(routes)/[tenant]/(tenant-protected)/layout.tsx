import { NavBar } from "@/app/components/NavBar"
import { PropsWithChildren } from "react"

const TenantLayout = ( { children } : PropsWithChildren ) => {
    return(
        <section>
            <NavBar />
            <section>{children}</section>
        </section>
    )

}

export default TenantLayout