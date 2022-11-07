import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import instance from './helpers/api/auth';
import { authStore } from 'mobxStores/stores';
import { GoogleOAuthProvider } from '@moeindana/google-oauth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Kapusta-Refactoring-MobX/">
      <GoogleOAuthProvider clientId="360398004101-61pu4g5lqgm4i3oc66c0p0jssd3ofd2i.apps.googleusercontent.com">
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
