import React from 'react';

import DashboardHeaderView from './DashboardHeaderView';

interface AuthService {
  logout(): void;
}

interface Props {
  /**
   * Triggered on mobile only when a user click on the burger menu.
   */
  onDrawerToggle(): void;

  authService: AuthService;
}

const DashboardHeaderContainer: React.FC<Props> = ({ onDrawerToggle, authService }) => {
  const onLogout = () => {
    authService.logout();
  };

  return <DashboardHeaderView onDrawerToggle={onDrawerToggle} onLogout={onLogout} />;
};

export default DashboardHeaderContainer;
