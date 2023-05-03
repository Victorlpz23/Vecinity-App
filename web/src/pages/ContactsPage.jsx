import React, { useState } from 'react'
import ContactList from '../components/contacts/contact-list/ContactList';
import ContactForm from '../components/contacts/contact-form/ContactForm';

function ContactsPage() {
  const [refreshContacts, setRefreshContacts] = useState(false)

  const toggleRefreixContacts = () => setRefreshContacts(!refreshContacts)
  return (
    <>
      <ContactList refresh={refreshContacts}/>
      <ContactForm onContactCreated={toggleRefreixContacts}/>
    </>
  )
}

export default ContactsPage

