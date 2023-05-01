import http from './base-api'

const list = (communityId, forumTopicId) => http.get(`/communities/${communityId}/forumTopics/${forumTopicId}/forumComments`)
  .then((res) => res.data)

const create = (communityId, forumTopicId, forumComment) => http.post(`/communities/${communityId}/forumTopics/${forumTopicId}/forumComments`, forumComment)
  .then((res) => res.data)

  export default {
    list, create
  }