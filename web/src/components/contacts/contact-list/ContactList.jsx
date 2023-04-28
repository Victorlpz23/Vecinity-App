import React, { useEffect, useState } from 'react'
import ContactItem from '../contact-item/ContactItem';
import contactService from '../../../services/contacts'
import { useParams } from 'react-router-dom';

function ContactList() {

    const [contacts, setContacts] = useState([])
    const { id } = useParams()

    useEffect(() => {
      contactService.list(id)
      .then((contacts) => {
        setContacts(contacts)
      }).catch(console.error)
    }, [id])

  return (
    <>
      {contacts.map(contact => <div><ContactItem contact={contact} communityId={id} key={contact.id} /></div>)}
    </>
  )
}

export default ContactList