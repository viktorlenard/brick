'use client'
import { getClient } from "@/app/utils/supabase/browserClient"
import { useState, useRef } from "react"
import { Button } from "@/app/components/Button"
import Link from "next/link"

export const ChangePasswordPage = () => {

    const [passwordChanged, setPasswordChanged] = useState<boolean>(false)
    const passwordRef = useRef<HTMLInputElement>(null);
    const verifyRef = useRef<HTMLInputElement>(null);
    const supabase = getClient()

    return(
        <div className='flex flex-col items-center justify-center min-w-full'>
            <h3 className='font-bold mb-8'>Password recovery</h3>
            {passwordChanged ? (
                <div className='flex flex-col items-center justify-center['>
                    <h3 className='font-bold mb-8'>Password updated successfully!</h3>
                    <Link className='text-xs hover:underline' role='button' href={'/consumer/listings'}>Back to listings</Link>
                </div>
            ) : (
                <form onSubmit={
                    (event) => {event.preventDefault();
                    const passwordValue = passwordRef.current?.value.trim();
                    const verifyValue = verifyRef.current?.value.trim();
                    
                    if (!passwordValue || !verifyValue) {
                        alert("Please fill out both fields.");
                        return;
                    }

                    if (passwordValue !== verifyValue) {
                        alert("Passwords do not match!");
                        return;
                    }

                    supabase.auth.updateUser({password: passwordValue}).then((result) => {
                        if (result.error) {
                            alert(result.error.message);
                        } else {
                            if (passwordRef.current) passwordRef.current.value = "";
                            if (verifyRef.current) verifyRef.current.value = "";
                            setPasswordChanged(true)
                        }
                    })
                }}>
                    <div className='flex flex-col'>
                        <label>New Password</label>
                        <input className='min-w-72 mb-4' ref={passwordRef} type='password' required id="password"></input>
                        <label>Verify</label>
                        <input className='min-w-72 mb-4' ref={verifyRef} type='password' required id="verify"></input>
                        <Button dark={true} type="submit">Change Password</Button>
                    </div>
                </form>    
            )}
        </div>
    )
}

export default ChangePasswordPage