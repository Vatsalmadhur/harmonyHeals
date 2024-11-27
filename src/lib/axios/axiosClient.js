import axios from 'axios';


export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/filter',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});