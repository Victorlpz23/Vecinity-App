import React, { useEffect, useState } from 'react';
import claimService from '../../../services/claims';
import ClaimItem from '../claims-item/ClaimItem';
import { useParams } from 'react-router-dom';



function ClaimsList({ refresh }) {
  const { id } = useParams();
  const [claims, setClaims] = useState();


  useEffect(() => {
    claimService.list(id)
      .then((claims) => setClaims(claims))
      .catch(console.error);
  }, [id, refresh]);

  return (
    <>
      {claims === undefined  ? (
        <div role="status" class="max-w-sm animate-pulse">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span class="sr-only">Loading...</span>
        </div>
      )
        : (
          <>
            <div className="flex flex-col items-center px-6 py-2 mx-auto md:h-screen lg:py-0 mb-20">
              <h1 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Claims</h1>
              <ol class="border-l border-neutral-300 dark:border-neutral-500">
                {claims.map((claim) =>
                  <ClaimItem claim={claim} key={claim.id} communityId={id} />
                )}
              </ol>
            </div>
          </>
        )}

    </>
  );
}

export default ClaimsList;