// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUser from './pages/Admin/AdminUser';
import Login from './pages/Login/login';



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-user" element={<AdminUser />} />
        <Route path="/login" element={<Login />} />



        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
