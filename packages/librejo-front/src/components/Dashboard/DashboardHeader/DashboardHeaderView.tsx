import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './DashboardHeader.styles';
import Button from '@material-ui/core/Button';

interface Props {
  /**
   * Triggered on mobile only when a user click on the burger menu.
   */
  onDrawerToggle(): void;

  onLogout(): void;
}

const DashboardHeaderView = ({ onDrawerToggle, onLogout }: Props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar className={classes.appBar} position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Hidden smUp>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Grid>
            <Grid item className={classes.endSpacer} />
            <Button classes={{ label: classes.logoutButton }} onClick={onLogout}>
              Logout
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default DashboardHeaderView;
