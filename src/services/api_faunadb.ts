import axios from 'axios';

export const api_faunadb = axios.create({
    baseURL: '/api/'
});

export const api_fireabase = axios.create({
    baseURL: '/api/authentication'
});