import axios from 'axios';

export const api_faunadb = axios.create({
    baseURL: '/api/'
});