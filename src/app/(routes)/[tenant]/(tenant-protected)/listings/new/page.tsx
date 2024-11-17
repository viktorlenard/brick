'use client'
import { NavBar } from "@/app/components/NavBar"
import { PageParams } from "@/app/types/pages"
import { Button } from "@/app/components/Button"

const NewListingPage = () => {
    return(
        <>
            <div className='flex flex-col items-center justify-center min-h-64 w-full h-full'>
            <form onSubmit={(event) => {
                event.preventDefault(); alert('LISTING CREATED! NOOOOT!')}} 
                className='flex flex-col items-center min-w-48'>
                <h1 className='font-bold underline'>List a new property</h1>
                <p className='mb-2 font-bold text-accent'>{`(In development)`}</p>
                <label>Listing Type</label>
                <select className='mb-2' name='Type' id='listing_type' required>
                    <option value={'rental'}>Rental</option>
                    <option value={'freehold'}>Freehold</option>
                    <option value={'leasehold'}>Leasehold</option>
                </select>
                <label>Postcode</label>
                <input className='mb-2' id='postcode'></input>
                <Button dark={true}>Submit</Button>
            </form>
            </div>
        </>
    )
}

export default NewListingPage