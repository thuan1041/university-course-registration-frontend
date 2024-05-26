// routes.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './layouts/homeLayout';
import LoginPage from './pages/auth/auth.loginPage';
import HomeSubLayout from './layouts/homeSubLayout';
import FogotPassword from './components/login/fogotPassword';
import FogotPage from './pages/auth/auth.fogotPasswordPage';
import HomeCourseRegistration from './layouts/homeCourseRegistration';
import TimeTable from './pages/schedule/timeTable';
import BoardLayout from './layouts/boardLayout';
import HomeInstructorLayout from './layouts/homeInstructorLayout';
import ReportLearingOutcomes from './pages/report/reportLearningOutcomes';
import { Navigate } from 'react-router-dom';
import HomeLayoutAdmin from './layouts/homeAdminLayout';
import LoginAdminPage from './components/login/loginAdminPage';

const routes = [
    {
        path: '/',
        element: <HomeLayout />,
        exact: true,
        children: [
            {
                path: 'home',
                element: <HomeSubLayout/>,
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/login-admin',
        element: <LoginAdminPage />,
    },
    {
        path: '/fogotPassword',
        element: <FogotPage/>
    },
    {
        path:'/courseRegistration',
        element: <HomeCourseRegistration/>
    },
    {
        path: '/time-table',
        element: <TimeTable />,
    },
    {
        path: '/me/time-table',
        element: <BoardLayout />,
    },
    {
        path: '/instuctor/dashboard',
        element: <HomeInstructorLayout />,
    },
    {
        path: '/reportLearningResult',
        element: <ReportLearingOutcomes/>,
    },
    {
        path: '/admin/dashboard',
        // element: <Navigate to="/home" />,
        element: <HomeLayoutAdmin/>
    }
];

export const router = createBrowserRouter(routes);
