import React from 'react'
import EventForm from '../components/events/event-form/EventForm';
import EventsCalendar from '../components/events/events-list/EventsCalendar';
import PageLayout from '../components/layout/PageLayout';

function EventsPage() {
  return (
    <>
      <PageLayout title="Events">
      <EventsCalendar/>
      <EventForm/>
      </PageLayout>
    </>
  )
}

export default EventsPage