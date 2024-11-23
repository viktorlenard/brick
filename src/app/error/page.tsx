import { SearchParams } from "next/dist/server/request/search-params"
import Link from "next/link"

export const ErrorPage = async ({ searchParams } : { searchParams : SearchParams }) => {

    const { type, email, tenantId, tenantName } = await searchParams;
    
    const knownErrors = [
        'login-failed',
        'invalid-input',
        'magiclink',
        'invalid_token',
        'invalid_magiclink',
        'register_mail_mismatch',
        'registration_failed',
        'business_user_reg',
        'register_mail_exists',
        'register_unknown',
        "listing-not-found"

    ]

    return(
        <div className='flex flex-col bg-light text-dark min-h-dvh min-w-full items-center justify-center'>
            <div className='min-w-72 max-w-72'>
                <div className='mb-5 min-w-full flex flex-col items-center justify-center'>
                    <h3 className='font-black text-xl leading-none'>BRICK:</h3>
                    <h1 className='font-black text-4xl text-accent leading-none'>DAMN!</h1>
                </div>
                <div className='mb-5 text-center'>
                    {type === "login-failed" && (
                        <p className='font-bold'>Login was not successfull, sorry.</p>
                    )}
                    {type === "invalid-input" && (
                        <p className='font-bold'>Incorrect form data. Sus.</p>
                    )}
                    {type === "magiclink" && (
                        <div className='font-bold'>
                            <p className='font-bold'>Failed to send magic link.</p>
                            <p>Please make sure the email address is correct.</p>
                        </div>
                    )}
                    {type === "invalid_token" && (
                        <div className='font-bold'>
                            <p className='font-bold'>Invalid token value.</p>
                            <p>Something is really messed up here.</p>
                        </div>
                    )}
                    {type === "invalid_magiclink" && (
                        <div className='font-bold'>
                            <p className='font-bold'>Invalid magic link.</p>
                            <p>Please request a new one.</p>
                        </div>
                    )}
                    {type === "register_mail_mismatch" && (
                        <div className='font-bold'>
                            <p className='font-bold'>You cannot register an account there with {email}.</p>
                        </div>
                    )}
                    {type === "registration_failed" && (
                        <div className='font-bold'>
                            <p className='font-bold'>Couldn't complete registration.</p>
                            <p className='font-bold'>Please reach out to support.</p>
                        </div>
                    )}
                    {type === "business_user_reg" && (
                        <div className='font-bold'>
                            <p className='font-bold'>This email belongs to {tenantName}.</p>
                            <p className='font-bold'>Please head to {tenantId}/register.</p>
                        </div>
                    )}
                    {type === "register_mail_exists" && (
                        <div className='font-bold'>
                            <p className='font-bold'>Email already in use.</p>
                        </div>
                    )}
                    {type === "register_unknown" && (
                        <div className='font-bold'>
                            <p className='font-bold'>Unkown error happened during registration.</p>
                            <p className='font-bold'>Please try again later, or reach out to support.</p>
                        </div>
                    )}
                    {type === "listing-not-found" && (
                        <div className='font-bold'>
                            <p className='font-bold'>Can't find this listing.</p>
                            <p className='font-bold'>I don't know what to tell you.</p>
                        </div>
                    )}
                    {type && typeof type === 'string' && !knownErrors.includes(type) && (
                        <div className='font-bold'>
                            <p>Something went wrong.</p>
                            <p>Please try again or contact support.</p> 
                        </div>
                    )}
                </div>
                <div className='min-w-full flex items-center justify-center'>
                    <Link className='bg-zinc-900 text-light rounded-sm font-mono px-3 py-1 text-sm'
                        role="button" href="/login">Go back
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage