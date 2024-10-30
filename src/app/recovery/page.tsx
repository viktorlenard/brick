'use client'
import Link from "next/link"
import { useRef } from "react"
import { labelStyle } from "../Login"
import { Button } from "../components/Button"
import { getClient } from "../utils/supabase/browserClient"

export const RecoveryPage = () => {

    const emailInputRef = useRef<HTMLInputElement>(null)

    const supabase = getClient()

    return(
        <div className='flex items-center justify-center flex-col min-h-dvh'>
            <h1 className='font-black text-4xl leading-none'>BRICK:</h1>
            <h3 className='font-bold text-accent leading-none'>Password recovery</h3>
            <form className='flex flex-col items-center'
                action={'/auth/magic-link/'} method='POST'>
                <div>
                    <div>
                        <label className={labelStyle}>
                            Email
                            <input name="email" type="email" className='text-dark' required ref={emailInputRef} />
                        </label>
                    </div>
                </div>
                <input type="hidden" name="type" value="recovery" />
                <div className='mt-4'>
                    <Button type="submit" size={'s'} dark={true}>Reset password</Button>
                </div>
            </form>
            <div className='mt-4 flex flex-col items-center'>
                <Link href={'/'}  className='text-xs hover:underline mt-4' >Go back</Link>
            </div>
        </div>
    )
}

export default RecoveryPage