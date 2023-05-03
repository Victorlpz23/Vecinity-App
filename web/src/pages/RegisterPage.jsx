import React from 'react';
import UsersForm from '../components/users/users-form/UsersForm';
import PageLayout from '../components/layout/PageLayout';

function RegisterPage() {
  return (
    <>
      <PageLayout title="Create Account">
        <UsersForm />
      </PageLayout>
    </>
  );
}

export default RegisterPage;