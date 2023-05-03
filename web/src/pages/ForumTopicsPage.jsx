import React, { useState } from 'react'
import ForumTopicsList from '../components/forumTopics/forumTopics-list/ForumTopicsList';
import ForumTopicForm from '../components/forumTopics/forumTopics-form/ForumTopicForm';
import PageLayout from '../components/layout/PageLayout';

function ForumPage() {
  const [refreshTopics, setRefreshTopics] = useState(false)

  const toggleRefreshTopics = () => setRefreshTopics(!refreshTopics);

  return (
    <>
      <PageLayout title="Topics">
      <ForumTopicsList refresh={refreshTopics}/>
      <ForumTopicForm onTopicCreated={toggleRefreshTopics} />
      </PageLayout>
    </>
  )
}

export default ForumPage