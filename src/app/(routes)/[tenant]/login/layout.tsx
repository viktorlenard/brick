import { PropsWithChildren } from "react"

export const LoginLayout = (pageProps : PropsWithChildren) => {

    return(
        <>
            <section>{pageProps.children}</section>
        </>
    )
}

export default LoginLayout