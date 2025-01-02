import { Button } from "@/app/components/Button"
import { ListingList } from "@/app/components/ListingList"
import { SearchParams } from "next/dist/server/request/search-params"
import { ListingFilter } from "@/app/components/ListingFilter"
import { Suspense } from 'react'
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
            <Suspense fallback={<div>Loading...</div>}>
                {/* @ts-ignore */}
                <ListingList params={searchParams} tenant={tenant}/>
            </Suspense>
        </>
    )
}

export default TenantListingsPage