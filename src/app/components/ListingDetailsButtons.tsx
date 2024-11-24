'use client'
import { Button } from "./Button"
import { getClient } from "../utils/supabase/browserClient"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"

export const ListingDetailsButtons = ({ isAuthor, tenant, id, page } : {isAuthor : boolean, tenant : string, id: number, page: string | string[] | undefined}) => {

    const deleteInputRef = useRef<HTMLInputElement>(null)
    const supabase = getClient()
    const router = useRouter()
    const [confirming, setConfirming] = useState<boolean>(false)

    const submitDeletion = (id : number) => {
        if (deleteInputRef.current?.value === 'DELETE') {
            supabase
                .from("listings")
                .delete()
                .eq("id", id)
                .then(() => {
                    router.push(`/${tenant}/listings`);
                })
        }
    }

    console.log(confirming)

    return(
        <div>
            {confirming && (
                <div className="tranistion-all flex min-w-full justify-center min-h-full">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        submitDeletion(id)
                    }}
                        className='flex flex-col items-center justify-center min-w-72 min-h-36 mb-8'>
                        <div className='flex flex-col items-center mb-4'>
                            <h1 className='font-bold'>Warning!</h1>
                            <h3>You're about to delete this listing.</h3>
                            <h3>Type <span className='font-black text-black'>DELETE</span> in the field below to confirm.</h3>
                            <input required className='text-center' placeholder='Confirm here' ref={deleteInputRef}></input>
                        </div>
                        <div>
                            <Button id='submit' type='submit' className='bg-red-600 font-bold mx-2' dark={true}>Confirm</Button>
                            <Button dark={true} onClick={() => setConfirming(false)}>Cancel</Button>
                        </div>
                    </form>
                </div>
            )}
            <div className="flex min-w-64">
                <Button dark={true} href={{pathname: `/${tenant}/listings`, query: { page }}}>
                    Back
                </Button>
            {isAuthor && (
                <Button onClick={() => setConfirming(true)} className='bg-red-600 font-bold mx-2' dark={true} >
                    Delete
                </Button>
                  )}
                  </div>
        </div>
    )
}