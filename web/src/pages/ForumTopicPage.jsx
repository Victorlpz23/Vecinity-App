import React from 'react'
import ForumTopicDetail from '../components/forumTopics/forumTopics-detail/ForumTopicDetail';
import PageLayout from '../components/layout/PageLayout';


function ForumTopicPage() {
  return (
    <>
      <PageLayout title="Topic Comments">
      <ForumTopicDetail/> 
      </PageLayout>     
    </>
  )
}

export default ForumTopicPage