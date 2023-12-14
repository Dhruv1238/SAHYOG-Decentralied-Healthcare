import React from 'react'
import { Input, Button } from '@material-tailwind/react'
import { useState } from 'react'
import { db } from '../../components/FirebaseSDK'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import './Chat.css'
import Appbar from '../../components/Appbar/Appbar'
// import firebase from 'firebase'
const SendMessage = ({ scroll }) => {
    const [msg, setMsg] = useState('')
    async function sendMessage(e) {
        e.preventDefault();
        await addDoc(collection(db, "messages"), {
            text: msg,
            createdAt: serverTimestamp()
        });
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <>
            <Appbar />
            <div className='fixed bottom-0 left-0 right-0 mb-20'>
                <form onSubmit={sendMessage}>
                    <div className='flex'>
                        <Input className='text-white border-2 border-white outline-none' placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                        <Button className='text-center bg-blue-500 border-2 border-white outline-none' type="submit">Send</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SendMessage