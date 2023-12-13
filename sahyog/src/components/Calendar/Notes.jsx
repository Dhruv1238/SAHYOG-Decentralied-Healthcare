import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
const Notes = () => {
  const { date , title , text , time } = useParams();

  return (
    <>
      <div className="items-center justify-center align">
        <div className="flex flex-col items-start mt-2 text-white">
          <p className='flex-1 text-2xl font-bold text-cyan-400'>{date}</p>
          <p className='font-semibold text-gray-500 flex-2'>{time}</p>

          <div className="mt-2 flex-3">
            <textarea onChange={(e) => setEventTitle(e.target.value)} className='h-12 text-3xl font-semibold bg-transparent outline-none w-80'>{title}</textarea>
          </div>
          <textarea onChange={(e) => setEventText(e.target.value)} className='items-start text-sm text-left bg-transparent outline-none flex-4 w-80 h-52 '>{text}</textarea>
        </div>
      </div>
    </>
  )
}

export default Notes;