import React from 'react';
import { Link } from 'react-router-dom';

function ClaimItem({ claim, communityId }) {
  return (
    <Link to={`/communities/${communityId}/claims/${claim.id}`}>
      <li>
        <div class="flex-start flex items-center pt-3">
          <div
            class="-ml-[5px] mr-3 h-[13px] w-[13px]  bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="orange" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
          <p class="text-sm text-neutral-500 dark:text-neutral-300">
            01.07.2021
          </p>
        </div>
        <div class="mb-6 ml-4 mt-2">
          <h4 class="mb-1.5 text-xl font-semibold">{claim?.title}</h4>
          <p class="text-sm text-neutral-500 dark:text-neutral-300">
            {claim?.author?.name}
          </p>
        </div>
      </li>
    </Link>
  );
}

export default ClaimItem;













