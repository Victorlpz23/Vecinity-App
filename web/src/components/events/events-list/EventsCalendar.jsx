import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './EventsCalendar.css';
import eventsService from '../../../services/events';
import { useParams } from 'react-router-dom';
import moment from 'moment'

function EventsCalendar() {

  const [value, onChange] = useState(new Date());

  const [daySelected, setDaySelected] = useState('');
  const { id } = useParams();
  const [eventsFound, setEventsFound] = useState([]);

  useEffect(() => {
    eventsService.list(id, daySelected)
      .then(events => setEventsFound(events))
      .catch(error => console.error(error));
  }, [daySelected]);

  const displayEvents = (day) => {
    const dayString = moment(day).format("YYYY-MM-DD").toString();
    console.log(dayString);
    setDaySelected(dayString);
  };


  return (
    <>
      <div className="flex flex-col items-center mb-4 mt-4">
          <Calendar className="bg-white rounded-md shadow-lg p-4" value={value} onClickDay={(value) => displayEvents(value)} />
        </div>
      <div>
        {daySelected.length > 0 && <div>
          {
            eventsFound?.length
              ? eventsFound.map(event => <li key={event.id}>{event.title}</li>)
              : <p>No events</p>
          }
          <button>Add event</button>
        </div>
        }

      </div>
      </>
  );
}

export default EventsCalendar;