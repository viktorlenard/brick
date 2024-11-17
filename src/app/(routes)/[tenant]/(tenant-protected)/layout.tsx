import { NavBar } from "@/app/components/NavBar"
import { PropsWithChildren } from "react"
import { PageProps } from "../../../../../.next/types/app/layout"

type TenantLayoutProps = {
    children: React.ReactNode
    params: {
      tenant: string
    }
}

const TenantLayout = async ( { children, params }: TenantLayoutProps) => {
    
    const { tenant } = await params
    const serializedTenant = String(tenant)
    
    return(
        <section>
            <NavBar tenant={serializedTenant}/>
            <section>{children}</section>
        </section>
    )

}

export default TenantLayout