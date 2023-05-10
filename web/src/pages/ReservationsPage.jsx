import React, { useState } from 'react';
import ReservationsList from '../components/reservations/reservations-list/ReservationsList';
import ReservationForm from '../components/reservations/reservation-form/ReservationForm';
import PageLayout from '../components/layout/PageLayout';


function ReservationsPage() {
  const [refreshTopics, setRefreshTopics] = useState(false)
 

  const toggleRefreshTopics = () => setRefreshTopics(!refreshTopics);

  return (
    <>
    <PageLayout title="Reservations">
    <ReservationForm onTopicCreated={toggleRefreshTopics} />
    <ReservationsList refresh={refreshTopics} />
    </PageLayout>
    </>
  );
}

export default ReservationsPage;