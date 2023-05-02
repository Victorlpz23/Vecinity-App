import http from './base-api'

const list = (communityId) => http.get(`/communities/${communityId}/forumTopics`)
  

const detail = (communityId, forumTopicId) => http.get(`/communities/${communityId}/forumTopics/${forumTopicId}`)
  

const create = (communityId, forumTopic) => http.post(`/communities/${communityId}/forumTopics`, forumTopic)
  

  export default {
    list, 
    detail,
    create
  }