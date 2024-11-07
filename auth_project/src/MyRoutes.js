import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import PrivateRoutes from './pages/PrivateRoutes';

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<PrivateRoutes> <Dashboard /></PrivateRoutes>}/>
        </Routes>
    </Router>
  )
}

export default MyRoutes