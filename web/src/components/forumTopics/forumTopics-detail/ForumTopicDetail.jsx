import React, { useEffect, useState } from 'react';
import forumTopicService from '../../../services/forumTopics';
import { useParams } from 'react-router-dom';
import ForumTopicItem from '../forumTopics-item/ForumTopicItem';
import ForumCommentsList from '../../forumComments/forumComments-list/ForumCommentsList';
import ForumCommentsForm from '../../forumComments/forumComments-form/ForumCommentsForm';

function ForumTopicDetail() {
  const [forumTopic, setForumTopic] = useState({});
  const { id, forumTopicId } = useParams();



  useEffect(() => {
    forumTopicService.detail(id, forumTopicId)
      .then((forumTopic) => {
        setForumTopic(forumTopic);
      }).catch(console.error);
  }, [id, forumTopicId]);


  return (
    <>
      <ForumTopicItem forumTopic={forumTopic} key={forumTopic.id} communityId={id} />

      {/* Comments*/}
      <ForumCommentsList />
      <ForumCommentsForm />
    </>
  );
}

export default ForumTopicDetail;