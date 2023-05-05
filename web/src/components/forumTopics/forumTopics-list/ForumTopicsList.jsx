import React, { useEffect, useState } from 'react';
import forumTopicsService from '../../../services/forumTopics';
import { useParams } from 'react-router-dom';
import ForumTopicItem from '../forumTopics-item/ForumTopicItem';

function ForumTopicsList({ refresh }) {
  const [forumTopics, setForumTopics] = useState();
  const { id } = useParams();

  useEffect(() => {
    forumTopicsService.list(id)
      .then((forumTopics) => {
        setForumTopics(forumTopics);
      }).catch(console.error);
  }, [id, refresh]);

  return (
    <>
      {forumTopics === undefined ? (
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0 mb-20">
          <div className="w-full bg-white rounded-lg shadow shadow-orange dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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
          <div className='mb-20 pb-5'>
            {forumTopics.map((forumTopic => <div><ForumTopicItem forumTopic={forumTopic} key={forumTopic.id} communityId={id} /></div>))}
          </div>
        )
      }
    </>
  );
}

export default ForumTopicsList;