import http from './base-api';

const list = () => http.get('/communities')
  .then((res) => res.data);


export default {
  list,
};