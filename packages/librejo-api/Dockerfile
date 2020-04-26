# PRODUCTION DOCKERFILE
# ---------------------
# This Dockerfile allows to build a Docker image of the NestJS application
# and based on a NodeJS 12 image. The multi-stage mechanism allows to build
# the application in a "builder" stage and then create a lightweight production
# image containing the required dependencies and the JS build files.
#
# Dockerfile best practices
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# Dockerized NodeJS best practices
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://www.bretfisher.com/node-docker-good-defaults/
# http://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/

ARG YARN_LOCK

FROM node:12-alpine as builder

WORKDIR /home/node

RUN npm i -g @nestjs/cli && apk add --no-cache python make g++

RUN echo "${YARN_LOCK}" > yarn.lock

COPY package.json ./

RUN yarn install --pure-lockfile

COPY . .

RUN yarn build && npm prune --production

# ---

FROM node:12-alpine

ENV NODE_ENV production
ENV PORT 9000

RUN npm install -g pm2 typeorm

USER node

WORKDIR /home/node

COPY --from=builder /home/node/node_modules /home/node/node_modules/
COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/dist /home/node/dist/
COPY tsconfig.json ecosystem.config.js ./

EXPOSE 9000

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]
