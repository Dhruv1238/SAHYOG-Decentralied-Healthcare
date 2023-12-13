import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Quiz from './pages/Quiz';
import SOS from './pages/sos/Sos';
import Profile from './pages/Profile';
import Chat from './chatbot/Chat';
import DetailsPage from './pages/DetailsPage';
import Medical from './pages/Medical';
import HealthInsur from './pages/HealthInsur';
import BasicInfo from './pages/BasicInfo';
import Login from './context/AuthContext';
import Cal from './components/Calendar/Cal';
import Notes from './components/Calendar/Notes';
import Landing from './pages/landing/Landing';
import Specialist from './pages/landing/specialist.jsx/Specialist';

export const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Login onLoginNavigateTo='/home'/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/sos" element={<SOS />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chatbot" element={<Chat />} />
            <Route path="/basicinfo" element={<BasicInfo />} />
            <Route path="/medicaldetails" element={<Medical />} />
            <Route path="/healthinsurance" element={<HealthInsur />} />
            <Route path="/calendar" element={<Cal />} />
            <Route path="/notes/:date/:title/:text" element={<Notes />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/specialist/:name/:degree" element={<Specialist />} />
        </Routes>
    )
}