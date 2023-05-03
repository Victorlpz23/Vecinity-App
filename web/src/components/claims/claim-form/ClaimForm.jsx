import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import claimsService from '../../../services/claims';
import { useParams } from 'react-router-dom';

function ClaimForm({ onContactCreated }) {
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur' });
  const [serverError, setServerError] = useState(undefined);

  const { id } = useParams();

  const onClaimSubmit = (claim) => {
    setServerError();
    claimsService.create(id, claim)
      .then(claim => {
        onContactCreated();
        console.info(claim);
      })
      .catch(error => {
        const errors = error.response?.data?.errors;
        if (errors) {
          Object.keys(errors)
            .forEach((inputName) => setError(inputName, { message: errors[inputName] }));
        } else {
          setServerError(error.message);
        }
      });
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 mb-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create Claim
              </h1>
              <form onSubmit={handleSubmit(onClaimSubmit)} className="space-y-4 md:space-y-6" action="#">
                {serverError &&
                  <div
                    className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                    role="alert">
                    <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium">{serverError}</span>
                    </div>
                  </div>
                }

                {/* Title */}

                <div>
                  <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg width="25px" height="25px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z" stroke="#809d7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 9V7h10v2M12 7v10m0 0h-2m2 0h2" stroke="#809d7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                    <input className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10 p-2.5 ${errors.title
                        ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500
                        focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400` : ''}`} id="name"
                      type="text" placeholder="Title" {...register('title', { required: "Title is required", })} />
                  </div>
                  <div>
                    {errors.title && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>
                      {errors.title?.message} </p>}
                  </div>
                </div>


                {/*  Description */}

                <div>
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg width="25px" height="25px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M7 12h10M7 8h6" stroke="#809d7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 20.29V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H7.961a2 2 0 00-1.561.75l-2.331 2.914A.6.6 0 013 20.29z" stroke="#809d7b" stroke-width="2"></path></svg>
                    </div>
                    <input className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10 p-2.5 ${errors.description
                        ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500
                        focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400` : ''}`} id="name"
                      type="text" placeholder="Description" {...register('description', { required: "description is required", })} />
                  </div>
                  <div>
                    {errors.description && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>
                      {errors.description?.message} </p>}
                  </div>
                </div>


                
                <button type="submit" className="w-full text-white bg-orange hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Claim</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ClaimForm.defaultProps = {
  onClaimCreated: () => { }
};

export default ClaimForm;