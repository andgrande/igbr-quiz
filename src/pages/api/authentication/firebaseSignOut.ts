import { NextApiRequest, NextApiResponse } from "next";
import FirebaseAuth from '../../../services/firebase_auth';

export default async function FirebaseSignOut(request: NextApiRequest, response: NextApiResponse) {
    await FirebaseAuth.signOut();

    return response.status(200).send({});
}