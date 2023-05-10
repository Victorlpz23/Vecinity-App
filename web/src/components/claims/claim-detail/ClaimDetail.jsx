import React, { useEffect, useState } from 'react';
import claimService from '../../../services/claims';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment'

function ClaimDetail() {
  const [claim, setClaim] = useState();
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
  }, [id, claimId, navigate]);


  return (
    <>
      {claim === undefined ? (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0 mb-20">
          <div className="w-full bg-white rounded-lg shadow shadow-orange dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className='flex justify-center mt-5 mb-3'>
              <div role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      )
        : (
          <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mb-20">
              <div className="w-full bg-gray-100 rounded-lg shadow  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
                <div className='flex justify-center mt-5 mb-3'>
                  <ol class="flex items-center">
                    <li class="relative w-full mb-6">
                      <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-orange rounded-full ring-0 ring-white dark:bg-orange sm:ring-8 dark:ring-gray-900 shrink-0">
                          <svg aria-hidden="true" class="w-4 h-4 text-blue-100 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                      </div>
                      <div class="mt-3 mr-5">
                        <h3 class="font-medium text-gray-900 dark:text-white -ml-4 mr-6">Pending</h3>
                      </div>
                    </li>
                    <li class="relative w-full mb-6">
                      <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0">
                          <svg aria-hidden="true" class="w-3 h-3 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </div>
                      </div>
                      <div class="mt-3">
                        <h3 class="font-medium text-gray-900 dark:text-white -ml-2">Solved</h3>
                      </div>
                    </li>
                  </ol>
                </div>
                <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{claim.title}</h5>
                <p class="font-normal text-center text-gray-700 dark:text-gray-400">{claim.description}</p>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row m-6">
                    <img className='w-10 h-10 rounded-full' src={claim.author.imageUrl} alt='user img' />
                    <h5 className="ms-2 mt-2.5 font-bold text-green leading-tight text-center tracking-tight md:text-2xl dark:text-white">
                      {claim.author.name}
                    </h5>
                  </div>
                  <div className="flex flex-col items-end m-6">
                    <h5 className="text-s text-green">{moment(claim.createdAt).format('DD/MM/YYYY')}</h5>
                    <h5 className="text-s text-green">{moment(claim.createdAt).format('hh:mm')}h</h5>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
    </>
  );
}

export default ClaimDetail;


