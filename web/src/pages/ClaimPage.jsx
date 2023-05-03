import React from 'react';
import ClaimDetail from '../components/claims/claim-detail/ClaimDetail';
import PageLayout from '../components/layout/PageLayout';

function ClaimPage() {
  return (
    <>
      <PageLayout title="Claim Information" >
        <ClaimDetail />
      </PageLayout>
    </>
  );
}

export default ClaimPage;