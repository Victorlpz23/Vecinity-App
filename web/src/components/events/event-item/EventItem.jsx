import React from 'react';

function EventItem({ event, communityId }) {
  return (
    <>
      <section className="bg-white dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto">
          <div className="w-85 bg-gray-100 shadow rounded-lg dark:border dark:bg-gray-900 dark:border-gray-700">
            <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
              <div>
              <ul className='flex flex-col flex-wrap'>
                <li className='font-bold text-green mb-1'>{event.title}</li>
                <li className="flex flex-row flex-wrap">
                  <p>{event.description}</p>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventItem;
