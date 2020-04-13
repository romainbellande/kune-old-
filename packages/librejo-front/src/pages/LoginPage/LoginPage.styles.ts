import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  container: {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${process.env.PUBLIC_URL}/space-bg1.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    maxWidth: '100vw',
  },
  box: {
    height: '100vh',
  },
}));
