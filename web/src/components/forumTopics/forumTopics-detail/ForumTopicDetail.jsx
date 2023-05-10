import React, { useEffect, useState } from 'react';
import forumTopicService from '../../../services/forumTopics';
import { useParams } from 'react-router-dom';
import ForumTopicItem from '../forumTopics-item/ForumTopicItem';
import ForumCommentsList from '../../forumComments/forumComments-list/ForumCommentsList';
import ForumCommentsForm from '../../forumComments/forumComments-form/ForumCommentsForm';

function ForumTopicDetail() {
  const [forumTopic, setForumTopic] = useState();
  const { id, forumTopicId } = useParams();

  const [refreshComments, setRefreshComments] = useState(false);

  const toggleRefreshComments = () => setRefreshComments(!refreshComments);

  useEffect(() => {
    forumTopicService.detail(id, forumTopicId)
      .then((forumTopic) => {
        setForumTopic(forumTopic);
      }).catch(console.error);
  }, [id, forumTopicId]);


  return (
    <>
      {forumTopic === undefined ? (
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto lg:py-0 mb-20">
          <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-70">
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
      ) : (
        <>
          <ForumTopicItem forumTopic={forumTopic} key={forumTopic.id} communityId={id} />


          <ForumCommentsList refresh={refreshComments} />
          <ForumCommentsForm onCommentCreated={toggleRefreshComments} />
        </>
      )
      }
    </>
  );
}

export default ForumTopicDetail;