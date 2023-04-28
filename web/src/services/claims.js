import http from './base-api';

const list = (communityId) => http.get(`/communities/${communityId}/claims`)
  .then((res) => res.data);

const detail = (communityId, claimId) => http.get(`/communities/${communityId}/claims/${claimId}`)
  .then((res) => res.data);


export default { list, detail };