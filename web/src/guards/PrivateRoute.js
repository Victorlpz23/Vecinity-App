import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthStore';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to="/login" replace={true} />
  } else {
    return <>
      {children}
    </>
  }
}

export default PrivateRoute