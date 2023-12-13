import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Cal.css';
import { Button } from '@material-tailwind/react';
import { Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';
// import Welcom from './Welcom';
import Notes from './Notes';
import { useNavigate } from 'react-router-dom';
import Appbar from '../appbar/Appbar';
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
      <div className='flex flex-col gap-10 m-7'>
        <motion.div className='flex flex-col gap-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography color='blue' className='text-xl font-medium font-inter'>Welcome to the Safe Zone!!</Typography>
          <Typography color='white' className='text-3xl font-bold font-inter'>Write to your Hearts Content</Typography>
        </motion.div>
        <div>
          <Calendar className="" onChange={onChange} value={date} />
        </div>
        {selectedDate && (
          <div className="event-form">
            <label>
              <div className='flex flex-col items-start gap-4'>
                <p className='flex-1 mt-2 text-white'>For Event at {selectedDate.toDateString()} :</p>
                <div className='flex flex-col items-start gap-4 mt-5 text-white'>
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
                <Button className='text-white' color='blue' onClick={handleEventAdd}>
                  Add
                </Button>
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
                        <p className='pt-1 font-normal' >{event.date}</p>
                      </div>
                      <div className='flex flex-col items-start'>
                        <div className='items-start flex-1 pt-3 pl-3 text-lg font-medium' id='etitle'>
                          <p>{event.title}</p>
                        </div>
                        <div className='items-start pl-3 mb-3 text-sm font-medium text-gray-500 flex-2 ' id='etext'>
                          <p>{event.text.length > 24 ? `${event.text.substring(0, 25)}..` : event.text}</p>
                        </div>
                        {/* <Notes date = {date} text={eventText} title= {eventTitle}  /> */}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </center>
          </div>
        )}
      </div>
      <Appbar />
    </>
  );
};

export default Cal;
