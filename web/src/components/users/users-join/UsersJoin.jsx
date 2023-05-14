import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthStore';
import * as communitiesService from '../../../services/communities';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


function UsersJoin() {
  const { user, onReload } = useContext(AuthContext);
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur' });
  const [serverError, setServerError] = useState();
  const navigate = useNavigate();


  const onCodeSubmit = (code) => {
    communitiesService.join(code)
      .then((userJoin) => {

        navigate(`/welcome/${userJoin.community}`);
      }).catch((error) => console.error(error));
  };






  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-20 mt-8">
        <div className="flex flex-wrap justify-center items-center align-center space-between">
          <div className="bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center align-middle px-6 py-6 mx-auto ">
              <div className="w-full bg-white rounded-lg shadow dark:border lg:w-[800px] dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex flex-col lg:flex-row lg:w-[800px]">
                  <form onSubmit={handleSubmit(onCodeSubmit)} className="space-y-4 md:space-y-6 lg:pl-10">
                    {serverError &&
                      <div
                        className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                        role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                          <span className="font-medium">{serverError}</span>
                        </div>
                      </div>
                    }

                    {/* Code */}

                    <div className='lg:mt-20'>
                      <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg width="25px" height="25px" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M2.5 9.5L12 4l9.5 5.5" stroke="#809d7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 21v-1a5 5 0 015-5v0a5 5 0 015 5v1" stroke="#809d7b" strokeWidth="2"></path><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#809d7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                        <input className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10 p-2.5 ${errors.code
                            ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500
                        focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400` : ''}`} id="name"
                          type="text" placeholder="  Insert Code" {...register('code', { required: "code is required", })} />
                      </div>
                      <div>
                        {errors.code && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>
                          {errors.code?.message} </p>}
                      </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-orange hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Join</button>
                  </form>
                  <div>
                    <img
                      src="/images/join-form.png"
                      className="w-80 lg:w-96 lg:ml-20"
                      alt="login illustration"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UsersJoin;