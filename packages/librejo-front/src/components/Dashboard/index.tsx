import React from 'react';

import DashboardContainer from './DashboardContainer';
import DashboardCategory from './interfaces/dashboard-category.interface';

interface Props {
  routes: DashboardCategory[];
}

export default ({ routes }: Props) => <DashboardContainer routes={routes} />;
