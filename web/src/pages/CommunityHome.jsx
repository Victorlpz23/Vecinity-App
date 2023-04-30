import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthStore'


function CommunityHome() {
  const { user } = useContext(AuthContext);


  return (
    <>
      <div className="grid grid-cols-3 gap-3 justify-items-center mt-8">
        <NavLink to={`/communities/${user?.community.id}/claims`}>
          <div className='mb-5 hover:scale-125'>
            <svg width="70px" height="70px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-exclamation-circle" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM10.5 7.5V12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12V7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5ZM12 18C12.8284 18 13.5 17.3284 13.5 16.5C13.5 15.6716 12.8284 15 12 15C11.1716 15 10.5 15.6716 10.5 16.5C10.5 17.3284 11.1716 18 12 18Z" fill="#809D7B"></path></g></svg>
            <h3 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Claims</h3>
          </div>
        </NavLink>

        <NavLink to={`/communities/${user?.community.id}/events`}>
          <div className='mb-5 transition duration-150 ease-out hover:ease-in'>
            <svg fill="#809D7B" width="70px" height="70px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>calendar</title> <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-1.952-1.12-3.488t-2.88-2.144v2.624q0 1.248-0.864 2.144t-2.144 0.864-2.112-0.864-0.864-2.144v-3.008h-12v3.008q0 1.248-0.896 2.144t-2.112 0.864-2.144-0.864-0.864-2.144v-2.624q-1.76 0.64-2.88 2.144t-1.12 3.488v20zM4 26.016v-16h24v16q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM6.016 3.008q0 0.416 0.288 0.704t0.704 0.288 0.704-0.288 0.288-0.704v-3.008h-1.984v3.008zM8 24h4v-4h-4v4zM8 18.016h4v-4h-4v4zM14.016 24h4v-4h-4v4zM14.016 18.016h4v-4h-4v4zM20 24h4v-4h-4v4zM20 18.016h4v-4h-4v4zM24 3.008q0 0.416 0.288 0.704t0.704 0.288 0.704-0.288 0.32-0.704v-3.008h-2.016v3.008z"></path> </g></svg>
            <h3 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Events</h3>
          </div>
        </NavLink>

        <NavLink to={`/communities/${user?.community.id}/forumTopics`}>
          <div className='mb-5'>
            <svg className='ms-3' fill="#809D7B" width="70px" height="70px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#809D7B"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="chat-message-phone-heart-love"> <path d="M376,152h-24V72c0-22.055-17.945-40-40-40H136c-22.055,0-40,17.945-40,40v368c0,22.055,17.945,40,40,40h176 c22.055,0,40-17.945,40-40V288h24c17.673,0,32-14.327,32-32v-72C408,166.327,393.673,152,376,152z M339.784,199.072 c6.283,7.845,4.913,19.398-2.104,26.594l-19.952,20.46c-3.14,3.22-8.315,3.22-11.455,0l-19.952-20.46 c-7.017-7.196-8.387-18.749-2.104-26.594c7.145-8.922,20.021-9.402,27.784-1.442C319.763,189.67,332.64,190.15,339.784,199.072z M176,424c0-8.837,7.164-16,16-16h64c8.836,0,16,7.163,16,16c0,8.836-7.164,16-16,16h-64C183.164,440,176,432.836,176,424z M336,376H112V88h224v64h-88c-17.673,0-32,14.327-32,32v72c0,17.673,14.327,32,32,32h8v36.686c0,7.127,8.617,10.697,13.657,5.657 L312,288h24V376z"></path> </g> <g id="Layer_1"></g> </g></svg>
            <h3 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Forum</h3>
          </div>
        </NavLink>

        <NavLink to={`/communities/${user?.community.id}/contacts`}>
          <div className='mb-5'>
            <svg width="70px" height="70px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#809D7B"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C5.34315 2 4 3.34315 4 5V6H3C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8H4V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4V16H3C2.44772 16 2 16.4477 2 17C2 17.5523 2.44772 18 3 18H4V19C4 20.6569 5.34315 22 7 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H7ZM9 12C9 9.79086 10.7909 8 13 8C15.2091 8 17 9.79086 17 12C17 14.2091 15.2091 16 13 16C10.7909 16 9 14.2091 9 12ZM10.3373 19.6816C10.7235 19.2671 11.415 19 12.9909 19C14.606 19 15.2909 19.2611 15.6701 19.6753C16.0431 20.0826 16.6757 20.1105 17.083 19.7375C17.4903 19.3646 17.5182 18.732 17.1452 18.3247C16.1519 17.2398 14.683 17 12.9909 17C11.3097 17 9.8629 17.2568 8.87391 18.3184C8.49745 18.7225 8.51985 19.3552 8.92395 19.7317C9.32804 20.1081 9.96081 20.0857 10.3373 19.6816Z" fill="#FF914D"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 10C11.8954 10 11 10.8954 11 12C11 13.1046 11.8954 14 13 14C14.1046 14 15 13.1046 15 12C15 10.8954 14.1046 10 13 10Z" fill="#FF914D"></path> </g></svg>
            <h3 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Contacts</h3>
          </div>
        </NavLink>

        <NavLink to={`/communities/${user?.community.id}/reservations`}>
          <div className='mb-5'>
            <svg className='ms-3' fill="#809D7B" width="70px" height="70px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g data-name="Layer 2" id="Layer_2"> <path d="M2,20H22V4H2Zm11-9.72a2,2,0,0,1,0,3.44Zm-2,3.44a2,2,0,0,1,0-3.44ZM20,14H19V10h1Zm0-6H17v8h3v2H13V15.86a4,4,0,0,0,0-7.72V6h7ZM11,6V8.14a4,4,0,0,0,0,7.72V18H4V16H7V8H4V6ZM4,14V10H5v4Z"></path> </g> </g></svg>
            <h3 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Reservations</h3>
          </div>
        </NavLink>

        <NavLink to={`/communities/${user?.community.id}/users/${user?.id}/account`}>
          <div className='mb-5'>
            <svg fill="#809D7B" width="70px" height="70px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#809D7B"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.015 12.97l-2.567-0.569c-0.2-0.64-0.462-1.252-0.762-1.841l1.389-2.313c0.518-0.829 0.78-2.047 0-2.829l-1.415-1.414c-0.78-0.781-2.098-0.64-2.894-0.088l-2.251 1.434c-0.584-0.303-1.195-0.563-1.829-0.768l-0.576-2.598c-0.172-0.953-1.005-1.984-2.11-1.984h-2c-1.104 0-1.781 1.047-2 2l-0.642 2.567c-0.678 0.216-1.328 0.492-1.948 0.819l-2.308-1.47c-0.795-0.552-2.114-0.692-2.894 0.088l-1.415 1.414c-0.781 0.782-0.519 2 0 2.828l1.461 2.435c-0.274 0.552-0.517 1.123-0.705 1.72l-2.566 0.569c-0.953 0.171-1.984 1.005-1.984 2.109v2c0 1.105 1.047 1.782 2 2l2.598 0.649c0.179 0.551 0.404 1.080 0.658 1.593l-1.462 2.438c-0.518 0.828-0.78 2.047 0 2.828l1.415 1.414c0.78 0.782 2.098 0.64 2.894 0.089l2.313-1.474c0.623 0.329 1.277 0.608 1.96 0.823l0.64 2.559c0.219 0.953 0.896 2 2 2h2c1.105 0 1.938-1.032 2.11-1.985l0.577-2.604c0.628-0.203 1.23-0.459 1.808-0.758l2.256 1.438c0.796 0.552 2.114 0.692 2.895-0.089l1.415-1.414c0.78-0.782 0.518-2 0-2.828l-1.39-2.317c0.279-0.549 0.521-1.12 0.716-1.714l2.599-0.649c0.953-0.219 2-0.895 2-2v-2c0-1.104-1.031-1.938-1.985-2.11zM30.001 16.939c-0.085 0.061-0.245 0.145-0.448 0.192l-3.708 0.926-0.344 1.051c-0.155 0.474-0.356 0.954-0.597 1.428l-0.502 0.986 1.959 3.267c0.125 0.2 0.183 0.379 0.201 0.485l-1.316 1.314c-0.127-0.040-0.271-0.092-0.341-0.14l-3.292-2.099-1.023 0.529c-0.493 0.256-0.999 0.468-1.503 0.631l-1.090 0.352-0.824 3.723c-0.038 0.199-0.145 0.36-0.218 0.417h-1.8c-0.061-0.085-0.145-0.245-0.191-0.448l-0.921-3.681-1.066-0.338c-0.549-0.173-1.097-0.404-1.63-0.684l-1.028-0.543-3.293 2.099c-0.135 0.091-0.279 0.143-0.409 0.143l-1.311-1.276c0.018-0.104 0.072-0.274 0.181-0.449l2.045-3.408-0.487-0.98c-0.227-0.462-0.407-0.895-0.547-1.325l-0.343-1.052-3.671-0.918c-0.231-0.052-0.398-0.139-0.485-0.2v-1.86c0.001 0.001 0.002 0.001 0.005 0.001 0.034 0 0.198-0.117 0.335-0.142l3.772-0.835 0.346-1.103c0.141-0.449 0.333-0.917 0.588-1.43l0.487-0.98-2.024-3.373c-0.125-0.201-0.184-0.38-0.201-0.485l1.315-1.314c0.128 0.041 0.271 0.093 0.34 0.14l3.354 2.138 1.027-0.542c0.527-0.278 1.073-0.507 1.622-0.682l1.063-0.338 0.912-3.649c0.053-0.231 0.138-0.398 0.2-0.485h1.859c-0.014 0.020 0.115 0.195 0.142 0.339l0.84 3.794 1.089 0.352c0.511 0.165 1.023 0.38 1.523 0.639l1.023 0.532 3.224-2.053c0.135-0.092 0.279-0.143 0.409-0.143l1.313 1.276c-0.017 0.104-0.072 0.276-0.181 0.45l-1.98 3.296 0.505 0.988c0.273 0.533 0.48 1.033 0.635 1.529l0.346 1.104 3.697 0.82c0.224 0.041 0.398 0.171 0.434 0.241zM16.013 9.99c-3.321 0-6.023 2.697-6.023 6.010s2.702 6.010 6.023 6.010 6.023-2.697 6.023-6.009c0-3.313-2.702-6.010-6.023-6.010zM16 20c-2.205 0-4-1.794-4-4s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.794 4-4 4z"></path> </g></svg>
            <h3 className='animate-text bg-gradient-to-r from-orange via-orange to-green bg-clip-text text-transparent text-center mt-3 font-bold'>Settings</h3>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default CommunityHome;