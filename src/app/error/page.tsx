import { SearchParams } from "next/dist/server/request/search-params"
import Link from "next/link"

export const ErrorPage = async ({ searchParams } : { searchParams : SearchParams }) => {

    const { type } = await searchParams;
    
    const knownErrors = [
        'login-failed',
        'invalid-input'
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
                    {type && typeof type === 'string' && !knownErrors.includes(type) && (
                        <div className='font-bold'>
                            <p>Something went wrong.</p>
                            <p>Please try again or contact support.</p> 
                        </div>
                    )}
                </div>
                <div className='min-w-full flex items-center justify-center'>
                    <Link className='bg-zinc-900 text-light rounded-sm font-mono px-3 py-1 text-sm'
                        role="button" href="/">Go back
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage