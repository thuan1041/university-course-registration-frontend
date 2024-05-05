// routes.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './layouts/homeLayout';
import LoginPage from './pages/auth/auth.loginPage';
import HomeSubLayout from './layouts/homeSubLayout';
import FogotPassword from './components/login/fogotPassword';
import FogotPage from './pages/auth/auth.fogotPasswordPage';

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
    }
];

export const router = createBrowserRouter(routes);
