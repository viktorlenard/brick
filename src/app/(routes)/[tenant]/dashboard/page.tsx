import { SearchParams } from "next/dist/server/request/search-params"

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
            <h1>This is the Dashboard of <span>{tenant}</span></h1>
        </>
    )
}

export default DashboardPage