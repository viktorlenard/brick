import { NextRequest, NextResponse } from "next/server"
import { getAdminClient } from "@/app/utils/supabase/adminClient"
import nodemailer from "nodemailer"

export type LinkType = "recovery" | "signup" | "invite" | "magiclink" | "email_change_current" | "email_change_new"

export type OtpProps = {
    email: string,
    type: LinkType,
    newEmail?: string,
    tenant?: string,
    request: NextRequest
}

export const sendOTPLink = async ({ email, type, newEmail, tenant, request }: OtpProps): Promise<OtpProps | boolean> => {
    
    const supabaseAdmin = getAdminClient();
    const linkType = type as string === 'login' ? 'magiclink' : type
    let linkParams: any = { email: email, type: linkType };
    if (linkType === "email_change_current" || linkType === "email_change_new") {
        linkParams.newEmail = newEmail;
    }
    console.log(linkParams)
    const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink(linkParams);
    if (!linkData || error) {
        console.log(error, 'ERROR CODE 1')
        return false;
    }
    
    const user = linkData.user;

    if (tenant && !user.app_metadata?.tenants.includes(tenant)) {
        console.log('ERROR CODE 2')
        return false;
    }

    if (!tenant && user.app_metadata?.user_type === 'business' && linkType === 'signup') {
        console.log('ERROR CODE 3')
        return false;
    }

    const { hashed_token } = linkData.properties;
    const constructedLink = new URL(
        `/auth/verify?hashed_token=${hashed_token}&type=${linkType}`, request.url);

    const transporter = nodemailer.createTransport({
        host: "localhost",
        port: 54325,
    });
    let mailSubject = "";
    let initialSentence = "";
    let sentenceEnding = "";

    if (linkType === "signup") {
        mailSubject = "Activate your account";
        initialSentence = "Hi there, you successfully signed up!";
        sentenceEnding = "activate your account";
    } else if (linkType === "recovery") {
        mailSubject = "New password requested";
        initialSentence = "Hi there, you requested a password change!";
        sentenceEnding = "change it";
    } else {
        mailSubject = "Magic Link requested";
        initialSentence = "Hey, you requested a magic login link!";
        sentenceEnding = "log in";
    }
    await transporter.sendMail({
        from: "Brick: <logindetails@brick.fart>",
        to: email,
        subject: mailSubject,
        html: `
        <h1>${initialSentence}</h1>
        <p>Click <a href="${constructedLink.toString()}">here</a> to 
        ${sentenceEnding}.</p>
        `,
    });
    return true;

}