import React from 'react'
import { Typography } from '@material-tailwind/react'
import CustomButton from '../components/CustomButton'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '@arcana/auth-react'
const Home = () => {
    const backBlur = {
        filter: "drop-shadow(0px 0px 40px #277CA5)"
    }

    const { user } = useAuth();

    useEffect(() => {
        console.log("user in Login.js", user);
    }, [user]);
    const navigate = useNavigate()
    return (
        <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-6'>
            <div>
                <Typography color='white' style={backBlur} className='text-5xl font-bold uppercase font-inter'>Sahyog</Typography>
            </div>
            <div>
                <Typography color='white' style={backBlur} className='text-xl font-bold text-blue-500 font-inter'>"because you matter"</Typography>
            </div>
            <div>
                <CustomButton text="Dive in" click={()=>navigate("/details")} />
            </div>
            <div>
                <CustomButton text="Get immediate help" click={() => navigate("/sos")} />
            </div>
        </div>
    )
}

export default Home