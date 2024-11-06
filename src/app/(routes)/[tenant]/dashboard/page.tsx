import { SearchParams } from "next/dist/server/request/search-params"
import { NavLayout } from "@/app/components/NavLayout"

type DashboardPageProps = {
    params: {
      tenant: string
    }
}

const DashboardPage = async ({ params }: DashboardPageProps) => {

    const { tenant } = await params
    console.log(tenant)

    return(
        <NavLayout>
            <h1>This is the Dashboard of <span>{tenant}</span></h1>
        </NavLayout>
    )
}

export default DashboardPage