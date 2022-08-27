import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from "./theme"
import App from './App'
import './index.css'
import {  ThemeProvider } from '@mui/material'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
)
