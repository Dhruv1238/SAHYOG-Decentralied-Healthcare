import React, { useState } from 'react';
import './Appbar.css';
import { IoMdHome } from 'react-icons/io';
import { FaCalendar } from 'react-icons/fa';
import { Typography } from '@material-tailwind/react';
import { FaUsers } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import appSos from '../../assets/appbar-sos.png';
import { HiUsers } from "react-icons/hi";

import { GoHomeFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Appbar = () => {
  const [selectedItem, setSelectedItem] = useState('home');
  const location = useLocation();
  

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const getItemStyles = (item) => {
    return location.pathname === `/${item}` ? { color: '#002434' } : {color: 'white'};
  };

  return (
    <div className='flex w-screen h-[70px] bg-[#20ABE9] rounded-t-3xl justify-center items-center gap-2 fixed bottom-0'>
      <div className='flex gap-8 left '>
        <Link to='/landing' >
          <div
            className='flex flex-col items-center home'
            onClick={() => handleItemClick('home')}
          >
            {/* <GoHomeFill /> */}

          <GoHomeFill
            className='color-[#002434]'
            style={getItemStyles('home')}
            className='w-6 h-6'
          />
          <Typography
            color='white'
            variant='small'
            style={getItemStyles('home')}
          >
            Home
          </Typography>
        </div>
          </Link>
        
        <Link to='/calendar'>
          <div
            className='flex flex-col items-center home'
            onClick={() => handleItemClick('calendar')}
          >
            <FaCalendar
              color='white'
              style={getItemStyles('calendar')}
              className='w-6 h-6'

            />
            <Typography
              color='white'
              variant='small'
              style={getItemStyles('calendar')}
            >
              Calendar
            </Typography>
          </div>
        </Link>
      </div>
      <div className='sos-but mb-14 '>
        <Link to='/sos'>
          <img src={appSos} alt='Sos-button' />
        </Link>
      </div>
      <div className='flex gap-8 right'>
        <Link to='/spaces'>
          <div
            className='flex flex-col items-center home'
            onClick={() => handleItemClick('spaces')}
          >
            <HiUsers color='white' style={getItemStyles('spaces')}
              className='w-6 h-6'
            />
            <Typography
              color='white'
              variant='small'
              style={getItemStyles('spaces')}
            >
              Spaces
            </Typography>
          </div>
        </Link>
        <Link to='/profile'>

          <div
            className='flex flex-col items-center home'
            onClick={() => handleItemClick('profile')}
          >
            <FaUser color='white' style={getItemStyles('profile')} className='w-6 h-6'
            />
            <Typography
              color='white'
              variant='small'
              style={getItemStyles('profile')}
            >
              Profile
            </Typography>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Appbar;
