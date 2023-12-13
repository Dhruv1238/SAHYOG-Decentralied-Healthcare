import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Cal.css';
import Welcom from './Welcom';

const Cal = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventText, setEventText] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [events, setEvents] = useState([]);

  const onChange = (newDate) => {
    setDate(newDate);
    setSelectedDate(newDate);
  };

  const handleEventAdd = () => {
    if (selectedDate && eventText.trim() !== '' && eventTitle.trim() !== '') {
      // Add the event to the list
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          date: selectedDate.toDateString(),
          title: eventTitle,
          text: eventText,
        },
      ]);
      // Clear input and selected date after adding the event
      setEventTitle('');
      setEventText('');
      setSelectedDate(null);
    }
  };

  return (
    <>
      {/* <Welcom /> */}
      <div id='' className=''>
        <div id='cap' >

          <Calendar className="custom_cal align-middle justify-center" onChange={onChange} value={date} />
        </div>
        {/* Conditionally render the event input form */}
        {selectedDate && (
          <div className="event-form">
            <label>
              <div className='flex-col items-start'>
                <p className='pl-4 mt-2 text-white'>For Event at {selectedDate.toDateString()} :</p>
                <div className='flex-col items-start gap-2 mt-5'>
                  <p className='pl-4 text-white'>Title:</p>
                  <input
                    className='outline-none text-sm p-0.5 pl-2 rounded-md'
                    type="text"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                  />

                  <p className='pl-4 text-white'>Description:</p>
                  <input
                    className='text-sm outline-none p-0.5 pl-2 rounded-md'
                    type="text"
                    value={eventText}
                    onChange={(e) => setEventText(e.target.value)}
                  />
                </div>
                <button id='butt' className='text-white' onClick={handleEventAdd}>
                  Add
                </button>
              </div>
            </label>
          </div>
        )}
        {/* Display the entered events below the calendar */}
        {events.length > 0 && (
          <div className="events-list items-center">
            <center>

<div className='w-12 mt-2 mb-2 bg-gray-700 items-center h-1 rounded-full'>
  </div>
            </center>
              
            <center>

              <ul className='text-white flex-col '>
                {events.map((event, index) => (
                  <li id='event' className='pt-4' key={index}>
                    <div className='bg-white w-80 text-black rounded-lg flex' id='td'>
                      <div className='bg-cyan-600 text-white p-2 w-1/4' id='edate'>
                        {event.date}
                      </div>
                      <div className='flex-col items-start'>
                        <div className='pl-3 pt-1 text-lg items-start font-medium' id='etitle'>
                          <p>{event.title}</p>
                        </div>
                        <div className=' pl-3 pt-2 items-start text-gray-500 text-sm font-medium' id='etext'>
                          <p>{event.text.length > 24 ? `${event.text.substring(0, 25)}..` : event.text}</p>
                        </div>
                      </div>
                      <div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </center>

          </div>

        )}

      </div>

    </>
  );
};

export default Cal;
