import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SOS from './pages/sos/Sos';
import Profile from './pages/Profile';
import DetailsPage from './pages/DetailsPage';
import Medical from './pages/Medical';
import HealthInsur from './pages/HealthInsur';
import BasicInfo from './pages/BasicInfo';
import Login from './context/AuthContext';
import Cal from './components/Calendar/Cal';
import Notes from './components/Calendar/Notes';
import Landing from './pages/landing/Landing';
import Specialist from './pages/landing/specialist/Specialist';
import MobileBot from './chatbot/MobileBot/MobileBot'
import Channel from './pages/Chat/Channel';

const Router = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/login" element={<Login onLoginNavigateTo="/details" />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/sos" element={<SOS />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/spaces" element={<MobileBot />} />
            <Route path="/basicinfo" element={<BasicInfo />} />
            <Route path="/medicaldetails" element={<Medical />} />
            <Route path="/healthinsurance" element={<HealthInsur />} />
            <Route path="/calendar" element={<Cal />} />
            <Route path="/notes/:date/:title/:text" element={<Notes />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/specialist/:name/:degree" element={<Specialist />} />
            <Route path="/doctorChat" element={<Channel />} />
        </Routes>
    );
};

export default Router;
