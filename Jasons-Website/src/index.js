import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from '../src/reportWebVitals.js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

// Define your PayPal client ID here (replace with your actual PayPal Client ID)
const paypalClientId = process.env.REACT_APP_PAYPAL_CLIENT_ID || "ASkLMHV3lQogZxRJD7IKtsAEg_giUTeFUQdpAfRSPugDK63Q18PslXbuTQAe3_Pfd1pfsWy4JGshF9wF"; // Using environment variable or fallback

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the whole app with PayPalScriptProvider to provide PayPal functionality */}
    <PayPalScriptProvider options={{ "client-id": paypalClientId }}>
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
