import React, { useState } from 'react'
import ContactList from '../components/contacts/contact-list/ContactList';
import ContactForm from '../components/contacts/contact-form/ContactForm';

function ContactsPage() {
  const [refreshContacts, setRefreshContacts] = useState(false)
  
  return (
    <>
      <ContactList/>
      <ContactForm/>
    </>
  )
}

export default ContactsPage



// function ClaimsPage() {
//   const [refreshClaims, setRefreshClaims] = useState(false)

//   const toggleRefreshClaims = () =>  setRefreshClaims(!refreshClaims)

//   return (
//     <>
//     <ClaimsList refresh={refreshClaims}/>
//     <ClaimForm onClaimCreated={toggleRefreshClaims} />
//     </>
//   )
// }