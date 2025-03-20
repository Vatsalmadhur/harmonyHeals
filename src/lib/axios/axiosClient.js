import axios from 'axios';


export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://20.244.97.219:4000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});