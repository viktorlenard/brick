'use client'
import { useRef } from "react"

export const Login = () => {

    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const labelStyle = 'flex flex-col items-center'
    return(
        <div className='flex '>
            <form onSubmit={(e) => {e.preventDefault}} className='flex flex-col items-center'>
                <div>
                    <label className={labelStyle}>
                        Email
                        <input type="email" required ref={emailInputRef} />
                    </label>
                </div>
                <div>
                    <label className={labelStyle}>
                        Password
                        <input type="password" required ref={emailInputRef} />
                    </label>
                </div>
                <div>
                    <button className='outline outline-1 px-7 hover:bg-dark hover:text-light' type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}