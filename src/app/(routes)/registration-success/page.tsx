import { SearchParams } from "next/dist/server/request/search-params"
import Link from "next/link";

const RegSuccessPage = async ( { searchParams } : { searchParams : SearchParams } ) => {
    
    const { email } = await searchParams;

    return(
        <div className='flex flex-col bg-light text-dark min-h-dvh min-w-full items-center justify-center'>
            <div className='min-w-72 max-w-72'>
                <div className='mb-5 min-w-full flex flex-col items-center justify-center'>
                    <h3 className='font-black text-xl leading-none'>BRICK:</h3>
                    <h1 className='font-black text-3xl text-accent leading-none'>Almost there!</h1>
                </div>
                <div className='mb-5 text-center'>
                    <h3>A confirmation email was sent to {email}.</h3>
                    <h3>Verify your email, and you're in!.</h3>
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

export default RegSuccessPage