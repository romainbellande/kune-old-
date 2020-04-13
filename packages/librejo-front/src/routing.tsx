import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import { LoginCallback } from '@okta/okta-react';

import Dashboard from './components/Dashboard';
import DashboardCategory from './components/Dashboard/interfaces/dashboard-category.interface';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import AppRouteProps from './common/interfaces/app-route.interface';

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
