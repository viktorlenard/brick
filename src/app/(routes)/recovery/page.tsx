'use client'
import Link from "next/link"
import { useRef } from "react"
import { Button } from "../../components/Button"

type RecoveryProps = {
    tenant?: string 
}

export const RecoveryPage = ({ tenant }: RecoveryProps) => {

    console.log(tenant)
    const emailInputRef = useRef<HTMLInputElement>(null)
    const labelStyle = 'flex flex-col items-left font-mono font-bold text-sm mt-4'
    const url = tenant ? `/${tenant}/login` : '/login'
    console.log(url)

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
                <Link href={url} className='text-xs hover:underline mt-4'>Go back</Link>
            </div>
        </div>
    )
}

export default RecoveryPage