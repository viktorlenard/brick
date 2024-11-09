import { NavBar } from "@/app/components/NavBar"
import { PropsWithChildren } from "react"

const ListingsLayout = ( { children } : PropsWithChildren ) => {
    return(
        <section>
            <NavBar />
            <section>{children}</section>
        </section>
    )

}

export default ListingsLayout