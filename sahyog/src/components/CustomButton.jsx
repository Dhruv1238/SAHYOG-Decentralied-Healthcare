import React from 'react'
import { Button } from '@material-tailwind/react'
const CustomButton = ({ text , click }) => {
    return (
        <div>
            <Button ripple={true} className='text-xl text-white bg-[#64C2EC]' onClick={click}>{text}</Button>
        </div>
    )
}

export default CustomButton