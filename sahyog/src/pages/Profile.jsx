import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import QuizContext from '../context/QuizContext';
import { Typography } from '@material-tailwind/react';
import { FaUpload } from "react-icons/fa";

import {
    Card,
    Checkbox,
    Button,
} from "@material-tailwind/react";

import { Input, Select, Label, Option } from '@material-tailwind/react';

export function SimpleRegistrationForm() {
    return (
        <form>
            <div className="flex flex-col gap-6 mb-1">
                <Input
                    size="lg"
                    placeholder="Your Name"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                />
                <Input
                    size="lg"
                    placeholder="Your Email"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />
                <div className='flex '>
                    <Input
                        type="text"
                        size="lg"
                        placeholder="+91"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Input
                        type="text"
                        size="lg"
                        placeholder="Phone Number"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    />
                </div>
            </div>
        </form>
    );
}

const Profile = () => {
    const { step } = useContext(QuizContext);
    const borderStyle = {
        borderColor: '#ffffff',
    }
    return (
        <div className='flex flex-col gap-10 my-10 mx-7'>

            <motion.div className='flex flex-col gap-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Typography color='blue' className='font-inter'>You are all set!!</Typography>
                <Typography color='white' className='text-3xl font-bold font-inter'>Complete your Profile</Typography>
            </motion.div>
            <form className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <Typography color='white' className='font-bold text-blue-500 text-md font-inter'>Basic Info</Typography>

                    <div className="flex flex-col gap-6 mb-1">
                        <Input
                            size="lg"
                            placeholder="Your Name"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        />
                        <Input
                            size="lg"
                            placeholder="Your Email"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <Typography color='white' className='font-bold text-blue-500 text-md font-inter'>Diaganostic Details</Typography>
                    <div className='h-[150px] rounded-[10px] w-full flex justify-center items-center border-2 border-white'>
                        <FaUpload className='text-4xl text-white' />
                    </div>
                </div>
            </form>
        </div>
    )
}   

export default Profile