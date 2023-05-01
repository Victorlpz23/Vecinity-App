import React from 'react';
import { Link } from 'react-router-dom';

function ForumTopicItem({ forumTopic, communityId }) {
  return (
    <Link to={`/communities/${communityId}/forumTopics/${forumTopic.id}`}>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto">
          <div className="w-full bg-white rounded-lg  shadow-orange shadow-sm dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
              <h1 className="text-xl font-bold text-orange leading-tight text-center tracking-tight text-green md:text-2xl dark:text-white">
                {forumTopic.title}
              </h1>
              <div className='font-bold text-green mb-1'>{forumTopic.description}</div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default ForumTopicItem;