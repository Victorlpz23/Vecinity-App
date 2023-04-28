import http from './base-api'

const list = (communityId) => http.get(`/communities/${communityId}/reservations`)
  .then((res) => res.data)

  const detail = (communityId, reservationId) => http.get(`/communities/${communityId}/reservations/${reservationId}`)
  .then((res) => res.data);

export default { list, detail }


