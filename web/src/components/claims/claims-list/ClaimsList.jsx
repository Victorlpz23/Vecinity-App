import React, { useEffect, useState } from 'react'
import claimService from '../../../services/claims';
import ClaimItem from '../claims-item/ClaimItem';
import { useParams } from 'react-router-dom';



function ClaimsList() {
  const { id } = useParams()
  const [claims, setClaims] = useState([]);


  useEffect(() => {
    claimService.list(id)
      .then((claims) => {
        setClaims(claims)
      }).catch(console.error)
  }, [id])

  return (
    <>
      {claims.map((claim) => 
        <ClaimItem claim={claim} key={claim.id} communityId={id}/>
      )}
    </>
  )
}

export default ClaimsList