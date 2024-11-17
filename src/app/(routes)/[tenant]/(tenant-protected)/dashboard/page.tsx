import { PageParams } from "@/app/types/pages"
import { Button } from "@/app/components/Button"

const DashboardPage = async ({ params }: PageParams) => {

    const { tenant } = await params

    return(
        <>  
            <h1>This is the Dashboard of <span>{tenant}</span></h1>
            <div className='flex'>
                <Button dark={true} href={`/${tenant}/listings`}>Listings</Button>
            </div>
        </>
    )
}

export default DashboardPage