import http from './base-api'

const list = (communityId, forumTopicId) => http.get(`/communities/${communityId}/forumTopics/${forumTopicId}/comments`)
  .then((res) => res.data)

  export default {
    list, 
  }