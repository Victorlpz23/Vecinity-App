import React from "react";
import moment from 'moment'

function ForumCommentItem({ forumComment }) {
  return (
    <section className="bg-white dark:bg-gray-800 mt-2">
      <div className="flex flex-col items-center px-6 mx-auto">
        <div className="w-full bg-gray-100 rounded-lg my-1  shadow-sm dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
          <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <img className='w-10 h-10 rounded-full' src={forumComment.author.imageUrl} alt='user img'/>
                <h5 className="ms-2 mt-2.5 font-bold text-green leading-tight text-center tracking-tight md:text-2xl dark:text-white">
                  {forumComment.author.name}
                </h5>
              </div>
              <div className="flex flex-col items-end">
                <h5 className="text-xs text-green">{moment(forumComment.createdAt).format('DD/MM/YYYY')}</h5>
                <h5 className="text-xs text-green">{moment(forumComment.createdAt).format('hh:mm')}h</h5>
              </div>
            </div>
            <p className="text-xs mb-1 mx-auto">{forumComment.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForumCommentItem;