import { Typography } from '@material-tailwind/react'
import React from 'react'
// import 'sos-but.png' from 'src/ass'
import sosButtonImage from '../../assets/sos-but.png';
import Navbar from '../../components/Navbar';
import './SOS.css'
import { useState } from 'react';

const SOS = () => {
    const [click , setClick] = useState(false);
    const sosClickHandler = () => {
        setClick(!click);
        console.log('click')
    }

    
    return (
        <>
        <Navbar />
        <div className='main flex flex-col  justify-center items-center h-screen ' >
            <div className='sos-button'>
                
                <img src={sosButtonImage} alt="Sos-button" className='scale-animation' onClick={sosClickHandler}/>
                
            </div>
            <div className='bot-text'>
                <Typography color='gray' >
                    "Remember we are just 1 click away"
                </Typography>
            </div>
        </div>
        </>
    )
}

export default SOS