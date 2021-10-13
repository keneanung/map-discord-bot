FROM node:16.11.0-alpine3.13

# Install MS fonts into the docker container to avoid glyphs showing.
# See https://github.com/Delwing/discord-mudlet-map/issues/2
RUN apk add --no-cache msttcorefonts-installer fontconfig
RUN update-ms-fonts && fc-cache -f

COPY --chown=node main.js package.json package-lock.json /app/
RUN mkdir /app/downloads/ && chown -R node /app/downloads/
WORKDIR /app/
USER node
RUN npm install

VOLUME /app/.env
VOLUME /app/downloads

CMD npm start