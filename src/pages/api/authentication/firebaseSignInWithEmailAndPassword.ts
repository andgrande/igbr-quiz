import { signInWithEmailAndPassword } from "firebase/auth";
import { NextApiRequest, NextApiResponse } from "next";
import FirebaseAuth from '../../../services/firebase_auth';

export default async function FirebaseSignInWithEmailAndPassword(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== 'POST') return response.status(401).end('Invalid Method.');

    const { e_mail, password } = request.body;

    const credential = await signInWithEmailAndPassword(FirebaseAuth, e_mail, password)
        .then((userCredential) => {
            const { uid, email } = userCredential.user;

            if (!uid || !email) throw new Error('Could not validate credentials');

            return { uid, email };
        })
        .catch(err => {
            return response.status(400).json({ error: "Invalid credentials" });
        });

    return response.status(200).json({ credential });
}