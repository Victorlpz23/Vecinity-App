import React, { useEffect, useState } from 'react';
import contactService from '../../../services/contacts';
import { useNavigate, useParams } from 'react-router-dom';

function ContactDetail() {
  const [contact, setContact] = useState({});
  const navigate = useNavigate();
  const { id, contactId } = useParams();

  useEffect(() => {
    async function fetchContact() {
      try {
        const contact = await contactService.detail(id, contactId);
        setContact(contact);
      } catch (error) {
        console.error(error);
        const statusCode = error.response?.status;
        if (statusCode === 404) {
          navigate('/');
        }
      }
    }
    fetchContact();
  }, [id, contactId]);

  return (
    <>
    <div>{contact.name}</div>
    <div>{contact.description}</div>
    </>
  );
}

export default ContactDetail;