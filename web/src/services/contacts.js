import http from './base-api'

const list = (communityId) => http.get(`/communities/${communityId}/contacts`)
  .then((res) => res.data)

export default { list }


