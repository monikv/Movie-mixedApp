// src/api/private.js
import axios from 'axios';

const privateApi = axios.create({
  baseURL: 'https://reqres.in/api',
});

// Add both x-api-key and token
privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  config.headers['x-api-key'] = 'reqres-free-v1'; // ✅ Add the key here too
  return config;
});

export default privateApi;
