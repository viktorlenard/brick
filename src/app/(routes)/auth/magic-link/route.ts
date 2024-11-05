import { NextRequest, NextResponse } from "next/server"
import { getAdminClient } from "@/app/utils/supabase/adminClient"
import nodemailer from "nodemailer"
import { SearchParams } from "next/dist/server/request/search-params"

type LinkType = 'recovery' | 'login'

const isValidLinkType = (value: any): value is LinkType => {
    return value === 'recovery' || value === 'login'
}

export const POST = async (request : NextRequest) => {
    
    const formData = await request.formData()
    const email = formData.get("email")
    const linkType = formData.get('type')

    const supabaseAdmin = getAdminClient()

    if (typeof email !== "string" || !isValidLinkType(linkType)) {
        return NextResponse.redirect(
            new URL(`/error?type=invalid-input`, request.url),
            { status: 302 }
        );
    }

    // typeof email checked. Generate a magic link for the email
    const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink({
        email,
        type: "magiclink"
    })

    if(error) {
        return NextResponse.redirect(
            new URL("/error?type=magiclink", request.url),
            { status: 302 }
        )
    }

    // Extract the hashed_token from the link properties
    const { hashed_token } = linkData.properties
    // Construct custom magic link.
    const constructedLink = new URL(`/auth/verify?hashed_token=${hashed_token}&type=${linkType}`, request.url)
    // Initialise a transporter to send custom email.
    const transporter = nodemailer.createTransport({
        host: 'localhost',
        port: 54325
    })
    // Construct and send the custom email.
    await transporter.sendMail({
        from: "Brick: <logindetails@brick.fart>",
        to: email,
        subject: "Magic Link",
        html:`
        <h1>Hello! This is a custom magic link email!</h1>
        <p>Click <a href="${constructedLink.toString()}">here</a> to log in.<p/>
        `,
    })

    return NextResponse.redirect(
        new URL(`/magic-thanks?type=${linkType}`, request.url), { status: 302 }
    )

}