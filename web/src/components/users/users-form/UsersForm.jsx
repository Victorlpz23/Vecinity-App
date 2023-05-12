import React, { useState } from "react";
import { useForm } from "react-hook-form";
import userService from "../../../services/users";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function UsersForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [serverError, setServerError] = useState();
  const navigate = useNavigate();

  const onUserSubmit = (user) => {
    setServerError();
    userService
      .create(user)
      .then((user) => {
        console.info(user);
        navigate("/login");
      })

      .catch((error) => {
        const errors = error.response?.data?.errors;
        if (errors) {
          Object.keys(errors).forEach((inputName) =>
            setError(inputName, { message: errors[inputName] })
          );
        } else {
          setServerError(error.message);
        }
      });
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 mb-20">
        <div className="flex flex-wrap justify-center items-center align-center space-between">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-8 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border lg:w-[800px] dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex flex-col lg:flex-row-reverse lg:w-[800px]">
                <form
                  onSubmit={handleSubmit(onUserSubmit)}
                  className="space-y-4 md:space-y-6 lg:pl-10 lg:mr-20"
                >
                  {serverError && (
                    <div
                      className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                      role="alert"
                    >
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 inline w-5 h-5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Info</span>
                      <div>
                        <span className="font-medium">{serverError}</span>
                      </div>
                    </div>
                  )}

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
                      <input
                        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                            focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10 p-2.5 ${errors.name
                                            ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500
                            focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400`
                            : ""
                          }`}
                        id="name"
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                      />
                    </div>
                    <div>
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                          <span className="font-medium">Oops! </span>
                          {errors.name?.message}{" "}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* lastName */}

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#809d7b"
                        >
                          <path
                            d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1M1 18v-1a3 3 0 013-3v0M23 18v-1a3 3 0 00-3-3v0M12 12a3 3 0 100-6 3 3 0 000 6zM4 14a2 2 0 100-4 2 2 0 000 4zM20 14a2 2 0 100-4 2 2 0 000 4z"
                            stroke="#809d7b"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <input
                        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                    focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10 p-2.5 ${errors.lastName
                            ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500
                    focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400`
                            : ""
                          }`}
                        id="name"
                        type="text"
                        placeholder="Last Name"
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                      />
                    </div>
                    <div>
                      {errors.lastName && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                          <span className="font-medium">Oops! </span>
                          {errors.lastName?.message}{" "}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}

                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#809d7b"
                      >
                        <path
                          d="M9 9l4.5 3L18 9M3 13.5h2M1 10.5h4"
                          stroke="#809d7b"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5 7.5V7a2 2 0 012-2h13a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2v-.5"
                          stroke="#809d7b"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </div>
                    <input
                      className={`bg-gray-50 border -mt-2 lg:-mt-4 md:-mt-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lock w-full pl-12 p-2.5 ${errors.email
                          ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500
                        focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400`
                          : ""
                        }`}
                      id="email"
                      type="email"
                      placeholder="Email"
                      {...register("email", { required: "Email is required" })}
                    />
                  </div>
                  <div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className="font-medium">Oops! </span>
                        {errors.email?.message}{" "}
                      </p>
                    )}
                  </div>

                  {/* Password */}

                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        width="30px"
                        height="30px"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#809d7b"
                      >
                        <path
                          d="M16 12h1.4a.6.6 0 01.6.6v6.8a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6v-6.8a.6.6 0 01.6-.6H8m8 0V8c0-1.333-.8-4-4-4S8 6.667 8 8v4m8 0H8"
                          stroke="#809d7b"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <input
                      className={`bg-gray-50 border -mt-2 lg:-mt-4 md:-mt-4 border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block  dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lock w-full pl-12 p-2.5 ${errors.password
                          ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500
                        focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400`
                          : ""
                        }`}
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                  </div>
                  <div>
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className="font-medium">Oops! </span>
                        {errors.password?.message}{" "}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <Link
                          className="font-medium text-green hover:underline dark:text-primary-500"
                          to="/"
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-orange hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login"
                      className="font-medium text-green hover:underline dark:text-primary-500"
                    >
                      Login here
                    </Link>
                  </p>
                </form>
                <div>
                  <img
                    src="/images/mobile2.png"
                    className="w-80 lg:w-96"
                    alt="sing up illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UsersForm;
