import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== 'POST') response.status(405).end('Method not allowed');

  const { results } = request.body;

  // HERE WE MUST HAVE THE RESULTS CALCULATION AND RETRIEVED AS JSON

  const result = {
    profile: 'Leader',
    description: 'Always leading forward',
    tip: 'Keep the momentum and lead away!'
  };

  response.status(200).json({ result })
}
