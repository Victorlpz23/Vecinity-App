import React from 'react'

function UsersJoin() {
  return (
    <>
       <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Join your Community!
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Code..." required="" />
              </div>
              <button type="submit" className="w-full text-white bg-orange hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Join</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have Community Code yet? <a href="/" className="font-medium text-green hover:underline dark:text-primary-500">Create Community</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default UsersJoin