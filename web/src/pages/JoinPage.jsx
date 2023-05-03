import React from 'react';
import UsersJoin from '../components/users/users-join/UsersJoin';
import PageLayout from '../components/layout/PageLayout';

function JoinPage() {
  return (
    <>
      <PageLayout title="Join Your Community">
        <UsersJoin />
      </PageLayout>
    </>
  );
}

export default JoinPage;