import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import DashboardContainer from './DashboardContainer';
import DashboardCategory from './interfaces/dashboard-category.interface';

export default { title: 'Dashboard|Dashboard', component: DashboardContainer };

const routes: DashboardCategory[] = [
  {
    id: 'Main',
    children: [
      {
        path: '/',
        component: () => <div>Hello</div>,
        icon: <PeopleIcon />,
        id: 'Home',
      },
    ],
  },
];

export const Default = () => <DashboardContainer routes={routes} />;
