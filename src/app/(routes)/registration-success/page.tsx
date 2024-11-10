import { SearchParams } from "next/dist/server/request/search-params"

const RegSuccessPage = async ( { searchParams } : { searchParams : SearchParams } ) => {
    
    const { email } = await searchParams;

    return(
        <>{email}</>
    )
}

export default RegSuccessPage