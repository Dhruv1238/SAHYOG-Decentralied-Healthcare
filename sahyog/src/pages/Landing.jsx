import { Typography, Input, Button } from '@material-tailwind/react';
import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { CiBellOn } from 'react-icons/ci';
import { BsStars } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import banner from '../assets/landing_banner.png';
import portrait from '../assets/portrait.jpg';

const PersonCard = ({ photoSrc, name, degree }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-20 h-20 overflow-hidden border-2 border-blue-100 rounded-full">
                <img src={photoSrc} alt="Person Photo" className="object-cover w-full h-full" />
            </div>
            <div className="mt-3 text-center">
                <p className="text-lg font-bold text-white">{name}</p>
                <p className="text-sm text-gray-500">{degree}</p>
            </div>
        </div>
    );
};

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-16 my-20 mx-7'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <FaUserCircle color='lightblue' fontSize={50} />
                        <div className='flex flex-col'>
                            <Typography color='white' className='text-2xl font-bold font-inter'>
                                Welcome User
                            </Typography>
                            <Typography className='text-gray-700 font-inter text-md'>
                                Welcome to the Safe Zone!!
                            </Typography>
                        </div>
                    </div>
                    <div className='relative'>
                        <CiBellOn color='lightblue' fontSize={35} />
                        <div className='absolute flex items-center justify-center w-2 h-2 bg-red-500 rounded-full top-1 right-2' />
                    </div>
                </div>
                <div className='relative flex items-center'>
                    <FaSearch color='white' fontSize={25} className='absolute left-3' />
                    <Input
                        type='text'
                        color='lightblue'
                        size='lg'
                        outline={true}
                        placeholder='Search for anything you want'
                        className='pl-16 text-white'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <Typography color='white' className='text-3xl font-bold font-inter'>For You</Typography>
                <div className='w-full h-[170px] rounded-[20px] bg-blue-200'>
                    <div className='flex items-center justify-between h-full px-5'>
                        <div className='flex flex-col gap-3 m-1'>
                            <div>
                                <Typography color='white' className='text-xl font-bold font-inter'>
                                    Feeling a bit out of Mood?
                                </Typography>
                                <Typography color='white' className='text-xl font-bold font-inter'>
                                    Talk to us!
                                </Typography>
                            </div>
                            <div className='w-full h-[30px] bg-white flex items-center justify-center rounded-[20px]'>
                                <Typography color='blue' className='m-2 text-lg font-bold font-inter'>
                                    Sahyog Chat
                                </Typography>
                                <BsStars color='yellow' fontSize={25} />
                            </div>
                        </div>
                        <div>
                            <img src={banner} alt='banner' className='w-[200px] h-[150px]' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <Typography color='white' className='text-3xl font-bold font-inter'>Talk to a Specialist</Typography>
                <div className='flex items-center gap-5 jusitfy-center'>
                    <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} />
                    <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} />
                    <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} />
                    <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} />
                </div>
                <div className='flex items-center gap-5 jusitfy-center'>
                    <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} />
                    <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} />
                    <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} />
                    <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} />
                </div>
            </div>
            <div className='flex flex-col'>
                <Typography color='white' className='text-3xl font-bold font-inter'>Some Routines For You</Typography>
            </div>
        </div>
    );
};

export default Landing;
