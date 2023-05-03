import React, { useState } from 'react'
import ForumTopicsList from '../components/forumTopics/forumTopics-list/ForumTopicsList';
import ForumTopicForm from '../components/forumTopics/forumTopics-form/ForumTopicForm';

function ForumPage() {
  const [refreshTopics, setRefreshTopics] = useState(false)

  const toggleRefreshTopics = () => setRefreshTopics(!refreshTopics);

  return (
    <>
      <ForumTopicsList refresh={refreshTopics}/>
      <ForumTopicForm onTopicCreated={toggleRefreshTopics} />
    </>
  )
}

export default ForumPage