import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom'
// const firebaseConfig = {
//   apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: import.meta.env.REACT_APP_MEASUREMENT_ID,
// };

// initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)