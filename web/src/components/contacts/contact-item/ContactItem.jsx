import React from 'react';



function ContactItem({ contact, communityId }) {

  return (

    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto">
          <div className="w-full bg-white rounded-lg  shadow-orange shadow-sm dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
              <h1 className="text-xl font-bold text-orange leading-tight text-center tracking-tight text-green md:text-2xl dark:text-white">
                {contact.name}
              </h1>
              <ul>
                <li className='font-bold text-green mb-1'>{contact.description}</li>
                <li className="flex flex-row">
                  <div className='mt-1 me-3'>
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.14089 4.4021C2.34025 2.92963 3.63956 2 4.99004 2H7.55848C8.84977 2 9.99619 2.82629 10.4045 4.05132L11.454 7.19963C11.905 8.55283 11.1086 10.0036 9.72482 10.3496C9.38646 10.4342 9.26975 10.8555 9.51637 11.1022L12.8978 14.4836C13.1445 14.7303 13.5658 14.6135 13.6504 14.2752C13.9964 12.8914 15.4472 12.095 16.8004 12.546L19.9487 13.5955C21.1737 14.0038 22 15.1502 22 16.4415V19.01C22 20.3604 21.0704 21.6598 19.5979 21.8591C18.9114 21.9521 18.211 22 17.5 22C8.93959 22 2 15.0604 2 6.5C2 5.78898 2.04794 5.08863 2.14089 4.4021Z" fill="#809d7b"></path> </g></svg>
                  </div>
                  <div>{contact.phoneNumber}</div>
                </li>
                <li className="flex flex-row">
                  <div className='mt-1 me-3'>
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#809d7b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#809d7b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#809d7b" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
                  </div>
                  <div>{contact.email}</div>
                </li>
                <li className="flex flex-row">
                  <div className='mt-1 me-3'>
                    <svg fill="#809d7b" width="15px" height="15px" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg" stroke="#809d7b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.417 9.57a7.917 7.917 0 1 1-8.144-7.908 1.758 1.758 0 0 1 .451 0 7.913 7.913 0 0 1 7.693 7.907zM5.85 15.838q.254.107.515.193a11.772 11.772 0 0 1-1.572-5.92h-3.08a6.816 6.816 0 0 0 4.137 5.727zM2.226 6.922a6.727 6.727 0 0 0-.511 2.082h3.078a11.83 11.83 0 0 1 1.55-5.89q-.249.083-.493.186a6.834 6.834 0 0 0-3.624 3.622zm8.87 2.082a14.405 14.405 0 0 0-.261-2.31 9.847 9.847 0 0 0-.713-2.26c-.447-.952-1.009-1.573-1.497-1.667a8.468 8.468 0 0 0-.253 0c-.488.094-1.05.715-1.497 1.668a9.847 9.847 0 0 0-.712 2.26 14.404 14.404 0 0 0-.261 2.309zm-.974 5.676a9.844 9.844 0 0 0 .713-2.26 14.413 14.413 0 0 0 .26-2.309H5.903a14.412 14.412 0 0 0 .261 2.31 9.844 9.844 0 0 0 .712 2.259c.487 1.036 1.109 1.68 1.624 1.68s1.137-.644 1.623-1.68zm4.652-2.462a6.737 6.737 0 0 0 .513-2.107h-3.082a11.77 11.77 0 0 1-1.572 5.922q.261-.086.517-.194a6.834 6.834 0 0 0 3.624-3.621zM11.15 3.3a6.82 6.82 0 0 0-.496-.187 11.828 11.828 0 0 1 1.55 5.89h3.081A6.815 6.815 0 0 0 11.15 3.3z"></path></g></svg>
                  </div>
                  <div>{contact.contactUrl}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}



export default ContactItem;