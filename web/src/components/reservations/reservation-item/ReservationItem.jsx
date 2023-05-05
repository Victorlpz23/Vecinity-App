import React from 'react';
import moment from 'moment'


function ReservationItem({ reservation, communityId }) {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto">
          <div className="w-full bg-white rounded-lg  shadow-orange shadow-sm dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
              <h1 className="text-xl font-bold text-orange leading-tight text-center tracking-tight  md:text-2xl dark:text-white">
                {moment(reservation?.date).format('DD-MM-YYYY')}
              </h1>
              <div>
              <ul className='flex flex-col flex-wrap'>
                <li className='font-bold text-green mb-1'>{reservation?.facility}</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default ReservationItem;