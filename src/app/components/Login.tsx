'use client'

import { useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getClient } from "@/app/utils/supabase/browserClient"
import Link from "next/link"
import { TenantData } from "../types/tenant"
import { getUserConfig } from "../utils/user-helpers"
import { UserTypes } from "../utils/user-helpers"

import { Button } from "@/app/components/Button"

interface LoginProps {
    isPasswordLogin: boolean,
    tenant: TenantData
}

const labelStyle = 'flex flex-col items-left font-mono font-bold text-sm mt-4'


export const Login = ({ isPasswordLogin, tenant } : LoginProps ) => {
    
    const router = useRouter()
    const supabase = getClient()

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const { data: { subscription }} = supabase.auth.onAuthStateChange(
            (event, session) => {
                if(event === 'SIGNED_IN' && session){
                    const user = getUserConfig(session.user)
                    if(tenant?.id && user){
                        if(user.type === UserTypes.Consumer){
                            router.push('/dashboard')
                        } else if (user.tenants?.primary === tenant.id || user.tenants?.secondary.includes(tenant.id)){
                            router.push(`/${tenant.id}/dashboard`);     
                        } else if (user.type === UserTypes.Business) {
                            router.push(`/${user.tenants?.primary}/dashboard`); 
                        } else {
                            supabase.auth.signOut()
                            console.error('SESSION DELETED. SOMETHING FUCKED UP.')
                        }
                    } else if (session){
                        if(user.type === UserTypes.Consumer){
                            router.push("/dashboard");
                        } else if (user.type === UserTypes.Business) {
                            router.push(`/${user.tenants?.primary}/dashboard`); 
                        } else {
                            supabase.auth.signOut()
                            console.error('SESSION DELETED. SOMETHING FUCKED UP.')
                        }
                    }
                }
            })
        // Cleanup
        return () => subscription.unsubscribe()
    }, [tenant])

    return(
        <div className='flex items-center align-center flex-col'>
            <h1 className='font-black text-4xl leading-none'>BRICK:</h1>
            {tenant?.name ? (
                <h3 className='font-bold text-blue-800 leading-none'>{tenant?.name}</h3>    
            ) : (
                <h3 className='font-bold text-accent leading-none'>in development</h3>
            )}
            <form className='flex flex-col items-center' 
                action={isPasswordLogin ? 
                    (tenant ? `/auth/password-login?tenant=${tenant.id}` : '/auth/password-login/') : 
                    (tenant? `/auth/magic-link?tenant=${tenant.id}` : '/auth/magic-link')} method='POST' 
                onSubmit={(e) => {isPasswordLogin && e.preventDefault();
                    const email = emailInputRef.current?.value ?? '';
                    const password = passwordInputRef.current?.value ?? ''; 
                    if( isPasswordLogin && email && password ){
                        supabase.auth.signInWithPassword({ 
                            email: email, 
                            password: password}).then((result) => {
                                !result.data?.user && alert("Could not sign in");})}}}>
                <div className='min-h-32 max-h-32'>
                    <div>
                        <label className={labelStyle}>
                            Email
                            <input name="email" type="email" className='text-dark' required ref={emailInputRef} />
                        </label>
                    </div>
                    {isPasswordLogin && (
                        <div>
                            <label className={labelStyle}>
                                Password
                                <input name="password" type="password" className='text-dark' required ref={passwordInputRef} />
                            </label>
                        </div>
                    )}
                </div>
                {!isPasswordLogin && (
                    <input type="hidden" name="type" value="login" />
                )}
                <div className='mt-4'>
                    <Button type="submit" size={'s'} dark={true}>Sign in</Button>
                </div>
                <div className='mt-4 flex flex-col items-center'>
                    {!isPasswordLogin && (
                        <Link href={tenant?.id ? { pathname: `/${tenant.id}/login`, query: { magicLink: 'no' } } : { pathname: '/login', query: { magicLink: 'no' } }} 
                        className='text-xs hover:underline' role='button' >Sign in with password</Link>
                    )}
                    {isPasswordLogin && (
                        <Link href={tenant?.id ? { pathname: `/${tenant.id}/login`, query: { magicLink: 'yes' } } : { pathname: '/login', query: { magicLink: 'yes' } }} 
                        className='text-xs hover:underline' role='button' >Sign in with Magic Link</Link>
                    )}
                    <Link href={tenant?.id ? { pathname: '/recovery', query: { tenant: tenant.id } } : { pathname: '/recovery'}} prefetch={false} className='text-xs hover:underline mt-4' >Unable to sign in</Link>
                    <Link href={tenant?.id ? `/${tenant.id}/register` : '/register'} prefetch={false} className='text-xs hover:underline mt-4'>Create account</Link>
                </div>
            </form>
        </div>
    )
}