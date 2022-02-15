import { NextApiRequest, NextApiResponse } from "next";
import { sendSignInLinkToEmail } from 'firebase/auth';
import FirebaseAuth from "../../../services/firebase_auth";

export default async function FirebaseSendSingInLinkToEmail (request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== 'POST') return response.status(400).end('Invalid argument');

    const { email } = request.body;

    const actionCodeSettings = {
        url: 'https://app.camilapaccini.com/validatelogin',
        handleCodeInApp: true,
        iOS: {
            bundleId: 'com.example.ios'
        },
        android: {
            packageName: 'com.example.android',
            installApp: true,
            minimumVersion: '12'
        },
        dynamicLinkDomain: 'camilapaccini.page.link',
    }

    try {
        await sendSignInLinkToEmail(FirebaseAuth, email, actionCodeSettings)
            .then(() => {
                // window.localStorage.setItem('signInEmail', email)
                // console.log(localStorage)
            }
        );
                
    } catch (error) {
        console.log(error)
        return response.status(400).json({ error: "E-mail not found."});
    }

    return response.status(200).json({ message: 'Email sent successfully.'})
}