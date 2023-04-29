import React, { useState, useEffect } from 'react';
import forumCommentsService from '../../../services/forumComments';
import { useParams } from 'react-router-dom';
import ForumCommentItem from '../forumComments-item/ForumCommentItem';

function ForumCommentsList() {

  const [forumComments, setForumComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    forumCommentsService.list(id)
      .then((forumComments) => setForumComments(forumComments))
      .catch(console.error)
  }, [id])

  return (
    <>
    <h1>list</h1>
      {forumComments.map((forumComment) => <ForumCommentItem forumComment={forumComment}/>)}
    </>
  )
}

export default ForumCommentsList