import React from 'react'
import { useState } from 'react'

const Notes = () => {
    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
  return (
    <>
    <div className="">
        <div className="">
            <p>{date}</p>
        </div>
        <div className="">
            <p>{time}</p>
        </div>
        <div className="">
            <p>{title}</p>
        </div>
        <div className="">
            <p>{title}</p>
        </div>
    </div>
    </>
  )
}

export default Notes