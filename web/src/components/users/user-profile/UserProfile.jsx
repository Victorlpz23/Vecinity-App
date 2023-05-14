import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthStore';


function UserProfile() {
  const { user } = useContext(AuthContext);
  const userCommunity = user?.community?.id || user?.community

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700 flex justify-center">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <Link to={`/communities/${userCommunity}/users/${user?.id}/account`} className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange hover:border-orange dark:hover:text-gray-300 group">
              <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-400 group-hover:text-orange dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>Profile
            </Link>
          </li>
          <li className="mr-2">
            <Link to={`/communities/${userCommunity}/users/${user?.id}/settings`} className="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange hover:border-orange dark:hover:text-gray-300 group">
              <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-400 group-hover:text-orange dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>Settings
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full h-52 flex items-center justify-center">
          <img
            className="w-32 h-32 rounded-full object-cover"
            src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
            alt="Userprofilepicture"
          />
        </div>

        
        <button className="flex -mt-20 -mr-48 hover:underline bg-orange text-black font-bold rounded-full my-6 py-2 px-2 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        <svg width="16px" height="16px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M14.363 5.652l1.48-1.48a2 2 0 012.829 0l1.414 1.414a2 2 0 010 2.828l-1.48 1.48m-4.243-4.242l-9.616 9.615a2 2 0 00-.578 1.238l-.242 2.74a1 1 0 001.084 1.085l2.74-.242a2 2 0 001.24-.578l9.615-9.616m-4.243-4.242l4.243 4.242" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        
        <div className='ml-2 text-white text-xs'>Edit Picture</div>
        </button>


        <div className="w-full p-4 bg-greensoft dark:bg-gray-800">
          
          <div className='flex justify-center mt-4'>
            <div>
              <h1 className="text-green mb-3 font-bold"><svg
                          width="25px"
                          height="25px"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#ff914d"
                        >
                          <path
                            d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1"
                            stroke="#ff914d"
                            strokeWidth="2"
                            strokeLinecap="round"
                          ></path>
                          <path
                            d="M12 12a3 3 0 100-6 3 3 0 000 6z"
                            stroke="#ff914d"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z"
                            stroke="#ff914d"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg></h1>
              <p className="text-green mb-3 font-bold"><svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#ff914d"
                        >
                          <path
                            d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1M1 18v-1a3 3 0 013-3v0M23 18v-1a3 3 0 00-3-3v0M12 12a3 3 0 100-6 3 3 0 000 6zM4 14a2 2 0 100-4 2 2 0 000 4zM20 14a2 2 0 100-4 2 2 0 000 4z"
                            stroke="#ff914d"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg></p>
              <p className="text-green mb-4 font-bold"><svg width="25px" height="25px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ff914d"><path d="M11 21H4a2 2 0 01-2-2v-4.54a2 2 0 01.963-1.71l3.5-2.122a2 2 0 012.074 0l3.5 2.121A2 2 0 0113 14.46V19a2 2 0 01-2 2zM6.5 10V6.46a2 2 0 01.963-1.71l3.5-2.122a2 2 0 012.074 0l3.5 2.121a2 2 0 01.963 1.71V10M16 21h4a2 2 0 002-2v-4.54a2 2 0 00-.963-1.71l-3.506-2.125a2 2 0 00-2.065-.005l-.633.38" stroke="#ff914d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 21v-3.4a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6V21M18 21v-3.4a.6.6 0 00-.6-.6H16" stroke="#ff914d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></p>

              <p className="text-green mb-4 font-bold"><svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ff914d"><path d="M3 21h18v-9a9 9 0 10-18 0v9zM3 17h18" stroke="#ff914d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 17v-4h12M13 13V9h7" stroke="#ff914d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></p>
            </div>
            <div className='ml-3'>
              <h1 className="text-green mb-4 font-bold">Name: </h1>
              <p className="text-green mb-4 font-bold">Last Name: </p>
              <p className="text-green mb-4 font-bold">Address: </p>
              <p className="text-green mb-4 font-bold">Home: </p>
            </div>
            <div>
              <h1 className="text-green text-end mb-4">{user?.name}</h1>
              <p className="text-green text-end mb-4">{user?.lastName}</p>
              <p className="text-green text-end mb-4">{user?.community?.address}</p>
              <p className="text-green text-end mb-4">{user?.home}</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default UserProfile;