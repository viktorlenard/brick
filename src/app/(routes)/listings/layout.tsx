import { NavLayout } from "@/app/components/NavLayout"
import { PropsWithChildren } from "react"

const ListingsLayout = (pageProps : PropsWithChildren) => {

    return(
        <NavLayout>
            <section>{pageProps.children}</section>
        </NavLayout>
    )
}

export default ListingsLayout