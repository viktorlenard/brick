import { NavBar } from "@/app/components/NavBar"
import { TenantData } from "@/app/types/tenant"

type DashboardPageProps = {
    params: {
      tenant: string
    }
}

const DashboardPage = async ({ params }: DashboardPageProps) => {

    const { tenant } = await params
    console.log(tenant)

    return(
        <>  
            <NavBar tenant={tenant}/>
            <h1>This is the Dashboard of <span>{tenant}</span></h1>
        </>
    )
}

export default DashboardPage