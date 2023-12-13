import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Quiz from './pages/Quiz';
import SOS from './pages/sos/SOS';
import Profile from './pages/Profile';
import Chat from './chatbot/Chat';
import DetailsPage from './pages/DetailsPage';
import Medical from './pages/Medical';
import HealthInsur from './pages/HealthInsur';
import BasicInfo from './pages/BasicInfo';
// import Cal from './components/Calendar/Cal'; 
export const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/sos" element={<SOS />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chatbot" element={<Chat />} />
            <Route path="/basicinfo" element={<BasicInfo />} />
            <Route path="/medicaldetails" element={<Medical />} />
            <Route path="/healthinsurance" element={<HealthInsur />} />
            {/* <Route path="/calendar" element={<Cal />} /> */}
        </Routes>
    )
}