import { NextApiRequest, NextApiResponse } from "next";
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import FirebaseAuth from "../../../services/firebase_auth";

export default async function FirebaseSignInWithLink(request: NextApiRequest, response: NextApiResponse) {
    const { email } = request.body;

    try {
        if (isSignInWithEmailLink(FirebaseAuth, window.location.href)) {

            signInWithEmailLink(FirebaseAuth, email, window.location.href)
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => {
                    return response.status(400).json({ message: 'Error while signing in.'})
                })
        }
        
    } catch (error) {
        return response.status(400).json({ error: ""});
    }
}