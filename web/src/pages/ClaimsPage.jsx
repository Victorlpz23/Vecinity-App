import React, { useState } from 'react';
import ClaimsList from '../components/claims/claims-list/ClaimsList';
import ClaimForm from '../components/claims/claim-form/ClaimForm';
import PageLayout from '../components/layout/PageLayout';


function ClaimsPage() {
  const [refreshClaims, setRefreshClaims] = useState(false);

  const toggleRefreshClaims = () => setRefreshClaims(!refreshClaims);

  return (
    <>
      <PageLayout title="Claims" >
        <ClaimsList refresh={refreshClaims} />
        <ClaimForm onClaimCreated={toggleRefreshClaims} />
      </PageLayout>
    </>
  );
}

export default ClaimsPage;