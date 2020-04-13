import { Theme, makeStyles } from '@material-ui/core';

export const lightColor = 'rgba(255, 255, 255, 0.7)';

export default makeStyles((theme: Theme) => ({
  appBar: {},
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    borderColor: lightColor,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  endSpacer: {
    flexGrow: 1,
  },
  logoutButton: {
    color: theme.palette.primary.contrastText,
  },
}));
