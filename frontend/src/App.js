// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUser from './pages/Admin/AdminUser';
import ClassesGrid from './pages/teacher/homepage';
import StudentTable from './pages/teacher/viewStudentProfile';
import NotificationsTable from './pages/teacher/notification';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-user" element={<AdminUser />} />
        <Route path="/teacher-home" element={<ClassesGrid />} />
        <Route path="/teacher-viewStudentProfile" element={<StudentTable />} />
        <Route path="/teacher-notification" element={<NotificationsTable />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
