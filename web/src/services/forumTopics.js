import http from './base-api'

const list = (communityId) => http.get(`/communities/${communityId}/forumTopics`)
  .then((res) => res.data)

const detail = (communityId, forumTopicId) => http.get(`/communities/${communityId}/forumTopics/${forumTopicId}`)
  .then((res) => res.data)

  export default {
    list, 
    detail,
  }