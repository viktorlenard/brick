import { PageParams } from "@/app/types/pages";
import { Button } from "../components/Button";
import Link from "next/link";
import { getAdminClient } from "../utils/supabase/adminClient";

const labelStyle = 'flex flex-col items-left font-mono font-bold text-sm mt-4'

export const Register = async ({ searchParams, params }: PageParams) => {
    const { tenant } = await params
    const search = await searchParams;
    const supabaseAdmin = getAdminClient()
    let tenantName: string | undefined
    const { data, error } = await supabaseAdmin
        .from("tenants")
        .select("*")
        .eq("id", tenant)
        .single();
    if(error && tenant){
        console.log(error, tenant)
    } else if (data) {
        tenantName = data.name;
    }

    return(
         <div className='flex items-center align-center flex-col'>
            <h1 className='font-black text-4xl leading-none'>BRICK:</h1>
            {tenantName ? (
                <h3 className='font-bold text-blue-800 leading-none'>{`Sign up with ${tenantName}`}</h3>    
            ) : (
                <h3 className='font-bold text-accent leading-none'>Create an account</h3>
            )}
            <form className='flex flex-col items-center' 
            method="POST" action={(tenant ? `/auth/register?tenant=${tenant}` : "/auth/register")}>
                <div className='min-h-32 max-h-32'>
                    <div>
                         <label className={labelStyle}>
                            Name
                            <input name="name" type="text" id="name" className='text-dark' required />
                        </label>
                        <label className={labelStyle}>
                            Email
                            <input name="email" type="email" id="email" className='text-dark' required />
                        </label>
                    </div>
                        <div>
                            <label className={labelStyle}>
                                Password
                                <input name="password" type="password" id="password" className='text-dark' required />
                            </label>
                        </div>
                </div>
                <div className='mt-16'>
                    <Button type="submit" size={'s'} dark={true}>Register</Button>
                </div>
                <div className='flex flex-col items-center'>
                    <Link href={tenant ? `/${tenant}/login` : '/login'} prefetch={false} className='text-xs hover:underline mt-4'>Go back to login</Link>
                </div>
            </form>
        </div>
    )
}