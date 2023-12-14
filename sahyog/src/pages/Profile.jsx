import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { Button, Typography } from '@material-tailwind/react';
import { FaUpload } from "react-icons/fa";

import { Input, Select, Label, Option } from '@material-tailwind/react';
import Appbar from '../components/appbar/Appbar';

const ProfileData = ({ label, content }) => {
    return (
        <div className='flex flex-col gap-2'>
            <Typography color='white' className='text-lg font-bold text-blue-500 font-inter'>{label}</Typography>
            <Typography color='white' className='text-2xl font-bold font-inter'>{content}</Typography>
        </div>
    )
}

const Profile = () => {

    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <>
            <div className='flex flex-col gap-10 my-10 mx-7'>
                <motion.div className='flex flex-col gap-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography color='white' className='text-2xl font-bold font-inter'><u>My Profile</u></Typography>
                </motion.div>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-3'>
                        <div className="flex flex-col gap-1">
                            <ProfileData className='flex-1 text-lg font-inter font-light' label='Name' content='Aarya Tiwari' />
                            <ProfileData className='flex-2 text-lg font-inter font-light' label='Email' content="aarya.tiwari@somaiya.edu" />
                        </div>
                        <div className="flex flex-col gap-1 mb-1">
                        <ProfileData className='flex-1 text-lg font-inter font-light' label='Age' content='20' />
                        <ProfileData className='flex-2 text-lg font-inter font-light' label="Emergency Contact" content='9876543210' />
                        </div>
                        
                        <ProfileData label="Name of emergency Contact" content='Dhruv Sharma' />

                    </div>
                    <Button onClick={()=> handleClick} color='blue' className='text-md'>
                        Edit Profile
                    </Button>
                </div>
            </div>
            <Appbar />
        </>
    )
}

export default Profile