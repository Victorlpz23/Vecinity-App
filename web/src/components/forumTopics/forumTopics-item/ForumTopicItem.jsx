import React from 'react';
import { Link } from 'react-router-dom';

function ForumTopicItem({ forumTopic, communityId }) {
  return (
    <>
      <Link to={`/communities/${communityId}/forumTopics/${forumTopic.id}`} >
        {forumTopic.id}
      </Link>
    </>
  );
}

export default ForumTopicItem;