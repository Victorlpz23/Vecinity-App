import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './EventsCalendar.css';
import eventsService from '../../../services/events';
import { useParams } from 'react-router-dom';

function EventsCalendar() {

  // const eventsjson = [
  //   {
  //     id: '1',
  //     title: 'Event One',
  //     date: "Fri May 26 2023 00:00:00 GMT+0200 (Central European Summer Time)"
  //   },
  //   {
  //     id: '2',
  //     title: 'Event Two',
  //     date: "Fri May 26 2023 00:00:00 GMT+0200 (Central European Summer Time)"
  //   },

  //   {
  //     id: '3',
  //     title: 'Event Three',
  //     date: "Mon May 1 2023 00:00:00 GMT+0200 (Central European Summer Time)"
  //   }
  // ];

  const [value, onChange] = useState(new Date());

  const [daySelected, setDaySelected] = useState('');
  const { id } = useParams();
  const [eventsFound, setEventsFound] = useState([]);

  useEffect(() => {
    eventsService.list(id, daySelected)
      .then(events => setEventsFound(events))
      .catch(error => console.error(error));

    // setEventsFound(eventsjson.filter(event => event.date === daySelected));
    // console.log(daySelected)
  }, [daySelected]);

  const displayEvents = (day) => {
    const dayString = day.toString();
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