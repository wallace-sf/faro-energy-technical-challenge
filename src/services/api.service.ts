import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD
    ? 'https://json-server-power-plants.vercel.app'
    : 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
  },
});
