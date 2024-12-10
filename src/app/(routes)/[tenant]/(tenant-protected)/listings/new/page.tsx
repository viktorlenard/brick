'use client'
import { Button } from "@/app/components/Button"
import { useState, useRef, useEffect } from "react"
import { validateUkPostcode } from "@/app/utils/listing-helpers"
import { getClient } from "@/app/utils/supabase/browserClient"
import { useParams, useRouter } from "next/navigation"
import { Tables, type Database } from "../../../../../../../database.types"
import { ListingType } from "@/app/types/listings"
import { isValidTenant } from "@/tenant_map"
import { AssigneeSelect } from "@/app/components/AssigneeSelect"

type ListingRow = Database['public']['Tables']['listings']['Row'];

const NewListingPage = () => {
    const [assignee, setAssignee] = useState<number | null>(null);

    useEffect(() => {
        console.log(assignee)
    }, [assignee])

    const router = useRouter()
    const { tenant } = useParams()
    const supabase = getClient()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const listingTypeRef = useRef<HTMLSelectElement>(null)
    const postcodeRef = useRef<HTMLInputElement>(null)
    const pcmRef = useRef<HTMLInputElement>(null)
    const depositRef = useRef<HTMLInputElement>(null)
    const bedroomRef = useRef<HTMLInputElement>(null)
    const bathroomRef = useRef<HTMLInputElement>(null)
    const sizeSqmRef = useRef<HTMLInputElement>(null)
    const furnishedRef = useRef<HTMLSelectElement>(null)
    const minTenancyRef = useRef<HTMLInputElement>(null)
    const availableFromRef = useRef<HTMLInputElement>(null)
    const councilTaxBandRef = useRef<HTMLSelectElement>(null)
    const heatingTypeRef = useRef<HTMLInputElement>(null)
    const hasGardenRef = useRef<HTMLInputElement>(null)
    const parkingTypeRef = useRef<HTMLInputElement>(null)
    const allowsPetsRef = useRef<HTMLInputElement>(null)
    const epcRatingRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLInputElement>(null)

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
                const listing_type = listingTypeRef.current?.value as ListingType
                const postcode = postcodeRef.current?.value.toUpperCase();
                const price_pcm = pcmRef.current?.value
                const deposit = depositRef.current?.value
                const bedrooms = bedroomRef.current?.value
                const bathrooms = bathroomRef.current?.value
                const size_sqm = sizeSqmRef.current?.value
                const is_furnished = furnishedRef.current?.value
                const available_from = availableFromRef.current?.value
                const min_tenancy_months = minTenancyRef.current?.value
                const council_tax_band = councilTaxBandRef.current?.value

                if(listing_type && postcode && validateUkPostcode(postcode) && isValidTenant(tenant)) {
                    setIsLoading(true)
                    const listingData: Partial<Database["public"]["Tables"]["listings"]["Row"]> = {
                        listing_type,
                        postcode,
                        tenant
                    }
                    if (price_pcm) listingData.price_pcm = parseFloat(price_pcm) as ListingRow['price_pcm']
                    if (deposit) listingData.deposit = parseFloat(deposit) as ListingRow['deposit']
                    if (bedrooms) listingData.bedrooms = parseFloat(bedrooms) as ListingRow['bedrooms']
                    if (bathrooms) listingData.bathrooms = parseFloat(bathrooms) as ListingRow['bathrooms']
                    if (size_sqm) listingData.size_sqm = parseFloat(size_sqm) as ListingRow['size_sqm']
                    if (is_furnished === '') {
                        listingData.is_furnished = null;
                    } else {
                        listingData.is_furnished = (is_furnished === 'true') as ListingRow['is_furnished']
                    }
                    if (available_from) listingData.available_from = available_from as ListingRow['available_from']
                    if (min_tenancy_months) listingData.min_tenancy_months = parseFloat(min_tenancy_months) as ListingRow['min_tenancy_months']
                    if (council_tax_band) listingData.council_tax_band = council_tax_band as ListingRow['council_tax_band']
                    if (assignee) listingData.assignee = assignee as ListingRow['assignee']

                    supabase
                        .from('listings')
                        .insert(listingData)
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
                <label>Assign to user</label>
                <AssigneeSelect
                    tenant={tenant as string}
                    onValueChanged={(v) => setAssignee(v)} />
                <label>Listing Type</label>
                <select disabled={isLoading} ref={listingTypeRef} className='mb-2' name='Type' id='listing_type' required>
                    <option value={'rental'}>Rental</option>
                    <option value={'freehold'}>Freehold</option>
                    <option value={'leasehold'}>Leasehold</option>
                </select>
                <label>Postcode</label>
                <input required disabled={isLoading} ref={postcodeRef} className='mb-2' id='postcode' style={{ textTransform: 'uppercase' }} maxLength={8}></input>
                <label>{`Price (PCM)`}</label>
                <input required={false} type='number' max={99999} disabled={isLoading} ref={pcmRef} className='mb-2' id='price_pcm'></input>
                <label>Deposit</label>
                <input required={false} type='number' max={99999} disabled={isLoading} ref={depositRef} className='mb-2' id='deposit'></input>
                <label>Number of Bedrooms</label>
                <input required={false} type='number' max={20} disabled={isLoading} ref={bedroomRef} className='mb-2' id='bedrooms'></input>
                <label>Number of Bathrooms</label>
                <input required={false} type='number' max={20} disabled={isLoading} ref={bathroomRef} className='mb-2' id='bathrooms'></input>
                <label>Size</label>
                <input required={false} type='number' max={9999} disabled={isLoading} ref={sizeSqmRef} className='mb-2' id='size_sqm'></input>
                <label>Furnished</label>
                <select disabled={isLoading} ref={furnishedRef} className='mb-2' name='furnished' id='is_furnished'>
                    <option value=''>Select an option</option>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                </select>
                <label>{`Minimum tenancy (months)`}</label>
                <input required={false} type='number' max={99} disabled={isLoading} ref={minTenancyRef} className='mb-2' id='min_tenancy_months'></input>
                <label>Available From</label>
                <input required={false} type='date' disabled={isLoading} ref={availableFromRef} className='mb-2' id='available_from'></input>
                <label>Council Tax Band</label>
                <select disabled={isLoading} ref={councilTaxBandRef} className='mb-2' name='council_tax_band' id='council_tax_band'>
                    <option value=''>Select an option</option>
                    <option value='a'>A</option>
                    <option value='a'>B</option>
                    <option value='c'>C</option>
                    <option value='d'>D</option>
                    <option value='e'>E</option>
                    <option value='f'>F</option>
                    <option value='g'>G</option>
                    <option value='h'>H</option>
                    <option value='i'>I</option>
                </select>
                <Button disabled={isLoading} dark={true}>Submit</Button>
            </form>
            </div>
        </>
    )
}

export default NewListingPage