import React from 'react'
import ForumTopicsList from '../components/forumTopics/forumTopics-list/ForumTopicsList';
import ForumTopicForm from '../components/forumTopics/forumTopics-form/ForumTopicForm';

function ForumPage() {
  return (
    <>
      <ForumTopicsList/>
      <ForumTopicForm/>
    </>
  )
}

export default ForumPage