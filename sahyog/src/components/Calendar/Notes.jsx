import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Appbar from '../appbar/Appbar';

const Notes = () => {
  const { date, title, text, time } = useParams();
  const navigate = useNavigate();

  // const handleNavigateToCal = () => {
  //   return (
  //     <>
  //       <Link to='/calendar' />
  //       console.log("no erro")
  //     </>
  //   )
  // }
  return (
    <>
    <div className="p-5 flex flex-row text-white">
      <div className="flex-1">
      <button onClick={() => navigate(`/calendar`)} className='flex-1'>&lt; Calendar</button>
      </div>
      <div className="flex-2 flex flex-row gap-2 ">
        <p className='flex-1'>S</p>
        <p className='flex-2'>...</p>
      </div>
    </div>
      <div className="items-center p-5 pl-10 justify-center align">
        <div className="flex flex-col items-start mt-2 text-white">
          <div className="flex flex-col flex-2">
            <p className='flex-1 text-lg font-semibold text-cyan-300'>{date}</p>
            <p className='text-gray-500 font-regular text-md flex-2'>9:43</p>
          </div>

          <div className="mt-2 flex-3">
            <textarea onChange={(e) => setEventTitle(e.target.value)} className='h-10 text-3xl font-semibold bg-transparent outline-none w-80'>{title}</textarea>
          </div>
          <textarea onChange={(e) => setEventText(e.target.value)} className='items-start text-sm text-left bg-transparent outline-none flex-4 w-72 h-52 '>{text}</textarea>
        </div>
      </div>
      <Appbar />
    </>
  )
}

export default Notes;