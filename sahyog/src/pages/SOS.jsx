import { Typography } from '@material-tailwind/react'
import React from 'react'
// import 'sos-but.png' from 'src/ass'
import sosButtonImage from '../assets/sos-but.png';
import Navbar from '../components/Navbar';
const SOS = () => {
    return (
        <>
        <Navbar />
        <div className='main flex flex-col  justify-center items-center h-screen  ' >
            <div className='sos-button'>
                
                <img src={sosButtonImage} alt="Sos-button" />
                
            </div>
            <div className='bot-text'>
                <Typography color='gray' >
                    remember we are just 1 click away
                </Typography>
            </div>
        </div>
        </>
    )
}

export default SOS