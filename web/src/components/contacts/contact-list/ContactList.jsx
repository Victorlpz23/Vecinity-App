import React, { useEffect, useState } from 'react'
import ContactItem from '../contact-item/ContactItem';
import contactService from '../../../services/contacts'
import { useParams } from 'react-router-dom';

function ContactList() {

    const [contacts, setContacts] = useState([])
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
      contactService.list(id)
      .then((contacts) => {
        setContacts(contacts)
      }).catch(console.error)
    }, [id])



  return (
    <>
      {contacts.map(contact => <div><ContactItem contact={contact} key={contact.id} /></div>)}
    </>
  )
}

export default ContactList