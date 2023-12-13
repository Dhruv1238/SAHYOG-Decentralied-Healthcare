import React, { useEffect } from 'react'
import { Typography } from '@material-tailwind/react'
import { FaUpload } from "react-icons/fa";
import { motion } from 'framer-motion';
import FormContext from '../context/FormContext';
import { useContext } from 'react';
const Medical = () => {
    const { form1, updateFormData } = useContext(FormContext);
    useEffect(() => {
        console.log(form1);
    })
    return (
        <div className='flex flex-col gap-10 my-10 mx-7'>
            <motion.div className='flex flex-col gap-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Typography color='blue' className='font-inter'>So tell us about yourself champ!!</Typography>
                <Typography color='white' className='text-3xl font-bold font-inter'>Hey There!!</Typography>
            </motion.div>
            <div className='flex flex-col gap-2'>
                <Typography color='white' className='font-bold text-blue-500 text-md font-inter'>Diaganostic Details</Typography>
                <div className='h-[150px] rounded-[10px] w-full flex justify-center items-center border-2 border-white'>
                    <FaUpload className='text-4xl text-white' />
                </div>
            </div>
        </div>
    )
}

export default Medical