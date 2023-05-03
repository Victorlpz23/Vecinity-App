import http from './base-api';

const create = (user) => http.post('/users', user)
  
const login = (user) => http.post('/login', user)

const update = (communityId, userId, user) => http.patch(`/communities/${communityId}/users/${userId}`, user)
 

export default {
  create,
  login
};