import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://3.134.238.10:80',
})