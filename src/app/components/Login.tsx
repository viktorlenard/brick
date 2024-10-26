'use client'
import { useRef } from "react"

interface LoginProps {
    isPasswordLogin: boolean,
}
export const Login = ({ isPasswordLogin } : LoginProps ) => {

    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const labelStyle = 'flex flex-col items-center'
    return(
        <div className='flex '>
            <form onSubmit={(e) => {e.preventDefault(); 
                if(isPasswordLogin){alert('Password')} else {alert('Magic')}}} className='flex flex-col items-center'>
                <div>
                    <label className={labelStyle}>
                        Email
                        <input type="email" required ref={emailInputRef} />
                    </label>
                </div>
                <div>
                    <label className={labelStyle}>
                        Password
                        <input type="password" required ref={passwordInputRef} />
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