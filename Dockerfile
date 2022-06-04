FROM node:18.2.0-alpine as base

WORKDIR /var/dev/egzodia

RUN apk update &&\
    apk add fish &&\
    apk add exa &&\
    apk add ncdu &&\
    apk add bat &&\
    apk add micro &&\
    apk add fzf &&\
    apk add htop

COPY package*.json ./

FROM base as dev

ENV NODE_ENV=developement

RUN npm install

COPY . /

FROM base as production

ENV NODE_PATH=./build

RUN npm run build

COPY . /
