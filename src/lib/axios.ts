import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://3.134.238.10:443',
})