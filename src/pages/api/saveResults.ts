import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from '../../services/faunadb';
import { query as q } from 'faunadb';

export default async function RetrieveQuestions(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== 'POST' ) return response.status(405).end('Method not allowed');

    const { results } = request.body;

    await fauna.query(
        q.Create(
            q.Collection('results'),
            {
                data: { results },
            }
        )
    );

    return response.status(201).send('Process finished.');
}