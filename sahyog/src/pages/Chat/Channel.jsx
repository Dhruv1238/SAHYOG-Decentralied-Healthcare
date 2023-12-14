import React, { useEffect, useState } from 'react';
import { db } from '../../components/FirebaseSDK';
import './Chat.css';
// import { auth } from '../../components/FirebaseSDK';
// import firebase from 'firebase';
import SendMessage from './SendMessage';
import { useRef } from 'react';
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
const Channel = () => {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => doc.data()));
        });
        return unsubscribe;
    }, []);
    return (
        <div>
            <div className="msgs">
                {messages.map(({ id, text }) => (
                    <div className=''>
                        <div key={id} className='p-3 msg sent'>
                            <p className='text-white'>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
};

export default Channel;
