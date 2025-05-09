import React from "react";

import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUser from './pages/Admin/AdminUser';
import StudentGoal from './pages/student/StudentGoal';
import StudentManagementStudy from './pages/student/StudentManagementStudy';
import ClassesGrid from './pages/teacher/homepage';
import NotificationsTable from './pages/teacher/notification';
import StudentTable from './pages/teacher/StudentList';
import Homepage from "./pages/student/Homepage";
import Profile from "./pages/student/profile";

import Login from './pages/Login/Login';



const routes = [
    
    {
        path: "/Login",
        element: <Login />,
        name: "Login",
    },
    
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
        path: "/student-home",
        element: <Homepage />,
        name: "Student Home",
    },
    {
        path: "/student-profile",
        element: <Profile />,
        name: "Student Profile",
    },
    {
        path: "*",
        element: <h1>404 - Page Not Found</h1>,
        name: "404",
    },
];

export default routes;