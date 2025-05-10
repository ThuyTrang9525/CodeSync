import React from "react";

import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminUser from './pages/Admin/AdminUser';
import StudentGoal from './pages/Student/StudentGoal';
import StudentManagementStudy from './pages/Student/StudentManagementStudy';
import ClassesGrid from './pages/Teacher/TeacherHomepage';
import NotificationsTable from './pages/Teacher/TeacherNotification';
import StudentTable from './pages/Teacher/TeacherListStudent';
import Homepage from "./pages/Student/StudentHomepage";
import Profile from "./pages/Student/StudentProfile";



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