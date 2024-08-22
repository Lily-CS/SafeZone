import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';
import authConfig from './config/authConfig';


const msalInstance = new PublicClientApplication({
  auth: {
    clientId: authConfig.clientId,
    authority: authConfig.authority,
    redirectUri: authConfig.redirectUri,
  },
});

ReactDOM.render(
  <MsalProvider instance={msalInstance}>
    <App />
  </MsalProvider>,
  document.getElementById('root')
);