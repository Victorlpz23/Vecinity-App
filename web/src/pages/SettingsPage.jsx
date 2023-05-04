import React from 'react';
import UserSettings from '../components/users/user-settings/UserSettings';
import PageLayout from '../components/layout/PageLayout';




function SettingsPage() {

  return (
    <>
        <PageLayout title="Settings" >
          <UserSettings />
        </PageLayout>
    </>
  );
}

export default SettingsPage;