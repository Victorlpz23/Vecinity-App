import React, { useEffect, useState } from 'react'
import forumTopicsService from '../../../services/forumTopics'
import { useParams } from 'react-router-dom';
import ForumTopicItem from '../forumTopics-item/ForumTopicItem';

function ForumTopicsList() {
  const [forumTopics, setForumTopics] = useState([])
  const { id } = useParams()

  useEffect(() => {
    forumTopicsService.list(id)
      .then((forumTopics) => {
        setForumTopics(forumTopics)
        console.log(forumTopics)
      }).catch(console.error)
  }, [id])

  return (
    <>
      {forumTopics.map((forumTopic => <div><ForumTopicItem forumTopic={forumTopic} communityId={id} /></div> ))}
    </>
  )
}

export default ForumTopicsList