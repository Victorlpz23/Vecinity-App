import http from './base-api';

const list = (communityId) => http.get(`/communities/${communityId}/claims`)
  

const detail = (communityId, claimId) => http.get(`/communities/${communityId}/claims/${claimId}`)
  

const create = (communityId, claim) => http.post(`/communities/${communityId}/claims`, claim)
  


export default { list, detail, create };