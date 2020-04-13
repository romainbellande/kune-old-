import config from 'src/common/config';

const { issuer, clientId, redirectUri, pkce } = config.okta;

export const oktaSignIn = new OktaSignIn({
  baseUrl: issuer.split('/oauth2')[0],
  redirectUri,
  clientId,
  authParams: {
    pkce,
    issuer,
    responseType: ['token', 'id_token'],
    display: 'page',
  },
});
