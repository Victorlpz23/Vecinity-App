import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthStore';
import DarkModeToggle from '../../dark-mode/DarkModeToggle';


function UserSettings() {
  const { user, logout } = useContext(AuthContext);


  return (
    <div className='pb-60'>
      <div class="border-b border-gray-200 dark:border-gray-700 flex justify-center">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 items-center">


          <li class="mr-2">
            <Link to={`/communities/${user?.community.id}/users/${user?.id}/account`} class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange hover:border-orange dark:hover:text-gray-300 group">
              <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-orange dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>Profile
            </Link>
          </li>


          <li class="mr-2">
            <Link to={`/communities/${user?.community.id}/users/${user?.id}/settings`} class="inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange hover:border-orange dark:hover:text-gray-300 group">
              <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-orange dark:text-gray-500 dark:group-hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>Settings
            </Link>
          </li>
        </ul>
      </div>

      


      <div className="pt-11 flex flex-col items-center bg-greensoft pb-6 dark:bg-gray-800">
        <div className="w-full max-w-md p-4">
          <div className="flex">
                        <svg
                          width="24px"
                          height="18px"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#809d7b"
                        >
                          <path
                            d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1"
                            stroke="#809d7b"
                            stroke-width="2"
                            stroke-linecap="round"
                          ></path>
                          <path
                            d="M12 12a3 3 0 100-6 3 3 0 000 6z"
                            stroke="#809d7b"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z"
                            stroke="#809d7b"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        
                        <h2 className='text-lg font-medium text-green'>User Settings</h2></div>
          <div className="flex items-center mb-4">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-green peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-orange rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email notifications</span>
            </label>
          </div>
          <div className="flex items-center mb-4">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-green peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-orange rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Item update notifications</span>
            </label>
          </div>
          <div className="flex items-center mb-4">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-green peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-orange rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Item comment notifications</span>
            </label>
          </div>
          <DarkModeToggle/>
        </div>
      </div>

      <div className="flex flex-col items-center bg-greensoft pb-11 dark:bg-gray-800">
        <div className="w-full max-w-md p-4">
          <h2 className="text-lg font-medium mb-2 text-green">Notification Settings</h2>
          <div className="flex items-center mb-4">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-green peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-orange rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email notifications</span>
            </label>
          </div>
          <div className="flex items-center mb-4">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-green peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-orange rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Claim notifications</span>
            </label>
          </div>
          <div className="flex items-center mb-4">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-green peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-orange rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Forum comment notifications</span>
            </label>
          </div>
          <div className="flex items-center mb-4">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-green peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-orange rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Reservation notifications</span>
            </label>
          </div>
          
        </div>
        <button className="mt-28 text-white bg-orange hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => logout()} >Logout</button>
      </div>
    </div>
  );
}

export default UserSettings;