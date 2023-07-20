import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from './config';
import AuthService from './services/core/AuthService';

axios.defaults.baseURL = API_BASE_URL;
axios.interceptors.request.use(
  async (config) => {
    const token = AuthService.getAuthToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers['Cache-Control'] = 'no-cache';
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      alert('removing token');
      AuthService.unsetAuthToken();
      // Redirect to login page
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
