import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://upload-ai-server-wq3o.onrender.com:443',
})