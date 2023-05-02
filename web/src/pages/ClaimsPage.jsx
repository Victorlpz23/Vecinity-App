import React, { useState } from 'react'
import ClaimsList from '../components/claims/claims-list/ClaimsList';
import ClaimForm from '../components/claims/claim-form/ClaimForm';


function ClaimsPage() {
  const [refreshClaims, setRefreshClaims] = useState(false)

  const toggleRefreshClaims = () =>  setRefreshClaims(!refreshClaims)

  return (
    <>
    <ClaimsList refresh={refreshClaims}/>
    <ClaimForm onClaimCreated={toggleRefreshClaims} />
    </>
  )
}

export default ClaimsPage