import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hooks from './Hooks';
import Clock from './Clock';
import Clock1 from './Clock1';
import Axios_fetch from './Axios_fetch';
import { BrowserRouter } from 'react-router-dom';
import React_router from './React_router';
import Forms from './Forms';
import Class_component from './Class_component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Forms/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
