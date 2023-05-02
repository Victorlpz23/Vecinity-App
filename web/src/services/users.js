import http from './base-api';

const create = (user) => http.post('/users', user)
  

const login = (user) => http.post('/login', user)
 

export default {
  create,
  login
};