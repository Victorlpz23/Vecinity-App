import http from './base-api'

const list = (communityId) => http.get(`/communities/${communityId}/contacts`)
  

const detail = (communityId, contactId) => http.get(`/communities/${communityId}/contacts/${contactId}`)
  

const create = (communityId, contact) => http.post(`/communities/${communityId}/contacts`, contact)
  

export default { list, detail, create }


