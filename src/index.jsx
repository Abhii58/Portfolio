import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'; // Import global styles
import App from './App';
import reportWebVitals from './reportWebVitals';
// src/index.js




ReactDOM.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);

// Call reportWebVitals to measure performance in your app
reportWebVitals();
