import { SearchParams } from "next/dist/server/request/search-params"
import { NextRequest, NextResponse } from "next/server"
import { getAdminClient } from "@/app/utils/supabase/adminClient"
import { UserType } from "@/app/types/tenant"

export const POST = async (request : NextRequest, params? : SearchParams) => {

    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const url = new URL(request.url);
    const tenant = url.searchParams.get('tenant'); 
    let domain: string | undefined

    const isNonEmptyString = (value : string) =>
        typeof value === "string" && value.trim().length > 0;
    const emailRegex = /^\S+@\S+$/;
    if (
        !isNonEmptyString(name) ||
        !isNonEmptyString(email) ||
        !emailRegex.test(email) ||
        !isNonEmptyString(password)
    ){
        return NextResponse.redirect(
            new URL('/error?type=invalid-input', request.url), 302)
    }
    const [ , emailHost] = email.split('@');
    const supabaseAdmin = getAdminClient()
    const { data: tenantData, error: tenantError } = await supabaseAdmin
        .from("tenants")
        .select("*")
        .eq("id", tenant)
        .eq("domain", emailHost)
        .single();
        console.log(tenantData, tenantError)
    if(tenantData){
        domain = tenantData.domain
    }
    const safeEmailString = encodeURIComponent(email);
    // domain === emailHost

    if(!tenantData && tenant || tenantData && domain !== emailHost) {
        // Invalid email.
        return NextResponse.redirect(
            new URL(`/error?type=register_mail_mismatch&email=${safeEmailString}`, request.url), 302)
    } else if (!tenantData && !tenant){
        // MAKING SURE DOMAIN NOT OTHER TENANT'S DOMAIN
        const { data: userData, error: userError } = await supabaseAdmin
        .from("tenants")
        .select("*")
        .eq("domain", emailHost)
        .single();
        if(!userData){
            // VALID CONSUMER USER CREATION
            const userType : UserType = 'consumer'
            const { data: userData, error: userError } = await supabaseAdmin.auth.admin.createUser({
                email,
                password,
                app_metadata: {
                    tenants: [],
                    user_type: userType 
                },
            });
            if(userError){
                const userExists = userError.message.includes("already been registered");
                if (userExists) {
                    return NextResponse.redirect(new URL("/error?type=register_mail_exists", request.url), 302)
                } else {
                    return NextResponse.redirect(new URL("/error?type=register_unknown", request.url), 302)
                }
            }
            // Filling out service_users table.
            const { data: serviceUser, error: regError } = await supabaseAdmin
                .from("service_users")
                .insert({
                    full_name: name,
                    supabase_user: userData.user.id,
                })
                .select()
                .single()
            if (regError) {
                await supabaseAdmin.auth.admin.deleteUser(userData.user.id);
                NextResponse.redirect(new URL('/error?type=registration_failed', request.url), 302)}
            console.log('CONSUMER USER SUCCESSFULLY REGISTERRED!')
            // !!!DO THIS!!!
        } else {
            const tenantId = userData.id
            const tenantName = userData.name
            return NextResponse.redirect(new URL(`/error?type=business_user_reg&tenantId=${tenantId}&tenantName=${tenantName}`, request.url), 302)}
    } else if (tenantData && tenant && domain === emailHost) {
        // VALID BUSINESS USER CREATION
        const userType : UserType = 'business'
        const { data: userData, error: userError } = await supabaseAdmin.auth.admin.createUser({
                email,
                password,
                app_metadata: {
                    tenants: [tenant],
                    user_type: userType 
                },
        });
        if(userError){
            const userExists = userError.message.includes("already been registered");
            if (userExists) {
                return NextResponse.redirect(new URL("/error?type=register_mail_exists", request.url), 302)
            } else {
                return NextResponse.redirect(new URL("/error?type=register_unknown", request.url), 302)
            }
        }
        // Filling out service_users table.
        const { data: serviceUser } = await supabaseAdmin
            .from("service_users")
            .insert({
                full_name: name,
                supabase_user: userData.user.id,
            })
            .select()
            .single()
        const {error: tpError} =
            await supabaseAdmin.from("tenant_permissions")
                .insert({
                    tenant,
                    service_user: serviceUser?.id,
                });
        if (tpError) {
            await supabaseAdmin.auth.admin.deleteUser(userData.user.id);
            NextResponse.redirect(new URL('/error?type=registration_failed', request.url), 302)}
        
        console.log('BUSINESS USER SUCCESSFULLY REGISTERRED!')
        // !!!DO THIS!!!
    }

    return NextResponse.redirect(new URL('/error?type=registration_failed', request.url), 302)
}