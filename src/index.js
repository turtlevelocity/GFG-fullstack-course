import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timeline from './timeline/Timeline';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login/Login';
import PrivateRoute from './PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/timeline" element={<PrivateRoute element={Timeline} /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

