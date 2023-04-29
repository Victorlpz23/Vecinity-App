import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthStore';


function Navbar() {

  const { user, logout } = useContext(AuthContext);


  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src="/images/Vecinity-logo.png" className="h-12 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl md:text-4xl  font-semibold whitespace-nowrap animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent dark:text-white">Vecinity App</span>
          </a>
          <div className="flex items-center md:order-2">
            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="userphoto" />
            </button>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {(user?.community) ? (
                <>
                  <NavLink to={`/communities/${user.community.id}`} className="block py-2 pl-3 pr-4 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-blue-500">
                    My Community
                  </NavLink>
                  <NavLink to="/profile" className="block py-2 pl-3 pr-4 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-blue-500">
                    {user.email}
                  </NavLink>
                  <li className="block py-2 pl-3 pr-4 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-blue-500">
                    <button onClick={() => logout()} >Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <NavLink to="/communities/join" className="block py-2 pl-3 pr-4 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-blue-500">
                    Join
                  </NavLink>
                  <NavLink to="/login" className="block py-2 pl-3 pr-4 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-blue-500">
                    Login
                  </NavLink>
                  <NavLink to="/users" className="block py-2 pl-3 pr-4 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-blue-500">
                    Sign Up
                  </NavLink>
                </>
              )}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;




