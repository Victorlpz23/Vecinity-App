import React, { useEffect, useState } from 'react';
import ContactItem from '../contact-item/ContactItem';
import contactService from '../../../services/contacts';
import { useParams } from 'react-router-dom';

function ContactList({ refresh }) {

  const [contacts, setContacts] = useState();
  const { id } = useParams();

  useEffect(() => {
    contactService.list(id)
      .then((contacts) => {
        setContacts(contacts);
      }).catch(console.error);
  }, [id, refresh]);

  return (
    <>
      {contacts === undefined ? (
        <>
        <div className="flex flex-col items-center justify-center px-6  mx-auto lg:py-0 mb-2">
          <div className="w-96 mx-32 bg-white rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700">
            <div className='flex justify-center mt-5 mb-3'>
              <div role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto mb-20">
          <div className=" w-96 bg-white rounded-lg shadow dark:border   dark:bg-gray-800 dark:border-gray-700">
            <div className='flex justify-center  mb-3'>
              <div role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        </>
      ) : (
        <>
        { contacts.map(contact => <div><ContactItem contact={contact} communityId={id} key={contact.id} /></div>) }
        </>
      )
      }
    </>
  );
}

export default ContactList;