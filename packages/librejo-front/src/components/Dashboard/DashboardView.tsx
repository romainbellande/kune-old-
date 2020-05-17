import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import { Provider, IncomingOptions } from 'use-http';

import Navigator from './Navigator';
import DashboardHeader from './DashboardHeader';
import useStyles, { drawerWidth } from './Dashboard.styles';
import DashboardCategory from './interfaces/dashboard-category.interface';
import config from 'src/common/config';

export interface Props {
  mobileOpen: boolean;
  handleDrawerToggle(): void;
  routes: DashboardCategory[];
  accessToken: string;
}

const DashboardView = ({ mobileOpen, handleDrawerToggle, routes, accessToken }: Props) => {
  const classes = useStyles();
  const { protocol } = window.location;
  const providerOptions: IncomingOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return (
    <Provider url={`${protocol}//${config.api.host}`} options={providerOptions}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              routes={routes}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator routes={routes} PaperProps={{ style: { width: drawerWidth } }} />
          </Hidden>
        </nav>
        <div className={classes.appContent}>
          <DashboardHeader onDrawerToggle={handleDrawerToggle} />
          <div className={classes.wrapper}>
            <main className={classes.mainContent}>
              <span className={classes.mainBackgroundImage} />
              <div className={classes.mainRoute}>
                {routes.map(({ children }) =>
                  children.map(({ id, ...route }) => <Route key={`route-${id}`} {...route} />),
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default DashboardView;
