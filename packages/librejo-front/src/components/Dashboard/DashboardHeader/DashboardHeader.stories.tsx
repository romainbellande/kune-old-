import React from 'react';
import { action } from '@storybook/addon-actions';

import DashboardHeader from './DashboardHeaderContainer';

export default { title: 'Dashboard|DashboardHeader', component: DashboardHeader };

const authService = {
  logout: () => {},
};

export const Default = () => <DashboardHeader onDrawerToggle={action('onDrawerToggle')} authService={authService} />;
