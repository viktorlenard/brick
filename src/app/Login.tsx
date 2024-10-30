'use client'

import { useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getClient } from "./utils/supabase/browserClient"
import Link from "next/link"

import { Button } from "./components/Button"

interface LoginProps {
    isPasswordLogin: boolean,
}

export const labelStyle = 'flex flex-col items-left font-mono font-bold text-sm mt-4'


export const Login = ({ isPasswordLogin } : LoginProps ) => {
    
    const router = useRouter()
    const supabase = getClient()

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    // Subscribe to authStateChange with useEffect. 
    // If the user is signed out, router.push("/listings"). Happens when using OTP
    useEffect(() => {
        const { data: { subscription }} = supabase.auth.onAuthStateChange(
            (event, session) => {
                if(event === 'SIGNED_IN'){
                    router.push("/listings");
                }
            })
        // Cleanup
        return () => subscription.unsubscribe()
    }, [])

    return(
        <div className='flex items-center align-center flex-col'>
            <h1 className='font-black text-4xl leading-none'>BRICK:</h1>
            <h3 className='font-bold text-accent leading-none'>in development</h3>
            <form className='flex flex-col items-center' 
                action={isPasswordLogin ? '/auth/password-login/' : '/auth/magic-link'} method='POST' 
                onSubmit={(e) => {isPasswordLogin && e.preventDefault();
                    const email = emailInputRef.current?.value ?? '';
                    const password = passwordInputRef.current?.value ?? ''; 
                    if( isPasswordLogin && email && password ){
                        supabase.auth.signInWithPassword({ 
                            email: email, 
                            password: password}).then((result) => {
                                !result.data?.user && alert("Could not sign in");})}}}>
                <div className='min-h-32 max-h-32'>
                    <div>
                        <label className={labelStyle}>
                            Email
                            <input name="email" type="email" className='text-dark' required ref={emailInputRef} />
                        </label>
                    </div>
                    {isPasswordLogin && (
                        <div>
                            <label className={labelStyle}>
                                Password
                                <input name="password" type="password" className='text-dark' required ref={passwordInputRef} />
                            </label>
                        </div>
                    )}
                </div>
                {!isPasswordLogin && (
                    <input type="hidden" name="type" value="login" />
                )}
                <div className='mt-4'>
                    <Button type="submit" size={'s'} dark={true}>Sign in</Button>
                </div>
                <div className='mt-4 flex flex-col items-center'>
                    {!isPasswordLogin && (
                        <Link href={{pathname: '/', query:{ magicLink: 'no' }}} 
                        className='text-xs hover:underline' role='button' >Sign in with password</Link>
                    )}
                    {isPasswordLogin && (
                        <Link href={{pathname: '/', query:{ magicLink: 'yes' }}} 
                        className='text-xs hover:underline' role='button' >Sign in with Magic Link</Link>
                    )}
                    <Link href={'/recovery'}  className='text-xs hover:underline mt-4' >Unable to sign in</Link>
                </div>
            </form>
        </div>
    )
}