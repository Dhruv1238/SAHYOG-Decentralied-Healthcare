import React from 'react'
import { Input, Button, IconButton } from '@material-tailwind/react'
import { useState } from 'react'
import { db } from '../../components/FirebaseSDK'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import './Chat.css'
import { useEffect } from 'react';
import { useRef } from 'react';
import Appbar from '../../components/appbar/Appbar'
import { IoSend } from "react-icons/io5";

// import firebase from 'firebase'
const SendMessage = ({ scroll }) => {
    const [msg, setMsg] = useState('')
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        return () => {
            clearTimeout(timer);
        };
    }, [timer]);
    const startTimer = () => {
        const newTimer = setTimeout(() => {
            console.log('Time is up!');
            sendMessage({ text: 'Automatic message after timer', createdAt: serverTimestamp(), sentBy: 'Doctor' });
        }, 7000);
        setTimer(newTimer);
    };

    const sendMessage = async (message) => {
        try {
            await addDoc(collection(db, 'messages'), message);
            setMsg('');
            if (scroll && scroll.current) {
                scroll.current.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        clearTimeout(timer);
        startTimer();
        sendMessage({ text: msg, createdAt: serverTimestamp(), sentBy: 'Patient' });
    };

    return (
        <>
            <Appbar />
            <div className='fixed bottom-0 left-0 right-0 mb-20'>
                <form onSubmit={handleSendMessage}>
                    <div className='flex px-5 mb-2'>
                        <Input
                            // className='text-black border-2 border-black'
                            color='black'
                            placeholder='Message...'
                            type='text'
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            label='Message...'
                        />
                        <IconButton variant='text' className='text-center' type='submit'>
                            <IoSend className='h-5 w-5' />
                        </IconButton>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SendMessage