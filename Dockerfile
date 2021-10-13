FROM node:16.11.1-alpine3.13

RUN apk add --no-cache ttf-opensans fontconfig && fc-cache -f

COPY --chown=node main.js package.json package-lock.json /app/
RUN mkdir /app/downloads/ && chown -R node /app/downloads/
RUN touch .env && chown node .env
WORKDIR /app/
USER node
RUN npm ci

VOLUME /app/.env
VOLUME /app/downloads

CMD npm start