import React, { useState } from 'react';
import ReservationsList from '../components/reservations/reservations-list/ReservationsList';
import ReservationForm from '../components/reservations/reservation-form/ReservationForm';


function ReservationsPage() {
  const [refreshTopics, setRefreshTopics] = useState(false)
 

  const toggleRefreshTopics = () => setRefreshTopics(!refreshTopics);

  return (
    <>
    <ReservationForm onTopicCreated={toggleRefreshTopics} />
    <ReservationsList refresh={refreshTopics} />
    </>
  );
}

export default ReservationsPage;