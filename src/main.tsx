import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from "./theme"
import App from './App'
import './index.css'
<<<<<<< HEAD
import { Provider } from "react-redux"
import { store } from "./store"
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
=======
import {  ThemeProvider } from '@mui/material'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
>>>>>>> 95be9448c84cc43934d1a745914408c76c1d17b8
  </React.StrictMode>
)
