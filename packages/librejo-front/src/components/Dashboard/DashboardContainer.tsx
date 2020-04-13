import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DashboardView from './DashboardView';
import DashboardCategory from './interfaces/dashboard-category.interface';
import useThunk from 'src/common/helpers/use-thunk';

interface Props {
  routes: DashboardCategory[];
}

const DashboardContainer: React.FC<Props> = ({ routes }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(prevValue => !prevValue);

  return <DashboardView mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} routes={routes} />;
};

export default DashboardContainer;
