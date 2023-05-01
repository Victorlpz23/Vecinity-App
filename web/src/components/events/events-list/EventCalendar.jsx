import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DateTimePicker from 'react-datetime-picker';



const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  const handleSelectSlot = (slotInfo) => {
    const newEvent = {
      start: slotInfo.start,
      end: slotInfo.end,
      title: 'Nuevo evento',
    };
    setEvents([...events, newEvent]);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full mb-4">
        <DateTimePicker
          value={selectedDate}
          onChange={handleDateChange}
          disableClock={true}
          format="dd/MM/yyyy HH:mm"
        />
      </div>
      <div className="w-full">
        <Calendar
          localizer={localizer}
          events={events}
          onSelectEvent={handleSelectEvent}
          selectable
          onSelectSlot={handleSelectSlot}
          defaultView="day"
          views={['day', 'week', 'month']}
          step={60}
          timeslots={1}
          min={new Date(2023, 0, 1, 8, 0)}
          max={new Date(2023, 0, 1, 22, 0)}
          scrollToTime={new Date(2023, 0, 1, 8, 0)}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
