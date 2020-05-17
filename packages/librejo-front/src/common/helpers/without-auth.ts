import { OverwriteGlobalOptions } from 'use-http';

const withoutAuth: OverwriteGlobalOptions = ({ headers, ...rest }) => {
  return rest;
};

export default withoutAuth;
