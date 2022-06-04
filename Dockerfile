FROM node:18.2.0-alpine as base

WORKDIR /var/dev/egzodia

RUN apk update &&\
    apk add fish &&\
    apk add git &&\
    apk add exa &&\
    apk add ncdu &&\
    apk add bat &&\
    apk add micro &&\
    apk add fzf &&\
    apk add htop &&\
    npm install -g pnpm
