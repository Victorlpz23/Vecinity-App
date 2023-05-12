import React from "react";


function UserUpdate() {
  

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 mb-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form>
              
                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        width="25px"
                        height="25px"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#809d7b"
                      >
                        <path
                          d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1"
                          stroke="#809d7b"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M12 12a3 3 0 100-6 3 3 0 000 6z"
                          stroke="#809d7b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z"
                          stroke="#809d7b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    
                  </div>
                </div>
                <button
                  className="w-full text-white bg-orange hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create community
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserUpdate;
