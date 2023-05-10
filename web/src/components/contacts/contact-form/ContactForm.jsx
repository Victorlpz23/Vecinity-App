import React, { useState } from "react";
import { useForm } from "react-hook-form";
import contactService from "../../../services/contacts";
import { useParams } from "react-router-dom";

function ContactForm({ onContactCreated }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [serverError, setServerError] = useState(undefined);
  const { id } = useParams();

  const onContactSubmit = (contact) => {
    setServerError();
    contactService
      .create(id, contact)
      .then((contact) => {
        console.info(contact);
        onContactCreated();;
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
      <section className="bg-white dark:bg-gray-800 pb-16">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:py-6 lg:py-6 mb-20">
          <div className="w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-green md:text-2xl dark:text-white">
                Add a new contact
              </h1>
              <form
                onSubmit={handleSubmit(onContactSubmit)}
                className="space-y-4 md:space-y-6"
                action="#"
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
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg width="25px" height="25px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1" stroke="#809d7b" stroke-width="2" stroke-linecap="round"></path><path d="M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="#809d7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z" stroke="#809d7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                    <input className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                      focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10 p-2.5 ${errors.name
                        ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500
                      focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400` : ''}`} id="name"
                      type="text" placeholder="Name" {...register('name', { required: "Name is required", })} />
                  </div>
                  <div>
                    {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>
                      {errors.name?.message} </p>}
                  </div>
                </div>



                {/*  Description */}

                <div>
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg width="25px" height="25px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M7 12h10M7 8h6" stroke="#809d7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 20.29V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H7.961a2 2 0 00-1.561.75l-2.331 2.914A.6.6 0 013 20.29z" stroke="#809d7b" stroke-width="2"></path></svg>
                    </div>
                    <input className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10 p-2.5 ${errors.description
                        ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500
                        focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400` : ''}`} id="name"
                      type="text" placeholder="Description" {...register('description', { required: "Description is required", })} />
                  </div>
                  <div>
                    {errors.description && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>
                      {errors.description?.message} </p>}
                  </div>
                </div>

                {/* Phone Number */}

                <div>
                  <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg width="25px" height="25px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479z" stroke="#809d7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                    <input className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10 p-2.5 ${errors.phoneNumber
                        ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500
                        focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400` : ''}`} id="name"
                      type="phone" placeholder="Phone Number" {...register('phoneNumber', { required: "Phone Number is required", })} />
                  </div>
                  <div>
                    {errors.phoneNumber && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>
                      {errors.phoneNumber?.message} </p>}
                  </div>
                </div>



                {/* Email */}

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg width="25px" height="25px" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M9 9l4.5 3L18 9M3 13.5h2M1 10.5h4" stroke="#809d7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 7.5V7a2 2 0 012-2h13a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2v-.5" stroke="#809d7b" stroke-width="2" stroke-linecap="round"></path></svg>
                    </div>
                    <input className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                      focus:ring-primary-600 focus:border-primary-600 block dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lock w-full pl-10 p-2.5 ${errors.email
                        ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500
                      focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400` : ''}`} id="email"
                      type="email" placeholder="Email" {...register('email', { required: "Email is required", })} />
                  </div>
                  <div>
                    {errors.email && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>
                      {errors.email?.message} </p>}
                  </div>
                </div>


                    {/* Contact Url */}

                    <div>
                  <label htmlFor="contactUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">WebSite</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg width="25px" height="25px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#809d7b"><path d="M3.338 17A9.996 9.996 0 0012 22a9.996 9.996 0 008.662-5M3.338 7A9.996 9.996 0 0112 2a9.996 9.996 0 018.662 5M13 21.95s1.408-1.853 2.295-4.95M13 2.05S14.408 3.902 15.295 7M11 21.95S9.592 20.098 8.705 17M11 2.05S9.592 3.902 8.705 7M9 10l1.5 5 1.5-5 1.5 5 1.5-5M1 10l1.5 5L4 10l1.5 5L7 10M17 10l1.5 5 1.5-5 1.5 5 1.5-5" stroke="#809d7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </div>
                    <input className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                      focus:ring-primary-600 focus:border-primary-600 block dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lock w-full pl-10 p-2.5 ${errors.contactUrl
                        ? `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500
                      focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400` : ''}`} id="contactUrl"
                      type="contactUrl" placeholder="Website" {...register('contactUrl', { required: "Website is required", })} />
                  </div>
                  <div>
                    {errors.contactUrl && <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops! </span>
                      {errors.contactUrl?.message} </p>}
                  </div>
                </div>





                <button
                  type="submit"
                  className="w-full text-white bg-orange hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Add contact
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
