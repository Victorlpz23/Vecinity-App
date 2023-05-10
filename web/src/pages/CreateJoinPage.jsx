import React from "react";
import { Link } from "react-router-dom";

function CreateJoinPage() {
  return (
    <>
      <div className="bg-white border-b py-8">
        <div className="max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Welcome to Vecinity App
            <br />
             What would you like to do next?
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6 flex flex-col items-center justify-center">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Join your community
              </h3>
              <p className="text-gray-600 mb-8">
                Are you a neigbour? Click this option to join your already
                existing communmity and start enjoying all Vecinity has to offer
                <br />
                <br />
              </p>
              <Link
                to="/join"
                className="mx-auto lg:mx-0 hover:underline bg-orange text-gray-800 font-bold rounded-full -mt-6 mb-0 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Join
              </Link>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img src="/images/mobile-neighbours.png" alt="neighbours" />
            </div>

            <div className="flex flex-wrap flex-col-reverse sm:flex-row">
              <div className="w-full sm:w-1/2 p-6 mt-6 flex flex-col items-center justify-center">
                <img src="images/mobile-manager.png" alt="manager" />
              </div>
              <div className="w-full sm:w-1/2 p-6 mt-6 ">
                <div className="align-middle">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    Create a new community
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Are you the community manager? Click this option to create
                    said community and start managing it like never before
                    <br />
                    <br />
                  </p>
                  <Link
                    to="/communities/create"
                    className="mx-auto lg:mx-0 hover:underline bg-orange text-gray-800 font-bold rounded-full mt-6 mb-0 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    Create 
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateJoinPage;
