import React from 'react';
import UserProfile from '../components/users/user-profile/UserProfile';
import PageLayout from '../components/layout/PageLayout';

function ProfilePage() {
  return (
    <>
      <PageLayout title="Profile">
        <UserProfile />
      </PageLayout>
    </>
  );
}

export default ProfilePage;