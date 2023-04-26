import React from 'react';
import UserLogin from '../components/users/users-login/UserLogin';
import UsersForm from '../components/users/users-form/UsersForm';
import UsersJoin from '../components/users/users-join/UsersJoin';


function Home() {
  return (
    <>
      <UsersJoin/>
      <UserLogin />
      <UsersForm/>
    </>
  );
}

export default Home;