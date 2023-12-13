import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Cal.css';
// import Welcom from './Welcom';
import Notes from './Notes';
import {useNavigate} from 'react-router-dom';
const Cal = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventText, setEventText] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();

  // handleEventNotes = () => {
  //   return (
  //     <>
  //       <Notes date = {date} text={eventText} title= {eventTitle}  />
  //     </>
  //   )
  // }
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

          <Calendar className="justify-center align-middle custom_cal" onChange={onChange} value={date} />
        </div>
        {/* Conditionally render the event input form */}
        {selectedDate && (
          <div className="event-form">
            <label>
              <div className='flex flex-col items-start'>
                <p className='flex-1 mt-2 text-white'>For Event at {selectedDate.toDateString()} :</p>
                <div className='flex flex-col items-start gap-2 mt-5 text-white'>
                  <p className='items-start flex-1 '>Title:</p>
                  <textarea
                    className='h-12px w-72 bg-transparent border border-gray-600 outline-none flex-2 text-sm p-1.5 pl-2 rounded-md'
                    type="text"
                    placeholder="Add Title"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                  />

                  <p className='text-white flex-3'>Description:</p>
                  <textarea
                    className='h-12px w-72 bg-transparent border border-gray-600 outline-none flex-2 text-sm p-1.5 pl-2 rounded-md'
                    type="textarea"
                    placeholder='Add Description'
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
        
        {events?.length > 0 && (
          <div className="items-center events-list">
            <center>

              <div className='items-center w-12 h-1 mt-2 mb-2 bg-gray-700 rounded-full'>
              </div>
            </center>

            <center>

              <ul className='flex-col text-white '>
                
                {events.map((event, index) => (
                  <li id='event' className='pt-4' key={index}>
                    <div className='flex text-black bg-white rounded-lg w-80' id='td' onClick={() => navigate(`/notes/${event.date}/${event.title}/${event.text}`)}>
                      <div className='w-1/4 p-2 text-white bg-cyan-600' id='edate'>
                        {event.date}
                      </div>
                      <div className='flex-col items-start'>
                        <div className='items-start pt-1 pl-3 text-lg font-medium' id='etitle'>
                          <p>{event.title}</p>
                        </div>
                        <div className='items-start pt-2 pl-3 text-sm font-medium text-gray-500 ' id='etext'>
                          <p>{event.text.length > 24 ? `${event.text.substring(0, 25)}..` : event.text}</p>
                        </div>
                        {/* <Notes date = {date} text={eventText} title= {eventTitle}  /> */}
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
