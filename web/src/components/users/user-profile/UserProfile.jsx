import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthStore';


function UserProfile() {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <>
      <div class="border-b border-gray-200 dark:border-gray-700 flex justify-center">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li class="mr-2">
            <Link to={`/communities/${user?.community.id}/users/${user?.id}/account`} class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange hover:border-gray-300 dark:hover:text-gray-300 group">
              <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-orange dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>Profile
            </Link>
          </li>
          <li class="mr-2">
            <Link to={`/communities/${user?.community.id}/users/${user?.id}/settings`} class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange hover:border-gray-300 dark:hover:text-gray-300 group">
              <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-orange dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>Settings
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
        <div className="w-full max-w-md p-4">
          <h1 className="text-3xl font-bold mb-2">Name: {user?.name}</h1>
          <p className="text-gray-700 mb-4">Last Name: {user?.lastName}</p>
          <p className="text-gray-700 mb-4">Address: {user?.community?.address}</p>
          <p className="text-gray-700 mb-4">Home: {user?.home}</p>
        </div>
      </div>
    </>
  );
}

export default UserProfile;