#!/usr/bin/env sh

if [ -z "$HEROKU_APP_NAME" ]
then
  echo "HEROKU_APP_NAME is not set." >&2
  exit -1
fi

if [ -z "$APP_DIR" ]
then
  echo "APP_DIR is not set." >&2
  exit -1
fi

if [ -z "$HEROKU_API_KEY" ]
then
  echo "HEROKU_API_KEY is not set." >&2
  exit -1
fi

if [ -z "$OKTA_HOST" ]
then
  echo "OKTA_HOST is not set." >&2
  exit -1
fi

if ! [ -x "$(command -v heroku)" ]; then
  echo 'Error: heroku cli is not installed.' >&2
  exit 1
fi

if ! [ -x "$(command -v docker)" ]; then
  echo 'Error: docker cli is not installed.' >&2
  exit 1
fi

heroku container:login

heroku apps:create "${HEROKU_APP_NAME}"

heroku addons:create heroku-postgresql:hobby-dev --version 10 -a "${HEROKU_APP_NAME}" --wait

heroku config:set OKTA_HOST=$OKTA_HOST -a "${HEROKU_APP_NAME}"

docker build -t librejo-api --file "${APP_DIR}/Dockerfile" --build-arg YARN_LOCK="cat yarn.lock" $APP_DIR

HEROKU_TAG="registry.heroku.com/${HEROKU_APP_NAME}/web"

docker tag librejo-api $HEROKU_TAG

docker push $HEROKU_TAG

heroku container:release web -a "${HEROKU_APP_NAME}"
