import './App.css'
import Example from './Example'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import SOS from './pages/SOS'
import Profile from './pages/Profile'
import Chat from './chatbot/Chat'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chatbot" element={<Chat />} />
      </Routes>
    </>
  )
}

export default App
