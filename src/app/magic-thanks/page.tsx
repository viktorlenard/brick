import Link from 'next/link'
import { Button } from '../components/Button' 

export const MagicLinkSuccessPage = () => {

    return(
        <div className='flex flex-col bg-light text-dark min-h-dvh min-w-full items-center justify-center'>
            <div className='min-w-72 max-w-72'>
                <div className='mb-5 min-w-full flex flex-col items-center justify-center'>
                    <h3 className='font-black text-xl leading-none'>BRICK:</h3>
                    <h1 className='font-black text-4xl text-accent leading-none'>NICE!</h1>
                </div>
                <div className='mb-5 text-center'>
                    <div className='font-bold'>
                        <p className='font-bold'>Email on the way!</p>
                        <p className='font-bold'>Your magic link should arrive in a few seconds.</p>
                    </div>
                </div>
                <div className='min-w-full flex items-center justify-center'>
                    <Button dark={true} role="button" href="/">Go back</Button>
                </div>
            </div>
        </div>
    )
}

export default MagicLinkSuccessPage