import { Typography } from '@material-tailwind/react';
import React from 'react';

const SelectBubble = ({ text, selected, onClick }) => {
    const bubbleClass = `rounded-[20px] inline-block px-6 py-3 ${selected ? 'bg-blue-500' : 'bg-bubblecolor'
        }`;
    return (
        <div className={bubbleClass} onClick={onClick}>
            <Typography color='white'>
                {text}
            </Typography>
        </div>
    )
}

export default SelectBubble;