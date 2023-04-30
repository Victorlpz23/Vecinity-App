import React, { useEffect, useState } from 'react';
import claimService from '../../../services/claims';
import { useNavigate, useParams } from 'react-router-dom';

function ClaimDetail() {
  const [claim, setClaim] = useState({});
  const navigate = useNavigate();
  const { id, claimId } = useParams();

  useEffect(() => {
    async function fetchClaim() {
      try {
        const claim = await claimService.detail(id, claimId);
        setClaim(claim);
      } catch (error) {
        console.error(error);
        const statusCode = error.response?.status;
        if (statusCode === 404) {
          navigate('/');
        }
      }
    }
    fetchClaim();
  }, [id, claimId]);


  return (
    <>
      {!claim ? (
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
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mb-20">
              <div className="w-full bg-white rounded-lg shadow shadow-orange dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className='flex justify-center mt-5 mb-3'>
                  <span class="inline-flex items-center p-1 mr-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    <h1>Pending</h1>
                    <svg aria-hidden="true" class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </span>
                  <span class="inline-flex items-center p-1 mr-2 text-sm font-semibold text-white bg-green rounded-full dark:bg-gray-700 dark:text-blue-400">
                    <h1>Solved </h1>
                    <svg aria-hidden="true" class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </span>
                </div>
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{claim.title}</h5>
                <p class="font-normal text-center text-gray-700 dark:text-gray-400">{claim.description}</p>
                <p class="font-normal text-center text-gray-700 dark:text-gray-400 mb-5">{claim.author?.name}</p>
              </div>
            </div>
          </>
        )}
    </>
  );
}

export default ClaimDetail;

