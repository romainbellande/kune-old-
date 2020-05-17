import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectAccessToken } from 'src/redux/slices/auth/auth.slice';
import DashboardView from './DashboardView';
import DashboardCategory from './interfaces/dashboard-category.interface';

interface Props {
  routes: DashboardCategory[];
}

const DashboardContainer: React.FC<Props> = ({ routes }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prevValue => !prevValue);
  const accessToken = useSelector(selectAccessToken);

  return accessToken ? (
    <DashboardView
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
      routes={routes}
      accessToken={accessToken}
    />
  ) : null;
};

export default DashboardContainer;
