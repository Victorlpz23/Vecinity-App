import React from 'react'
import { Link } from 'react-router-dom';

function CreateJoinPage() {
  return (
    <>
      <Link to={'/join'} >
      <h1>Join your community</h1>
      </Link>

      <Link to={'/communities/create'} >
      <h1>Create your community</h1>
      </Link>
    </>
  )
}

export default CreateJoinPage