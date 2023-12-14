import React, { useEffect, useState } from 'react';
import { db } from '../../components/FirebaseSDK';
import './Chat.css';
import SendMessage from './SendMessage';
import { useRef } from 'react';
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { Typography } from '@material-tailwind/react';

const Channel = () => {
    const scroll = useRef()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => doc.data())); // Reverse the order
        });
        return unsubscribe;
    }, []);

    return (
        <div className='flex flex-col m-5'>
            <Typography className='text-3xl text-white '>Chat with Shubham Patil</Typography>
            <div className="msgs">
                {messages.map(({ id, text, sentBy }) => (
                    <div key={id} className={`p-3 msg ${sentBy === 'Patient' ? 'sent' : 'received'}`}>
                        <p className='text-white'>{text}</p>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
        </div>
    );
};

export default Channel;
