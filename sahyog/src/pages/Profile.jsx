import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import { FaUpload } from 'react-icons/fa';

import { Input, Select, Label, Option } from '@material-tailwind/react';
import Appbar from '../components/appbar/Appbar';
import { Interaction } from '../components/contract/Interaction';
import { useContext } from 'react';
import { useAuth } from '@arcana/auth-react';
import { MdDocumentScanner } from "react-icons/md";



const ProfileData = ({ label, content, isEditable, onChange }) => {

    return (
        <div className='flex flex-col gap-2'>
            <Typography color='white' className='text-lg font-bold text-blue-500 font-inter'>
                {label}
            </Typography>
            {isEditable ? (
                <Input
                    type='text'
                    value={content}
                    className='outline-none text-white'
                    onChange={(e) => onChange(label.toLowerCase(), e.target.value)}
                />
            ) : (
                <Typography color='white' className='text-2xl font-bold font-inter'>
                    {content}
                </Typography>
            )}
        </div>
    );
};

const Profile = () => {
    const initialProfileData = {
        name: 'Aarya Tiwari',
        email: 'aarya.tiwari@somaiya.edu',
        age: '20',
        contact: '9876543210',
        emergencyContact: 'Dhruv Sharma',
    };

    const { user } = useAuth();

    console.log(user.address);

    const { userData, userDetails } = useContext(Interaction);

    const [profileData, setProfileData] = useState(initialProfileData);
    const [isEditable, setIsEditable] = useState(false);

    const handleChange = (field, value) => {
        setProfileData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleClick = () => {
        setIsEditable(!isEditable);
    };

    useEffect(() => {
        console.log(userData);
    }, [])

    const [age, gender, name, phoneNumber] = userDetails || [];

    return (
        <>
            <div className='flex flex-col gap-10 my-10 mx-7'>
                <motion.div
                    className='flex flex-col gap-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography color='white' className='text-2xl font-bold font-inter'>
                        <u>My Profile</u>
                    </Typography>
                </motion.div>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <ProfileData
                                label='Name'
                                content={profileData.name}
                                isEditable={isEditable}
                                onChange={handleChange}
                            />
                            <ProfileData
                                label='Email'
                                content={profileData.email}
                                isEditable={isEditable}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='flex flex-col gap-1 mb-1'>
                            <ProfileData
                                label='Age'
                                content={profileData.age}
                                isEditable={isEditable}
                                onChange={handleChange}
                            />
                            <ProfileData
                                label='Emergency Contact'
                                content={profileData.contact}
                                isEditable={isEditable}
                                onChange={handleChange}
                            />
                        </div>

                        <ProfileData
                            label='Name of emergency Contact'
                            content={profileData.emergencyContact}
                            isEditable={isEditable}
                            onChange={handleChange}
                        />
                    </div>
                    <Button onClick={handleClick} color='blue' className='text-md'>
                        {isEditable ? 'Save Changes' : 'Edit Profile'}
                    </Button>
                    <p className=' text-white'>
                        Age: {age && age.toNumber()}
                        Gender: {gender}
                        Name: {name}
                        Phone Number: {phoneNumber}
                    </p>
                    <p className='text-white grid grid-cols-3 gap-28 self-center min-h-[34rem]'>
                        {userData.map((url) => (
                            <IconButton variant='text' className='flex justify-center items-center' onClick={() => window.open(url, "_blank")}>
                                <MdDocumentScanner className=' text-color2 w-20 h-20' />
                            </IconButton>
                        ))}
                    </p>
                </div>
            </div>
            <Appbar />
        </>
    );
};

export default Profile;
