import { Client } from 'faunadb';

const secret = process.env.FAUNADB_KEY

if (typeof secret === 'undefined' || secret === '') {
    console.error('The FAUNADB_SECRET environment variable is not set, exiting.')
    process.exit(1)
}

export const fauna = new Client({
    secret
})