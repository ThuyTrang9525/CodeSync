import React from "react";

import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUser from './pages/Admin/AdminUser';
import StudentGoal from './pages/student/StudentGoal';
import StudentManagementStudy from './pages/student/StudentManagementStudy';
import ClassesGrid from './pages/teacher/HomePage';
import NotificationsTable from './pages/teacher/Notification';
import StudentTable from './pages/teacher/StudentList';


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
        path: "/teacher-home",
        element: <ClassesGrid />,
        name: "Teacher Home",
    },
    {
        path: "/teacher-notification",
        element: <NotificationsTable />,
        name: "Notifiation",
    },
    {
        path: "/teacher-studentList",
        element: <StudentTable />,
        name: "Student List",
    },
    {
        path: "*",
        element: <h1>404 - Page Not Found</h1>,
        name: "404",
    },
];

export default routes;