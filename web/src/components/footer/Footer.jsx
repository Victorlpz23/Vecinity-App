import React, { useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthStore';

function Footer() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  return (
    <div>

      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white  md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <div class="sticky bottom-0 mb-2 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 lg:hidden md:hidden">
          <div class="grid h-full max-w-lg grid-cols-3 mx-auto border-b">
            <div class="hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
              <NavLink to={`/communities/${user?.community?.id}`}>
                <button type="button" class="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x group-hover:text-orange dark:group-hover:text-blue-500">
                  <svg class="w-6 h-6 mb-1 mt-2 text-gray-500 dark:text-gray-400 group-hover:text-orange dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange dark:group-hover:text-blue-500">Community</span>
                </button>
              </NavLink>
            </div>
            <div class="hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
            <NavLink to={`/communities/${id}/events`}>
              <button type="button" class="inline-flex flex-col items-center justify-center font-medium px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg aria-hidden="true" class="w-6 mt-2 h-6 mb-1 text-blue-800 dark:text-blue-300" fill="orange" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Events</span>
              </button>
            </NavLink>
            </div>
            <div class="hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
            <NavLink to={`/communities/${id}/users/${user?.id}/account`} >
              <button type="button" class="inline-flex flex-col items-center justify-center px-5 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 group border-x dark:border-gray-600">
                <svg class="w-6 h-6 mb-1 mt-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                </svg>
                <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
              </button>
            </NavLink>
            </div>
          </div>
        </div>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Vecinity App™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <p href="#" className="mr-4 hover:underline md:mr-6">About</p>
          </li>
          <li>
            <p href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</p>
          </li>
          <li>
            <p href="#" className="mr-4 hover:underline md:mr-6">Licensing</p>
          </li>
          <li>
            <p href="#" className="hover:underline">Contact</p>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;