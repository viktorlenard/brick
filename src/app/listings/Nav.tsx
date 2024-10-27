'use client'

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getClient } from "../utils/supabase/browserClient";

export const Nav = () => {

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
            <div>
                <h1>THE NAV BAR</h1>
                <Link role="button" href="/logout" prefetch={false} 
                    onClick={(event) => {
                        event.preventDefault(); 
                        supabase.auth.signOut()}}>Logout
                </Link>
            </div>
        </>
    )
}

export default Nav

// Alternative, less sexy solution to signOut()
// supabase.auth.signOut().then(() => router.push('/')