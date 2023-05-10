import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

function ForumTopicItem({ forumTopic, communityId }) {
  return (
    <Link to={`/communities/${communityId}/forumTopics/${forumTopic.id}`}>
      <section className="bg-white dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto">
          <div className="w-full bg-gray-200 rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
            <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
              <h1 className="text-xl font-bold text-orange leading-tight text-center tracking-tight md:text-2xl dark:text-white">
                {forumTopic.title}
              </h1>
              <div className='font-bold text-green mb-1'>{forumTopic.description}</div>
            </div>
            <div className="flex flex-row justify-between mx-8 mb-4">
              <div className="flex flex-row">
                <img className='w-10 h-10 rounded-full' src={forumTopic.author.imageUrl} alt='user img'/>
                <h5 className="ms-2 mt-2.5 font-bold text-green leading-tight text-center tracking-tight md:text-2xl dark:text-white">
                  {forumTopic.author.name}
                </h5>
              </div>
              <div className="flex flex-col items-end">
                <h5 className="text-s text-green">{moment(forumTopic.createdAt).format('DD/MM/YYYY')}</h5>
                <h5 className="text-s text-green">{moment(forumTopic.createdAt).format('hh:mm')}h</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default ForumTopicItem;