import http from './base-api';

const list = (communityId) => http.get(`/communities/${communityId}/reservations`);

const create = (communityId, reservation) => http.post(`/communities/${communityId}/reservations`, reservation)

export default { list, create }


