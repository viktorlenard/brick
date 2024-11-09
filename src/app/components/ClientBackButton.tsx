// 'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { getClient } from "../utils/supabase/browserClient"
import { TENANT_MAP } from "@/tenant_map"

export const ClientBackButton = () => {
    const [backlink, setBacklink] = useState('/')

    useEffect(() => {
        const fetchUserData = async () => {
            const supabase = getClient()
            const { data, error } = await supabase.auth.getUser()
            if (error) {
                console.error('Unable to fetch user data.')
            } else if (data) {
                const email = data.user.email
                const domain = email?.split('@')[1];
                const tenantConfig = TENANT_MAP.find(config => config.domain === domain);
                const tenantId = tenantConfig ? tenantConfig.tenantId : undefined;
                if (tenantId) {
                    setBacklink(`/${tenantId}/dashboard`)
                } else {
                    setBacklink('/dashboard')
                }
            }
        }

        fetchUserData()
    }, [])

    return (
        <Link className='text-xs hover:underline' role='button' href={backlink}>Go back</Link>
    )
}