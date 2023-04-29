import React from 'react';


function ForumCommentItem({ forumComment }) {
  return (
    <div>{forumComment.text}</div>
  );
}

export default ForumCommentItem;