import React, { useEffect, useState } from 'react'
import forumTopicService from '../../../services/forumTopics'
import { useParams } from 'react-router-dom';

function ForumTopicDetail() {
  const [forumTopic, setForumTopic] = useState({})
  const { id, forumTopicId } = useParams()

  useEffect(() => {
    forumTopicService.detail(id, forumTopicId)
      .then((forumTopic) => {
        setForumTopic(forumTopic)
      }).catch(console.error)
  }, [id, forumTopicId])

  return (
    <>
    <div>ForumTopic-detail</div>
    <div>{forumTopic.title}</div>
    </>
  )
}

export default ForumTopicDetail