import { Typography, Input, Button } from '@material-tailwind/react';
import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { CiBellOn } from 'react-icons/ci';
import { BsStars } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import banner from '../../assets/landing_banner.png';
import portrait from '../../assets/portrait.jpg';
import Appbar from '../../components/appbar/Appbar';
import Navbar from '../../components/Navbar';
import './Landing.css';

const PersonCard = ({ photoSrc, name, degree, clickFunc }) => {
    return (
        <div className="flex flex-col items-center" onClick={() => clickFunc(name, degree, photoSrc)}>
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

    // const navigate = useNavigate();
    const navigate = useNavigate();
    const clickhandler = (name, degree, photoSrc) => {
        navigate(`/specialist/${name}/${degree}`, { state: { photoSrc } });
    };

    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='flex flex-col gap-16 my-20 mx-7'>
                <div className='flex flex-col gap-5'/>
                <div className='flex flex-col gap-5'>
                    <Typography color='white' className='text-3xl font-bold font-inter'>For You</Typography>
                    <div className='w-full h-[170px] rounded-[20px]' id='banner'>
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
                        <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} clickFunc={clickhandler} />
                        <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} clickFunc={clickhandler} />
                        <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} clickFunc={clickhandler} />
                        <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} clickFunc={clickhandler} />
                    </div>
                    <div className='flex items-center gap-5 jusitfy-center'>
                        <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} clickFunc={clickhandler} />
                        <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} clickFunc={clickhandler} />
                        <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} clickFunc={clickhandler} />
                        <PersonCard name='Dr. ABC' degree='MBBS' photoSrc={portrait} clickFunc={clickhandler} />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <Typography color='white' className='text-3xl font-bold font-inter'>Some Routines For You</Typography>
                </div>
            </div>
            <Appbar />
        </div>
    );
};

export default Landing;
