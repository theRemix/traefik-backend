FROM node:alpine AS build-env

WORKDIR /usr/src/app

RUN apk add --update git python alpine-sdk

COPY package*.json ./
COPY index.js ./

RUN npm install --only=production

FROM node:alpine

WORKDIR /usr/src/app

COPY --from=build-env /usr/src/app /usr/src/app

EXPOSE 3000

ENV NODE_ENV=production

CMD [ "npm", "start" ]
