import http from './base-api'

const list = (communityId, forumTopicId) => http.get(`/communities/${communityId}/forumTopics/${forumTopicId}/forumComments`)
  

const create = (communityId, forumTopicId, forumComment) => http.post(`/communities/${communityId}/forumTopics/${forumTopicId}/forumComments`, forumComment)
  

  export default {
    list, create
  }