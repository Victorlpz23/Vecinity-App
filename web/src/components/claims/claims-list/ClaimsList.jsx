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
      {claims === undefined ? (
        <div class="w-60 h-20 mb-24 rounded-md mx-auto mt-12">
          <div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
            <div class="w-6 bg-gray-300 h-6 rounded-full ">
            </div>
            <div class="flex flex-col space-y-3">
              <div class="w-24 bg-gray-300 h-3 rounded-md ">
              </div>
              <div class="w-16 bg-gray-300 h-3 rounded-md ">
              </div>
            </div>
          </div>
          <div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
            <div class="w-6 bg-gray-300 h-6 rounded-full ">
            </div>
            <div class="flex flex-col space-y-3">
              <div class="w-24 bg-gray-300 h-3 rounded-md ">
              </div>
              <div class="w-16 bg-gray-300 h-3 rounded-md ">
              </div>
            </div>
          </div>
        </div>

      )
        : (
          <>
            <div className="flex flex-col items-center px-6 py-2 mx-auto  lg:py-0 mb-20">
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