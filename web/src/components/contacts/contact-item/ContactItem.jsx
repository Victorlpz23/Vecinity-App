import React from 'react'
import { Link } from 'react-router-dom';

function ContactItem({ contact, communityId }) {
  return (
    <div><Link to={`/communities/${communityId}/contacts/${contact.id}`}>{contact.name}</Link></div>
  )
}

export default ContactItem