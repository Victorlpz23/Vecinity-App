import http from './base-api';

export const list = () => http.get('/communities')

export const join = (code) => http.post('/communities/join', code)
  

