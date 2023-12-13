import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormProvider from './context/FormProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider>
        <FormProvider>
          <App />
        </FormProvider>
      </ThemeProvider>
  </React.StrictMode>
)
