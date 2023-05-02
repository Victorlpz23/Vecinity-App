import http from './base-api'

const list = (communityId) => http.get(`/communities/${communityId}/reservations`)
 

  const detail = (communityId, reservationId) => http.get(`/communities/${communityId}/reservations/${reservationId}`)
 ;

export default { list, detail }


