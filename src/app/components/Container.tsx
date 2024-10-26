import { forwardRef } from 'react'
import clsx from 'clsx'

export const ContainerOuter = forwardRef<
    React.ElementRef<'div'>,
    React.ComponentPropsWithoutRef<'div'>
>(function OuterContainer({ className, children, ...props }, ref) {
    return (
        <div ref={ref} className={clsx('px-2 md:px-4 md:px-10', className)} {...props}>
            <div className="mx-auto w-full">{children}</div>
        </div>
    )
})

export const ContainerInner = forwardRef<
    React.ElementRef<'div'>,
    React.ComponentPropsWithoutRef<'div'>
>(function InnerContainer({ className, children, ...props }, ref) {
    return (
        <div ref={ref} className={clsx('relative px-1 md:px-4', className)} {...props}>
            <div className="mx-auto max-w-full lg:max-w-[1750px]">{children}</div>
        </div>
    )
})

export const Container = forwardRef<
    React.ElementRef<typeof ContainerOuter>,
    React.ComponentPropsWithoutRef<typeof ContainerOuter>
>(function Container({ children, ...props }, ref) {
    return (
    <ContainerOuter ref={ref} {...props}>
        <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
    )
})