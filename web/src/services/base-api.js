import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL || 'http://localhost:3001/api/v1'
})

http.interceptors.request.use(
  config => {
    console.debug('Handling request interceptor');
    const token = localStorage.getItem('user-access-token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default http;