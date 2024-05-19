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
import Mark from './pages/instructor/instructor.mark';
import ReportLearingOutcomes from './pages/report/reportLearningOutcomes';
import { Navigate } from 'react-router-dom';

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
        path: '/instuctor/mark',
        element: <Mark/>,
    },
    {
        path: '/reportLearningResult',
        element: <ReportLearingOutcomes/>,
    },
    {
        path: '',
        // element: <Navigate to="/home" />,
    }
];

export const router = createBrowserRouter(routes);
