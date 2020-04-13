import React from 'react';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Omit } from '@material-ui/types';
import { Link } from 'react-router-dom';

import useStyles from './Navigator.styles';
import DashboardCategory from '../interfaces/dashboard-category.interface';

export interface NavigatorProps extends Omit<DrawerProps, 'classes'> {
  routes: DashboardCategory[];
}

const ListItemLink = (path: string | string[] | undefined) =>
  React.forwardRef((props: any) => <Link to={path} {...props} />);

const NavigatorView = ({ routes, ...drawerProps }: NavigatorProps) => {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" {...drawerProps}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>Kune - Librejo</ListItem>
        {routes.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, path }) => (
              <ListItem
                key={childId}
                className={clsx(classes.item, active && classes.itemActiveItem)}
                component={ListItemLink(path)}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default NavigatorView;
