import http from './base-api'

const list = (communityId) => http.get(`/communities/${communityId}/contacts`)
  .then((res) => res.data)

const detail = (communityId, contactId) => http.get(`/communities/${communityId}/contacts/${contactId}`)
  .then((res) => res.data)

export default { list, detail }


