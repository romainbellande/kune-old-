import { Config } from '../config';

export const apm =
  Config.apmEnabled() &&
  require('elastic-apm-node').start({
    // Override service name from package.json
    // Allowed characters: a-z, A-Z, 0-9, -, _, and space
    serviceName: Config.APM_SERVICE_NAME,

    // Use if APM Server requires a token
    secretToken: Config.APM_SECRET_TOKEN,

    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: Config.APM_SERVICE_URL,
  });
