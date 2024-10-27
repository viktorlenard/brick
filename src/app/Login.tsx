'use client'

import { useRef } from "react"
import { useRouter } from "next/navigation"
import { getClient } from "./utils/supabase/browserClient"

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
            {/* <h1 className='font-black text-4xl'>BRICK&#91;&#93;</h1> */}
            <h1 className='font-black text-4xl leading-none'>BRICK:</h1>
            <h3 className='font-bold text-accent leading-none'>in development</h3>
            <form onSubmit={(e) => {e.preventDefault();
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
                <div>
                    <label className={labelStyle}>
                        Email
                        <input type="email" className='text-dark' required ref={emailInputRef} />
                    </label>
                </div>
                <div>
                    <label className={labelStyle}>
                        Password
                        <input type="password" className='text-dark' required ref={passwordInputRef} />
                    </label>
                </div>
                <div className='mt-4'>
                    <Button type="submit" size={'s'} dark={true}>Sign in</Button>
                </div>
                <div>
                    <h3 className='text-xs'>{isPasswordLogin ? " Password" : " Magic Link"}</h3>
                </div>
            </form>
        </div>
    )
}