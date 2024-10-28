'use client'

import { useRef } from "react"
import { useRouter } from "next/navigation"
import { getClient } from "./utils/supabase/browserClient"
import Link from "next/link"

import { Button } from "./components/Button"

interface LoginProps {
    isPasswordLogin: boolean,
}

const labelStyle = 'flex flex-col items-left font-mono font-bold text-sm mt-4'


export const Login = ({ isPasswordLogin } : LoginProps ) => {
    
    const router = useRouter()
    const supabase = getClient()

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    return(
        <div className='flex items-center align-center flex-col'>
            <h1 className='font-black text-4xl leading-none'>BRICK:</h1>
            <h3 className='font-bold text-accent leading-none'>in development</h3>
            {/* No JS, POST to route handler. Else signOut() */}
            <form action='/auth/password-login/' method='POST' 
                onSubmit={(e) => {e.preventDefault();
                    const email = emailInputRef.current?.value ?? '';
                    const password = passwordInputRef.current?.value ?? ''; 
                    if( isPasswordLogin && email && password ){
                        supabase.auth.signInWithPassword({ 
                            email: email, 
                            password: password}).then((result) => {
                                if(result.data?.user){
                                    router.push("/listings");
                                } else {
                                    alert("Could not sign in")
                                }
                            }
                        )
                    } else {
                        alert('Magic')}}} className='flex flex-col items-center'>
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
                <div className='mt-4'>
                    <Button type="submit" size={'s'} dark={true}>Sign in</Button>
                </div>
                <div className='mt-4'>
                    {!isPasswordLogin && (
                        <Link href={{pathname: '/', query:{ magicLink: 'no' }}} 
                        className='text-xs hover:underline' role='button' >Sign in with password</Link>
                    )}
                    {isPasswordLogin && (
                        <Link href={{pathname: '/', query:{ magicLink: 'yes' }}} 
                        className='text-xs hover:underline' role='button' >Sign in with Magic Link</Link>
                    )}
                </div>
            </form>
        </div>
    )
}