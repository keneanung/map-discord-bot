FROM node:lts-slim

RUN apt-get update && apt-get install -y \
    fontconfig \
    fonts-open-sans \
 && rm -rf /var/lib/apt/lists/*```

COPY --chown=node main.js package.json package-lock.json /app/
RUN mkdir /app/downloads/ && chown -R node /app/downloads/
RUN touch .env && chown node .env
WORKDIR /app/
USER node
RUN npm ci

VOLUME /app/.env
VOLUME /app/downloads

CMD npm start