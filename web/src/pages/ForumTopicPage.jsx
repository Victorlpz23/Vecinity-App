import React from 'react'
import ForumTopicDetail from '../components/forumTopics/forumTopics-detail/ForumTopicDetail';
import ForumCommentsList from '../components/forumComments/forumComments-list/ForumCommentsList';
import ForumTopicForm from '../components/forumTopics/forumTopics-form/ForumTopicForm';

function ForumTopicPage() {
  return (
    <>
      <ForumTopicDetail/>
      <ForumCommentsList/>
      <ForumTopicForm/>
    </>
  )
}

export default ForumTopicPage