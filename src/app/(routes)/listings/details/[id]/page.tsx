// import { use } from "react"

interface ListingProps {
    params: {
        id: string
    }
}

const ListingDetailsPage = async ({ params } : ListingProps) => {

    const { id } = await params
    console.log(id)
    
    return(
        <>
            Listing id {id}
        </>
    )
}

export default ListingDetailsPage;