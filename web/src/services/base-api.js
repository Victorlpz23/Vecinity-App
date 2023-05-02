import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL || 'http://localhost:3001/api/v1'
});

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


http.interceptors.response.use(
  response => response.data,
  error => {
    const status = error.response?.status;
    if (status === 401 && !window.location.href.includes('login')) {
      localStorage.removeItem('current-user');
      localStorage.removeItem('user-access-token');
      window.location.href = '/login';
      return Promise.resolve();
    } else {
      return Promise.reject(error);
    }
  }
);

export default http;