import * as OktaJwtVerifier from '@okta/jwt-verifier';

import { Config } from '@/config';

export const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `https://${Config.OKTA_HOST}/oauth2/default`, // required
});
