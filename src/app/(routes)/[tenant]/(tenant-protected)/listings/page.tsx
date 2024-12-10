import { Button } from "@/app/components/Button"
import { ListingList } from "@/app/components/ListingList"
import { SearchParams } from "next/dist/server/request/search-params"
import { ListingFilter } from "@/app/components/ListingFilter"
export const dynamic = "force-dynamic"

const TenantListingsPage = async ({ params, searchParams} : { params: { tenant: string }, searchParams: SearchParams }) => {
    const { tenant } = await params

    return(
        <>
            <h1>Listings</h1>

            <div className="flex">
                <Button className='mr-2' dark={true} href={`/${tenant}/dashboard`}>Dashboard</Button>
                <Button className='bg-green-600 font-bold' dark={true} href={`/${tenant}/listings/new`}>Create new</Button>
            </div>
            <ListingFilter tenant={tenant}/>
            <ListingList params={searchParams} tenant={tenant}/>
        </>
    )
}

export default TenantListingsPage

{/* <Suspense 
    fallback={
        <div className='flex items-center justify-center min-w-full min-h-full'>
            <h1>Loading more tickets</h1>
        </div>
    }
    key={JSON.stringify(pageParams)}>
    <ListingList params={searchParams} tenant={tenant}/>
</Suspense> */}