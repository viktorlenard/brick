import { PageParams } from "@/app/types/pages"
import { Button } from "@/app/components/Button"

const DashboardPage = async ({ params }: PageParams) => {

    const { tenant } = await params

    return(
        <div className="flex flex-col items-center justify-center">  
            <div className='flex justify-center min-w-full mb-4'>
                <div className='flex flex-col items-center max-w-96 w-full min-h-72 rounded-sm outline px-4'>
                    <h1 className="font-bold text-2xl mt-3">Listings</h1>
                    <p className='font-mono text-sm font-bold text-accent mb-3'>NOT REAL DATA!</p>
                    <div className="flex justify-between w-full">
                        <h3 className='font-mono font-bold'>TOTAL</h3>
                        <h3 className='flex justify-center font-mono font-bold text-light bg-dark px-2 rounded-sm w-8'>16</h3>
                    </div>
                    <div className="flex justify-between w-full mt-2">
                        <h3 className='font-mono font-bold'>ACTIVE</h3>
                        <h3 className='flex justify-center w-8 font-mono font-bold text-green-700 bg-green-300 px-2 rounded-sm'>2</h3>
                    </div>
                    <div className="flex justify-between w-full mt-2">
                        <h3 className='font-mono font-bold'>INACTIVE</h3>
                        <h3 className='flex justify-center w-8 font-mono font-bold text-orange-700 bg-orange-300 px-2 rounded-sm'>14</h3>
                    </div>
                    <div className="flex justify-between w-full mt-2">
                        <h3 className='font-mono font-bold'>SUSPENDED</h3>
                        <h3 className='flex justify-center w-8 font-mono font-bold text-red-700 bg-red-300 px-2 rounded-sm'>0</h3>
                    </div>
                    <div className='flex'>
                        <Button dark={true} href={`/${tenant}/listings`}>Listings</Button>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <Button dark={true} href={`/${tenant}/users`}>User list</Button>
            </div>
        </div>
    )
}

export default DashboardPage