import React, { useEffect, useState } from 'react';
import claimService from '../../../services/claims';
import { useNavigate, useParams } from 'react-router-dom';

function ClaimDetail() {
  const [claim, setClaim] = useState({});
  const navigate = useNavigate();
  const { id, claimId } = useParams();

  useEffect(() => {
    async function fetchClaim() {
      try {
        const claim = await claimService.detail(id, claimId);
        setClaim(claim);
      } catch (error) {
        console.error(error);
        const statusCode = error.response?.status;
        if (statusCode === 404) {
          navigate('/');
        }
      }
    }
    fetchClaim();
  }, [id, claimId]);


  return (
    <>
    <div>{claim.title}</div>
    <div>{claim.description}</div>
    </>
  )
}

export default ClaimDetail