import { SearchParams } from "next/dist/server/request/search-params"

export type PageParams = {
    searchParams: SearchParams,
    params: {
        tenant: string | undefined
    }
}