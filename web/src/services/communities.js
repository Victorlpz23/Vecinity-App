import http from './base-api';

export const list = () => http.get('/communities')
  .then((res) => res.data);

