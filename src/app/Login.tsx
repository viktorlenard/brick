'use client'

import { useRef } from "react"
import { useRouter } from "next/navigation"
import { getClient } from "./utils/supabase/browserClient"

interface LoginProps {
    isPasswordLogin: boolean,
}

const labelStyle = 'flex flex-col items-center'


export const Login = ({ isPasswordLogin } : LoginProps ) => {

    const router = useRouter()
    const supabase = getClient()
    
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    return(
        <div className='flex '>
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
                <div>
                    <button className='outline outline-1 px-7 hover:bg-dark hover:text-light' type="submit">
                        Sign in with {isPasswordLogin ? " Password" : " Magic Link"}
                    </button>
                </div>
            </form>
        </div>
    )
}