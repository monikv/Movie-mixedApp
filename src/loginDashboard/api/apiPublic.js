// src/api/public.js
import axios from 'axios';

const publicApi = axios.create({
  baseURL: 'https://reqres.in/api',
  headers:{
   ' x-api-key': 'reqres-free-v1'
  }
});

export default publicApi;
