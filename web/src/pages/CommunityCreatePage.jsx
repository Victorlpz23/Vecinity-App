import React from 'react'
import PageLayout from '../components/layout/PageLayout';
import CommunitiesForm from '../components/communities/communities-form/CommunitiesForm'

function CommunityCreatePage() {
  return (
    <PageLayout title="Create New Community">
      <CommunitiesForm />
    </PageLayout>
  )
}

export default CommunityCreatePage