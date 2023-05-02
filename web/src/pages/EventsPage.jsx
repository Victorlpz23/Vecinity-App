import React from 'react'
import EventForm from '../components/events/event-form/EventForm';
import EventsCalendar from '../components/events/events-list/EventsCalendar';

function EventsPage() {
  return (
    <>
      <h1 className="self-center text-2xl md:text-4xl  font-semibold whitespace-nowrap animate-text bg-gradient-to-r from-orange to-green bg-clip-text text-transparent dark:text-white text-center mt-1">Events</h1>
      <EventsCalendar/>
      <EventForm/>
    </>
  )
}

export default EventsPage