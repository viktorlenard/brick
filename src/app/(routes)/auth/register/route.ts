import { SearchParams } from "next/dist/server/request/search-params"
import { NextRequest, NextResponse } from "next/server"
import { getAdminClient } from "@/app/utils/supabase/adminClient"
import { sendOTPLink, LinkType, OtpProps } from "@/app/utils/sendOTPLink"

const isNonEmptyString = (value : string) =>
    typeof value === "string" && value.trim().length > 0;
const emailRegex = /^\S+@\S+$/;
type UserType = 'consumer' | 'business'

export const POST = async (request : NextRequest, params? : SearchParams) => {

    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const url = new URL(request.url);
    const tenant = url.searchParams.get('tenant');
    const type = 'signup' as LinkType
    const [ , emailHost] = email.split('@');
    const safeEmailString = encodeURIComponent(email);  // domain === emailHost

    if (
        !isNonEmptyString(name) ||
        !isNonEmptyString(email) ||
        !emailRegex.test(email) ||
        !isNonEmptyString(password)
    ){
        return NextResponse.redirect(
            new URL('/error?type=invalid-input', request.url), 302)
    }
    
    const supabaseAdmin = getAdminClient()

    // CONSUMER REGISTRATION ATTEMPT
    if(!tenant){
        // Check if user's domain is in tenants table.
        const { data: userData, error: userError } = await supabaseAdmin
            .from("tenants")
            .select("*")
            .eq("domain", emailHost)
            .single();
        if(userData){
            // If we got a result, user belongs to a business. No good.
            const tenantId = userData.id
            const tenantName = userData.name
            return NextResponse.redirect(
                new URL(`/error?type=business_user_reg&tenantId=${tenantId}&tenantName=${tenantName}`, 
                    request.url), 302)
            } else {
            // No data was returned. Register a consumer account.
            const userType : UserType = 'consumer'
            const { data: userData, error: userError } = await supabaseAdmin.auth.admin.createUser({
                email,
                password,
                app_metadata: {
                    tenants: [],
                    user_type: userType 
                },});
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
            const result = await sendOTPLink( { email, type, request } )
            if(result) {
                return NextResponse.redirect(new URL(`/registration-success?email=${safeEmailString}`, request.url), 302)
            }
        }
    // TENANT REGISTRATION ATTEMPT
    } else {
        // Check making sure user's email matches the provided tenant in the database.
        const { data: tenantData, error: tenantError } = await supabaseAdmin
            .from("tenants")
            .select("*")
            .eq("id", tenant)
            .eq("domain", emailHost)
            .single();
        if (!tenantData) {
            // No data was returned. Either incorrect tenant, or consumer reg attempt at tenant page. No good.
            return NextResponse.redirect(
                new URL(`/error?type=register_mail_mismatch&email=${safeEmailString}`, request.url), 302)
        } else if (tenantData) {
            // We found a matching tenant. double
            const userType : UserType = 'business'
            const domain = tenantData.domain
            const { data: userData, error: userError } = await supabaseAdmin.auth.admin.createUser({
                    email,
                    password,
                    app_metadata: {
                        tenants: [tenant],
                        user_type: userType 
                    },});
            if(userError){
                console.log(userError)
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
                    user_type: userType
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
            const result = await sendOTPLink( { email, tenant, type, request } )
            if(result) {
                return NextResponse.redirect(new URL(`/registration-success?email=${safeEmailString}`, request.url), 302)
            }
            }} 


    return NextResponse.redirect(new URL('/error?type=registration_failed', request.url), 302)
}