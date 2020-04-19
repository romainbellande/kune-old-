/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  apps: [
    {
      name: 'API',
      script: './dist/src/main.js',

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      node_args: '-r ./node_modules/tsconfig-paths/register',
      error_file: 'logs/err.log',
      out_file: 'logs/out.log',
      log_file: 'logs/combined.log',
      time: true,
      instances: 6,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
