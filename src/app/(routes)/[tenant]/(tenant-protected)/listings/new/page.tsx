'use client'
import { Button } from "@/app/components/Button"
import { useState, useRef, useEffect } from "react"
import { validateUkPostcode } from "@/app/utils/listing-helpers"
import { getClient } from "@/app/utils/supabase/browserClient"
import { useParams, useRouter } from "next/navigation"

const NewListingPage = () => {
    
    const router = useRouter()
    const { tenant } = useParams()
    const supabase = getClient()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const listingTypeRef = useRef<HTMLSelectElement>(null)
    const postcodeRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        // router.prefetch(`/${tenant}/listings/details/${data.id}`);
        router.prefetch(`/${tenant}/listings/details`);
    }, [router]);

    const postcodeRegEx = '^(([A-Z]{1,2}\d[A-Z\d]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?\d[A-Z]{2}|BFPO ?\d{1,4}|(KY\d|MSR|VG|AI)[ -]?\d{4}|[A-Z]{2} ?\d{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$'
    return(
        <>
            <div className='flex flex-col items-center justify-center min-h-64 w-full h-full'>
            <form onSubmit={(event) => {
                event.preventDefault(); 
                const listing_type = listingTypeRef.current?.value
                const postcode = postcodeRef.current?.value
                if(listing_type && postcode && validateUkPostcode(postcode)) {
                    setIsLoading(true)
                    supabase
                        .from('listings')
                        .insert({
                            listing_type,
                            postcode,
                            tenant,
                        })
                        .select()
                        .single()
                        .then(({ error, data }) => {
                            if(error) {
                                setIsLoading(false)
                                console.log(error)
                                alert('COULD NOT CREATE LISTING!')
                            } else {
                                router.push(`/${tenant}/listings/details/${data.id}`)
                            }

                        })
                }
            }}
                className='flex flex-col items-center min-w-48'>
                <h1 className='font-bold underline'>List a new property</h1>
                <p className='mb-2 font-bold text-accent'>{`(In development)`}</p>
                <label>Listing Type</label>
                <select disabled={isLoading} ref={listingTypeRef} className='mb-2' name='Type' id='listing_type' required>
                    <option value={'rental'}>Rental</option>
                    <option value={'freehold'}>Freehold</option>
                    <option value={'leasehold'}>Leasehold</option>
                </select>
                <label>Postcode</label>
                <input disabled={isLoading} ref={postcodeRef} className='mb-2' id='postcode'></input>
                <Button disabled={isLoading} dark={true}>Submit</Button>
            </form>
            </div>
        </>
    )
}

export default NewListingPage