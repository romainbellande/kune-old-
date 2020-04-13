const okta = {
  issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  redirectUri: `${window.location.origin}/implicit/callback`,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID || 'testing',
  pkce: !!process.env.REACT_APP_OKTA_CLIENT_ID,
  postLogoutRedirectUri: `${window.location.origin}/login`,
};

const api = {
  host: process.env.REACT_APP_API_HOST || 'localhost:8000',
  version: process.env.REACT_APP_API_VERSION || 'v1',
};

export default {
  okta,
  api,
};
