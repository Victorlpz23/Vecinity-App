import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './EventsCalendar.css';
import eventsService from '../../../services/events';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import EventItem from '../event-item/EventItem';

function EventsCalendar() {

  const [value, setValue] = useState(new Date());

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
    setDaySelected(dayString);
  };


  return (
    <>
      <div className="flex flex-col items-center mb-2 mt-4">
        <Calendar className="bg-white rounded-md shadow-lg p-4" value={value} onClickDay={(value) => displayEvents(value)} />
      </div>
      <div>
        {daySelected.length > 0 && <div>
          {
            eventsFound?.length
              ? eventsFound.map(event => <EventItem key={event.id} event={event} communityId={id} ></EventItem>)
              : <section className="bg-white dark:bg-gray-900">
              <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto">
                <div className="w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
                    <ul>
                      <li className='font-bold text-green mb-1 text-center'>No events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          }
        </div>
        }

      </div>
    </>
  );
}

export default EventsCalendar;