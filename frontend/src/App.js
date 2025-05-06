// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUser from './pages/Admin/AdminUser';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-user" element={<AdminUser />} />


        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
