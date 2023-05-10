import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthStore';


function Navbar() {

  const { user, logout } = useContext(AuthContext);


  return (
    <>
      <nav className="bg-white border-gray-500 dark:bg-gray-900 sticky top-0 z-50 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src="/images/Vecinity-logo.png" className="h-12 mr-3" alt="Vecinity Logo" />
            <span className="self-center text-3xl md:text-4xl font-semibold whitespace-nowrap animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent">Vecinity App</span>
          </Link>
          {(user?.id) ? (
            <div className="flex items-center md:order-2 me-3">
              <img className="w-11 h-11 rounded-full" src={user?.imageUrl} alt="userphoto" />
            </div>

          ) : (
            <>
            </>
          )}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {(user?.community) ? (
                <>
                  <NavLink to={`/communities/${user.community.id}`} className="block py-2 pl-3 pr-4 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-orange">
                    My Community
                  </NavLink>
                  <li to="/profile" className="block py-2 pl-3 pr-4 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-orange">
                    <h1>Welcome {user.name}</h1>
                  </li>
                  <li className="block py-2 pl-3 pr-4 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-orange">
                    <button onClick={() => logout()} >Log out</button>
                  </li>
                </>
              ) : (
                <>
                  <NavLink to="/join" className="block py-2 pl-3 pr-4 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-orange">
                    Join
                  </NavLink>
                  <NavLink to="/login" className="block py-2 pl-3 pr-4 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-orange">
                    Log in
                  </NavLink>
                  <NavLink to="/signup" className="block py-2 pl-3 pr-4 mb-2 text-white bg-orange rounded md:bg-transparent md:text-orange md:p-0 md:dark:text-orange">
                    Sign up
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




