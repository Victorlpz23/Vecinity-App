import http from './base-api'

const list = (communityId) => http.get(`/communities/${communityId}/events`)
  .then((res) => res.data)

const detail = (communityId, eventId) => http.get(`/communities/${communityId}/events/${eventId}`)
  .then((res) => res.data)

const create = (communityId) => http.post(`/communities/${communityId}/events`)
  .then((res) => res.data)

export default { list, detail, create }







