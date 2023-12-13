import React from 'react'
import { motion } from 'framer-motion';
import { Typography } from '@material-tailwind/react'
import { Progress } from "@material-tailwind/react";
import { Button } from '@material-tailwind/react';
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const DetailButton = ({ text, onClick }) => {
    return (
        <Button variant="outlined" color='white' className="flex items-center justify-between rounded-[20px] w-full gap-3 text-md font-bold bg-blue-500 font-inter" onClick={onClick}>
            {text}
            <FaChevronRight />
        </Button>
    )
}

const DetailsPage = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col gap-24 my-10 mx-7'>
            <motion.div className='flex flex-col gap-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Typography color='blue' className='font-inter'>So tell us about yourself champ!!</Typography>
                <Typography color='white' className='text-3xl font-bold font-inter'>Hey There!!</Typography>
            </motion.div>
            <div className='flex flex-col gap-10'>
                <DetailButton text='Basic Medical Details' onClick={() => navigate('/basicinfo')} />
                <DetailButton text='Previous Diagnostic records' onClick={() => navigate('/medicaldetails')} />
                <DetailButton text='Health Insurance Details' onClick={() => navigate('/healthinsurance')} />
            </div>
        </div>
    )
}

export default DetailsPage