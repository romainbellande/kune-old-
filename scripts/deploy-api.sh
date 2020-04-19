#!/usr/bin/env sh

if [ -z "$HEROKU_APP_NAME" ]
then
  echo "HEROKU_APP_NAME is not set." >&2
  exit -1
fi

if [ -z "$HEROKU_API_KEY" ]
then
  echo "HEROKU_API_KEY is not set." >&2
  exit -1
fi

if ! [ -x "$(command -v heroku)" ]; then
  echo 'Error: heroku cli is not installed.' >&2
  exit 1
fi

heroku container:login

heroku apps:create ${HEROKU_APP_NAME}

heroku container:push web

heroku container:release web
