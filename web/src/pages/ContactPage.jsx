import React from 'react'
import ContactDetail from '../components/contacts/contact-detail/ContactDetail';
import PageLayout from '../components/layout/PageLayout';

function ContactPage() {
  return (
    <>
      <PageLayout title="Contact Information">
      <ContactDetail/>
      </PageLayout>
    </>
  )
}

export default ContactPage