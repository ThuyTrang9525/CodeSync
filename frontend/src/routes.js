import React from "react";

import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUser from './pages/Admin/AdminUser';
import StudentGoal from './pages/student/StudentGoal';
import StudentManagementStudy from './pages/student/StudentManagementStudy';

const routes = [
    
    
    
    {
        path: "/admin-dashboard",
        element: <AdminDashboard />,
        name: "Admin Dashboard",
    },
    {
        path: "/admin-user",
        element: <AdminUser />,
        name: "Admin User",
    },
    {
        path: "/student-goal",
        element: <StudentGoal />,
        name: "Student Goal",
    },
    {
        path: "/student-management",
        element: <StudentManagementStudy />,
        name: "Student Management Study",
    },
    {
        path: "*",
        element: <h1>404 - Page Not Found</h1>,
        name: "404",
    },
];

export default routes;