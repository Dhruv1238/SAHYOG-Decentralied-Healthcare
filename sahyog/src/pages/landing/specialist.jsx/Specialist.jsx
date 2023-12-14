import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Appbar from '../../../components/appbar/Appbar';
import docPhoto from '../../../assets/doctor.png';
import { Typography } from '@material-tailwind/react';

const Specialist = () => {
    const { name, degree } = useParams();
    // const { photoSrc } = window.history.state;

    const handlePhoneClick = () => {
        const phoneNumber = '1234567890'; // Replace with the actual phone number
        window.location.href = `tel:${phoneNumber}`;
      };

    return (
        <>
        <Navbar />
        <div className='flex flex-col mt-[150px] ml-10 h-screen overflow-scroll '>
            <div className='mb-3'>
                <Typography color='white' className='text-2xl font-bold font-inter mb-[-5px]'>
                    {name}
                </Typography>
                <Typography color='gray' className='text-sm font-inter '>
                    {degree}
                </Typography>

            </div>
            <div>
            <img src={docPhoto} alt="Specialist Photo" />
            </div>

            <div>
                <Typography color='white' className='text-xl font-bold font-inter mt-5 '>
                    About
                </Typography>
                <Typography color='gray' className='text-sm font-inter w-[350px] '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, voluptate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, voluptate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, voluptate.
                </Typography>
            </div>
            <div>
                <Typography color='white' className='text-xl font-bold font-inter mt-5 '>
                    Qualifications
                </Typography>
                <Typography color='gray' className='text-sm font-inter w-[350px] '>
                    <ul>
                        <li>MBBS from AIMS Dehli</li>
                        <li>MD</li>
                        <li>DM</li>
                        <li>PhD</li>

                    </ul>
                </Typography>
            </div>
            <div>
                <Typography color='white' className='text-xl font-bold font-inter mt-5 '>
                    Books and Theises
                </Typography>
                <Typography color='gray' className='text-sm font-inter w-[350px] '>
                    <ul>
                        <li>Book 1</li>
                        <li>Book 2</li>
                        <li>Book 3</li>
                        <li>Book 4</li>

                    </ul>
                </Typography>
            </div>
            <div>
                <Typography color='white' className='text-xl font-bold font-inter mt-5 '>
                    Contact Details
                </Typography>
                <Typography color='gray' className='text-sm font-inter w-[350px] '>
                    <ul>
                    <li onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
                Phone Number: 1234567890
              </li>
                        <li>Email: abc@abc.com </li>
                    </ul>
                </Typography>   
            </div>
        </div>
        <Appbar />
        </>
    );
};

export default Specialist;
