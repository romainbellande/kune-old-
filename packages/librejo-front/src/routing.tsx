import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { LoginCallback } from '@okta/okta-react';

import Dashboard from './components/Dashboard';
import DashboardCategory from './components/Dashboard/interfaces/dashboard-category.interface';

import AppRouteProps from './common/interfaces/app-route.interface';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ShelfPage from './pages/ShelfPage';
import BookPage from './pages/BookPage';

const dashboardRoutes: DashboardCategory[] = [
  {
    id: 'Planet',
    children: [
      {
        id: 'Home',
        component: HomePage,
        path: '/',
        icon: <HomeIcon />,
        exact: true,
      },
      {
        id: 'Shelf',
        component: ShelfPage,
        path: '/shelf',
        icon: <HomeIcon />,
        exact: true,
      },
      {
        path: '/books/:id',
        component: BookPage,
      },
    ],
  },
];

const routes: AppRouteProps[] = [
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/implicit/callback',
    component: LoginCallback,
  },
  {
    path: '/',
    component: () => <Dashboard routes={dashboardRoutes} />,
    secure: true,
  },
];

export default routes;
