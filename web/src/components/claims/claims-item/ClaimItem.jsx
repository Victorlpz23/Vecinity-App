import React from 'react';
import { Link } from 'react-router-dom';

function ClaimItem({ claim, communityId }) {
  return (
    <div><Link to={`/communities/${communityId}/claims/${claim.id}`}>{claim.title}</Link></div>
  );
}

export default ClaimItem;