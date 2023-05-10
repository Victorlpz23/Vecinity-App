import React from "react";
import { useForm } from 'react-hook-form';
import forumCommentsService from '../../../services/forumComments';
import { useNavigate, useParams } from "react-router-dom";


function ForumCommentsForm({ onCommentCreated }) {
  const { register, handleSubmit, setValue } = useForm();
  const { id, forumTopicId } = useParams();
  const navigate = useNavigate();

  const onCommentSubmit = (comment) => {
    forumCommentsService.create(id, forumTopicId, comment)
      .then((comment) => {
        setValue('text');
        onCommentCreated();
      })
      .catch(console.error);
  };

  return (
    <div className="mb-20 pb-1">
      <form onSubmit={handleSubmit(onCommentSubmit)}>
        <div class="flex flex-col justify-center w-90 m-6 lg:m-20 md:mx-16 mb-4 border border-green rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label for="comment" class="sr-only">
              Your comment
            </label>
            <input
              type='text'
              id="comment"
              rows="6"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              {...register('text', { required: true })}
            />
          </div>
          <button
            type="submit"
            class="inline-flex items-center justify-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green rounded-lg focus:ring-4 focus:ring-green dark:focus:ring-blue-900 hover:bg-green"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForumCommentsForm;