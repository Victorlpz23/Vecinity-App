import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthStore'
import PageLayout from '../components/layout/PageLayout';


function CommunityHome() {
  const { user } = useContext(AuthContext);


  return (
    <>
      <PageLayout title="My Community">
      <div className="grid grid-cols-2 gap-8 justify-items-center lg:grid-cols-3 md:grid-cols-2 lg: pt-16">
        <NavLink to={`/communities/${user?.community}/claims`}>
          <div>
          <svg className='hover:animate-spin' width="80px" height="80px" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#809d7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <h1 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Claims</h1>
          </div>
        </NavLink>

        <NavLink to={`/communities/${user?.community}/events`}>
          <div className='mb-5 transition duration-150 ease-out hover:ease-in'>
          <svg width="80px" height="80px" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M15 4V2m0 2v2m0-2h-4.5M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9H3zM3 10V6a2 2 0 012-2h2M7 2v4M21 10V6a2 2 0 00-2-2h-.5" stroke="#809d7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <h3 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Events</h3>
          </div>
        </NavLink>

        <NavLink to={`/communities/${user?.community}/forumTopics`}>
          <div className='mb-5'>
          <svg className='hover:animate-pulse' width="80px" height="80px" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M8 10h8M8 14h4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z" stroke="#809d7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> 
          <h3 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Forum</h3>
          </div>
        </NavLink>

        <NavLink to={`/communities/${user?.community}/contacts`}>
          <div className='mb-5'>
          <svg className='hover:animate-ping' width="80px" strokeWidth="2" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M4 19V5a2 2 0 012-2h13.4a.6.6 0 01.6.6v13.114" stroke="#809d7b" strokeWidth="2" strokeLinecap="round"></path><path d="M8 3v8l2.5-1.6L13 11V3" stroke="orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6 17h14M6 21h14" stroke="#809d7b" strokeWidth="2" strokeLinecap="round"></path><path d="M6 21a2 2 0 110-4" stroke="#809d7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
             <h3 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Contacts</h3>
          </div>
        </NavLink>

        <NavLink to={`/communities/${user?.community}/reservations`}>
          <div className='mb-5'>
          <svg className='ml-3 hover:animate-bounce' width="80px" height="80px" viewBox="0 0 24 24" strokeWidth="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M8.5 4H6a2 2 0 00-2 2v14a2 2 0 002 2h6M15.5 4H18a2 2 0 012 2v9" stroke="#809d7b" strokeWidth="2" strokeLinecap="round"></path><path d="M8 6.4V4.5a.5.5 0 01.5-.5c.276 0 .504-.224.552-.496C9.2 2.652 9.774 1 12 1s2.8 1.652 2.948 2.504c.048.272.276.496.552.496a.5.5 0 01.5.5v1.9a.6.6 0 01-.6.6H8.6a.6.6 0 01-.6-.6z" stroke="orange" strokeWidth="2" strokeLinecap="round"></path><path d="M15.5 20.5l2 2 5-5" stroke="orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <h3 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Reservations</h3>
          </div>
        </NavLink>

        <NavLink to={`/communities/${user?.community}/users/${user?.id}/account`}>
          <div className='mb-5'>
          <svg className='hover:animate-spin' width="80px" height="80px" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="orange" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605z" stroke="#809d7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <h3 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Settings</h3>
          </div>
        </NavLink>
      </div>
      </PageLayout>
    </>
  );
}

export default CommunityHome;