import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import instance from './helpers/api/auth';
import { authStore } from 'mobxStores/stores';
import { GoogleOAuthProvider } from '@moeindana/google-oauth';
import * as dotenv from 'dotenv';
dotenv.config();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('error.response INDEX JS: ', error.response);
    console.log('error.response.data.message: ', error.response.data.message);
    if (
      error.response.data.message === 'Invalid session' ||
      error.response.data.message === 'Unauthorized'
    ) {
      authStore.initNewSession();
    } else {
      return Promise.reject(error);
    }
  }
);
