import React, { useState } from 'react';
import ContactList from '../components/contacts/contact-list/ContactList';
import ContactForm from '../components/contacts/contact-form/ContactForm';
import PageLayout from '../components/layout/PageLayout';

function ContactsPage() {
  const [refreshContacts, setRefreshContacts] = useState(false);

  const toggleRefreixContacts = () => setRefreshContacts(!refreshContacts);
  return (
    <>
      <PageLayout title="Contacts">
        <ContactList refresh={refreshContacts} />
        <ContactForm onContactCreated={toggleRefreixContacts} />
      </PageLayout>
    </>
  );
}

export default ContactsPage

