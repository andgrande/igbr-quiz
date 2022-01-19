import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from '../../services/faunadb';
import { query as q } from 'faunadb';

export default async function RetrieveQuestions(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== 'GET' ) return response.status(405).end('Method not allowed');

    console.log('oi')
    const questions = await fauna.query(
        q.Select('data',
            q.Get(
                q.Documents(q.Collection('questions'))
            )
        )
    );

    console.log(questions);

    return response.status(200).json({ questions: questions });
}