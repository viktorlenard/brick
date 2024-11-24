'use client'
import { useRef } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const ListingFilter = ({ tenant } : {tenant : string}) => {
    
    const searchInputRef = useRef<HTMLInputElement>(null)
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const search = searchInputRef.current?.value
        const updatedParams = new URLSearchParams(searchParams);
        if(search) {
            updatedParams.set("search", search);
            updatedParams.set("page", "1");
            updatedParams.set("r", Math.random().toString());
        } else {
            updatedParams.delete("search");
        }
        router.push(pathname + "?" + updatedParams.toString());
    }

    return(
        <div className='flex justify-center my-4'>
            <form onSubmit={onSubmit}>
                <div className='flex justify-center items-center'>
                    <input 
                        className='min-w-64 py-2 rounded-full px-4 bg-white drop-shadow-xl text-dark placeholder-dark/80'
                        type="search" 
                        ref={searchInputRef}
                        id='search'
                        name='search'
                        placeholder="Search listings..."
                        // required
                    />
                    <button className='rounded-sm ml-8 py-1 px-4 bg-dark text-light'>Search</button>
                </div>
            </form>
        </div>
    )
}