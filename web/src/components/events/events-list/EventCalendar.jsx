import { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import eventsService from '../../../services/events'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useParams } from 'react-router-dom';

const localizer = momentLocalizer(moment);
2
function EventCalendar() {
  const { id } = useParams()
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const events = await eventsService.list(id);
      setEvents(events);
    };
    loadEvents();
  }, [id]);

  return (
    <>
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
    </>
  );
}

export default EventCalendar;