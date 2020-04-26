import { HttpModule } from '@nestjs/common';

import { Config } from '@/config';

export const OktaClientModule = HttpModule.register({
  baseURL: `https://${Config.OKTA_HOST}/api/v1`,
  headers: {
    Authorization: `SSWS ${Config.OKTA_TOKEN}`,
  },
});
