import React, { useState, useEffect } from "react";
import forumCommentsService from "../../../services/forumComments";
import { useParams } from "react-router-dom";
import ForumCommentItem from "../forumComments-item/ForumCommentItem";

function ForumCommentsList({ refresh }) {
  const [forumComments, setForumComments] = useState();
  const { id, forumTopicId } = useParams();

  useEffect(() => {
    forumCommentsService
      .list(id, forumTopicId)
      .then((forumComments) => setForumComments(forumComments))
      .catch(console.error);
  }, [id, forumTopicId, refresh]);

  return (
    <>
      {forumComments === undefined ? (
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto mb-20">
          <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className='flex justify-center mt-5 mb-3'>
              <div role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      )
        : (
          <div className="mb-20 pb-5">
            {forumComments.map((forumComment) => (
              <ForumCommentItem forumComment={forumComment} /> ))}
          </div>
        )
      }
    </>
  );
}

export default ForumCommentsList;