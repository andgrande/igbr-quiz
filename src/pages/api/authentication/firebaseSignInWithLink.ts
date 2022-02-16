import { NextApiRequest, NextApiResponse } from "next";
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import FirebaseAuth from "../../../services/firebase_auth";

export default async function FirebaseSignInWithLink(request: NextApiRequest, response: NextApiResponse) {
    const { email, currentHref } = request.body;

    try {
        if (isSignInWithEmailLink(FirebaseAuth, currentHref)) {

            signInWithEmailLink(FirebaseAuth, email, currentHref)
                .then((result) => {
                    const { email, uid } = result.user;

                    return response.status(200).json({ result: { email, uid }});
                })
                .catch((error) => {
                    return response.status(400).json({ message: 'Error while signing in.'});
                })
        }
        
    } catch (error) {
        return response.status(401).json({ error });
    }
}