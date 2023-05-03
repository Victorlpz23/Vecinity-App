import React from 'react';
import './Home.css';
import { Link, NavLink } from 'react-router-dom';


function Home() {

  return (
    <>
      <div className="pt-24 gradient-bg">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

          <div className="flex flex-col w-full  lg:w-full justify-center items-start text-center md:text-left pb-40">
            <p className="uppercase tracking-loose w-full">Neighbours community management app</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Join your neighbours in Vecinity!
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Discover everything you can do with Vecinity App
            </p>
            <NavLink to="/signup" className="mx-auto lg:mx-60 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
      <div className="relative -mt-24 lg:-mt-48">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Vecinity App
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6 flex flex-col items-center justify-center">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Submit a claim in the blink of an eye
              </h3>
              <p className="text-gray-600 mb-8">
                As soon as you notice that something is not working properly, post it on the app so that the manager is aware and can resolve it as soon as possible. You can continue to track its status from the app.
                <br />
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img src="/images/mobile1.png" />
            </div>

            <div className="flex flex-wrap flex-col-reverse sm:flex-row">
              <div className="w-full sm:w-1/2 p-6 mt-6 flex flex-col items-center justify-center">
                <img src="images/mobile2.png" />
              </div>
              <div className="w-full sm:w-1/2 p-6 mt-6 ">
                <div className="align-middle">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    Stay tuned with the community events
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Check out the events calendar to make sure you do not miss any meeting or celebration going on in your community.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-5/6 sm:w-1/2 p-6 ">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Connect with your neighbours like never before
                </h3>
                <p className="text-gray-600 mb-8">
                  With the social community forum you can share anything with your neighbours, from plans to extra food or goodies you might have.
                  <br />
                  <br />
                </p>
              </div>
              <div className="w-full sm:w-1/2 p-6">
                <img src="/images/mobile3.png" />
              </div>
            </div>

            <div className="flex flex-wrap flex-col-reverse sm:flex-row">
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <img src="images/mobile4.png" />
              </div>
              <div className="w-full sm:w-1/2 p-6 mt-6">
                <div className="align-middle">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    Make reservations for your shared facilities instantly
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Up for a paddle match? From the app you will be able to make a reservation nice and easily. Oh, and you can use the forum to find neighbours to play with!
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className="bg-gray-100 border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            How does it work? First steps
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <Link to="#" className="flex flex-wrap no-underline hover:no-underline">
                <p className="w-full text-gray-600 text-xs md:text-sm px-6 pt-5 mb-5">
                  GETTING STARTED
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6 mb-5">
                  FIRST THINGS FIRST: Create a free account for yourself
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  In a couple minutes you will be ready! Just submit a form with some information about yourself.
                </p>
              </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-start">

              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <Link to="#" className="flex flex-wrap no-underline hover:no-underline">
                <p className="w-full text-gray-600 text-xs md:text-sm px-6 pt-5 mb-5">
                  GETTING STARTED
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6 mb-5">
                  Create your community as manager
                </div>
                <p className="text-gray-800 text-base px-6 pt-3 mb-5">
                  Are your a manager of a community? In that case, you will have to create your community in just a few steps.
                </p>
              </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-center">
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <Link to="#" className="flex flex-wrap no-underline hover:no-underline">
                <p className="w-full text-gray-600 text-xs md:text-sm px-6 pt-5 mb-5">
                  GETTING STARTED
                </p>
                <div className="w-full font-bold text-xl text-gray-800 px-6 mb-5">
                  Join your community
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                  Are you a community neighbour? Then click on the join option and in just a few seconds you will be part of your communmity. Make sure your manager provides you with the code for the join!
                </p>
              </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="flex items-center justify-end">

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-2 pt-4 pb-3 bg-white">
          <h2 className="w-full my-1 text-5xl font-bold leading-tight text-center text-gray-800">
            Pricing
          </h2>
          <h4 className='w-full mt-6 text-xl font-bold leading-tight text-center text-gray-400'>Monthly supscriptions</h4>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t">
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center pt-12 mb-12 sm:my-4">
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  Free trial
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4">Facility reservations</li>
                  <li className="border-b py-4">Claim submissions</li>
                  <li className="border-b py-4">Event calendar</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  0€
                  <span className="text-base"> / Up to 10 neighbours</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline bg-orange text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full p-8 text-3xl font-bold text-center border-b-4">Basic</div>
                <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                <ul className="w-full text-center text-base">
                  <li className="border-b py-4">Facility reservations</li>
                  <li className="border-b py-4">Claim submissions</li>
                  <li className="border-b py-4">Events calendar</li>
                  <li className="border-b py-4">Services contacts</li>
                  <li className="border-b py-4">Social forum</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-4xl font-bold text-center">
                  30.99€
                  <span className="text-base"> / Up to 40 neighbours</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline bg-orange text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  Pro
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4">Facility reservations</li>
                  <li className="border-b py-4">Claim submissions</li>
                  <li className="border-b py-4">Events calendar</li>
                  <li className="border-b py-4">Services contacts</li>
                  <li className="border-b py-4">Social forum</li>
                </ul>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  80.99 €
                  <span className="text-base"> / No neighbour limit</span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="mx-auto lg:mx-0 hover:underline bg-orange text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>;

      <section className="bg-white dark:bg-gray-100">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold">Meet our team</h2>

          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div className="text-center text-gray-700 dark:text-gray-700">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/images/Victor.png" alt="Víctor Avatar" />
              <h3 className="mb-1 text-2xl font-bold">
                <Link to="#">Víctor López Arellano</Link>
              </h3>
              <p>Junior Full Stack Developer</p>
              <ul className="flex justify-center items-center mt-3 space-x-4">
                <li>
                  <Link to="https://www.linkedin.com/in/victorlpz23/" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <img className="w-9" src="images/linkedin.png" alt="linkedin logo" />
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/Victorlpz23" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <img className="w-8" src="images/githubpng.png" alt="Github logo" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-700 dark:text-gray-700">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/images/Ana.jpg" alt="Ana Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight">
                <Link to="#">Ana Gutiérrez Ruiz</Link>
              </h3>
              <p>Junior Full Stack Developer</p>
              <ul className="flex justify-center items-center mt-3 space-x-4">
                <li>
                  <Link to="https://www.linkedin.com/in/ana-gutierrezruiz/" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <img className="w-9" src="images/linkedin.png" alt="linkedin logo" />
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/AnaGutierrezRuiz" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <img className="w-8" src="images/githubpng.png" alt="Github logo" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-700 dark:text-gray-700">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/images/Alex.png" alt="Alex Avatar" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight">
                <Link to="#">Alex Garrido Baldrich</Link>
              </h3>
              <p>Junior Full Stack Developer</p>
              <ul className="flex justify-center items-center mt-3 space-x-4">
                <li>
                  <Link to="https://www.linkedin.com/in/alex-garrido-baldrich-07b29aa9/" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <img className="w-9" src="images/linkedin.png" alt="linkedin logo" />
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/garin90" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <img className="w-8" src="images/githubpng.png" alt="Github logo" />
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
            <g className="wave" fill="#F3F4F6">
              <path
                d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
              ></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <section className="mx-auto text-center py-20 mb-8 gradient-bg">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-black">
          Join Vecinity now!
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <Link to='/signup' className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-6 mb-0 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Sign up
        </Link>
      </section>
    </>
  );
}

export default Home;