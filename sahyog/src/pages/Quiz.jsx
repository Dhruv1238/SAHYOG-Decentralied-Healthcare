import { Typography } from '@material-tailwind/react'
import { Progress } from "@material-tailwind/react";
import React, { useEffect } from 'react'
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import SelectBubble from '../components/SelectBubble'
import QuizContext from '../context/QuizContext';
import { useContext } from 'react';
import { formVals } from '../formVals/formVals';
import { motion } from 'framer-motion';


const Quiz = () => {
    const { step, handleSelect, handleBack, handleNext,
        questions
    } = useContext(QuizContext);
    const totalSteps = Object.keys(formVals).length;
    const progress = ((step + 1) / totalSteps) * 100;
    useEffect(() => {
        console.log(questions)
    }, [step])


    return (
        <div className='flex flex-col gap-10 my-10 mx-7'>
            <motion.div className='flex flex-col gap-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Typography color='blue' className='font-inter'>So tell us about yourself champ!!</Typography>
                <Typography color='white' className='text-3xl font-bold font-inter'>{formVals[`question${step + 1}`].question}</Typography>
            </motion.div>
            <div className='flex flex-col justify-between gap-3'>
                {
                    formVals[`question${step + 1}`].options.map((val, index) => (
                        <div key={index}>
                            <SelectBubble
                                text={val}
                                selected={index === questions[step]}
                                onClick={() => handleSelect(index)}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={step !== 0 ? `flex items-center justify-between gap-2` : `flex items-center justify-end gap-2`}>
                {
                    step != 0 && (
                        <div className='flex items-center gap-2'>
                            <HiArrowLeft className='text-2xl text-white' onClick={handleBack} />
                            <Typography className='text-2xl text-white'>Prev</Typography>
                        </div>
                    )
                }
                <div className='flex items-center gap-2' onClick={handleNext}>
                    <Typography className='text-2xl text-white'>Next</Typography>
                    <HiArrowRight className='text-2xl text-white' />
                </div>
            </div>
            <div className='h-[150px]' />
            <div className='flex flex-col items-center justify-center w-full gap-6'>
                <Typography color='blue' className='italic text-center font-inter'>{formVals[`question${step + 1}`].quote}</Typography>
                <Progress value={(step+1)*16.67} size="sm" color="blue" />
            </div>
        </div>
    )
}

export default Quiz