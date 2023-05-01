import React from 'react';
import { NavLink } from 'react-router-dom';

function CreateJoinPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Welcome to Vecinity!
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Choose an option to get started
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <NavLink
              to={'/join'}
              className="flex items-center justify-center h-48 bg-white hover:bg-gray-100  text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow active:bg-orange"
            >
              <div>
                <h3 className="text-xl">Join your Community</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Once you've joined your community you'll be able to submit claims, socialize with your neighbours and so much more!
                </p>
              </div>
            </NavLink>
            <NavLink
              to={'/communities/create'}
              className="flex items-center justify-center h-48 bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow active:bg-orange"
            >
              <div>
                <h3 className="text-xl">Create a Community</h3>
                <p className="text-gray-500 mt-2 text-sm">
                  Are you a community manager? Start your community and invite the neighbours to join!
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateJoinPage;