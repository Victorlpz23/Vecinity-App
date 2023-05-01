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
      }).catch(console.error)
  }, [id])

  return (
    <div className='mb-20 pb-5'>
      {forumTopics.map((forumTopic => <div><ForumTopicItem forumTopic={forumTopic} key={forumTopic.id} communityId={id} /></div> ))}
    </div>
  )
}

export default ForumTopicsList