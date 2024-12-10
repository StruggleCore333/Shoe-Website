import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Profile from '../components/Profile';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    </Routes>
);

export default AppRoutes;
