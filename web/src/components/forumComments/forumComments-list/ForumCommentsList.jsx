import React, { useState, useEffect } from "react";
import forumCommentsService from "../../../services/forumComments";
import { useParams } from "react-router-dom";
import ForumCommentItem from "../forumComments-item/ForumCommentItem";

function ForumCommentsList() {
  const [forumComments, setForumComments] = useState([]);
  const { id, forumTopicId } = useParams();

  useEffect(() => {
    forumCommentsService
      .list(id, forumTopicId)
      .then((forumComments) => setForumComments(forumComments))
      .catch(console.error);
  }, [id, forumTopicId, forumComments]);

  return (
    <div className="mb-20 pb-5">
      {forumComments.map((forumComment) => (
        <ForumCommentItem forumComment={forumComment} />
      ))}
    </div>
  );
}

export default ForumCommentsList;