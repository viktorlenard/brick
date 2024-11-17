import { PageParams } from "@/app/types/pages"
import { Button } from "@/app/components/Button"

const TenantListingsPage = async ({ params } : PageParams) => {
    const { tenant } = await params

    return(
        <>
            <h1>Listings</h1>

            <div className="flex">
                <Button dark={true} href={`/${tenant}/listings/new`}>Create new</Button>
            </div>
        </>
    )
}

export default TenantListingsPage