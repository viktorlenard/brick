import { ContainerOuter, ContainerInner } from './Container';
import { Button } from './Button'

export function Footer() {
  
  return (
    <footer className="mt-32 bg-stone-200 flex-none selection:bg-dark selection:text-light">
      <ContainerOuter>
        <div className="pb-4 pt-4">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-2 sm:flex-row mb-8 mt-8">
              <div className="flex flex-col items-center justify-center gap-x-2 gap-y-0 text-xs md:text-sm font-rs-light text-dark w-full">
                <div className='flex flex-col items-center mb-4'>
                </div>
                    <div className='flex flex-col items-center mb-4'>
                        <div className='flex'>
                            <Button href={'https://github.com/viktorlenard/brick'} transparent={true} dark={true} size={'s'} className='button w-24 mr-1'>GitHub</Button>
                            <Button href={'https://www.linkedin.com/in/viktorlenard/'} transparent={true} dark={true} size={'s'} className='button w-24 mr-1'>LinkedIn</Button>
                            <Button href={'https://viktorlenard.com'} transparent={true} dark={true} size={'s'} className='button w-24 mr-1'>Website</Button>
                        </div>
                    </div>
                    <p className='button font-light mb-2'>Designed and built by <span className='font-semibold'>Viktor Lenard.</span></p>
                    <div className='button flex mb-2 font-light'>
                    <p>&copy;{new Date().getFullYear()} All rights reserved.</p>
                    </div>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}