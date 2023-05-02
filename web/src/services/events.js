import http from './base-api';

const list = (communityId, eventsDate) => http.get(`/communities/${communityId}/events/${eventsDate}`)


const detail = (communityId, eventId) => http.get(`/communities/${communityId}/events/${eventId}`)

const create = (communityId) => http.post(`/communities/${communityId}/events`)


export default { list, detail, create };







