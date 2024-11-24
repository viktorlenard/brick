'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getClient } from "../utils/supabase/browserClient";
import { Button } from "./Button";

export const Nav = ({ tenant } : { tenant : string }) => {

    const supabase = getClient()
    const router = useRouter()

    // Subscribe to authStateChange with useEffect. If the user is signed out, router.push("/")
    useEffect(() => {
        const { data: { subscription }} = supabase.auth.onAuthStateChange(
            (event, session) => {
                if(event === 'SIGNED_OUT'){
                    router.push("/");
                }
            })
        // Cleanup
        return () => subscription.unsubscribe()
    }, [])

    return(
        <>
            <div className='flex min-h-12 flex-row items-center justify-between border-0 border-b-2 border-accent text-xl'>
                <div onClick={() => router.push(tenant ? `/${tenant}/dashboard` : '/dashboard')} 
                className='min-w-24 py-2 cursor-pointer hover:text-accent transition-all'>
                    <h1 className='font-black '>BRICK:</h1>
                </div>
                <Button dark={true} href="/logout" prefetch={false} 
                    onClick={(event) => {
                        event.preventDefault(); 
                        supabase.auth.signOut()}}>Logout
                </Button>
            </div>
        </>
    )
}

export default Nav

// Alternative, less sexy solution to signOut()
// supabase.auth.signOut().then(() => router.push('/')