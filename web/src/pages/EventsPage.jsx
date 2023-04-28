import React from 'react'
import EventCalendar from '../components/events/events-list/EventCalendar';
import EventForm from '../components/events/event-form/EventForm';

function EventsPage() {
  return (
    <>
      <h1 className="self-center text-2xl md:text-4xl  font-semibold whitespace-nowrap animate-text bg-gradient-to-r from-orange to-green bg-clip-text text-transparent dark:text-white text-center mt-1">Events</h1>
      <EventCalendar/>
      <EventForm/>
    </>
  )
}

export default EventsPage