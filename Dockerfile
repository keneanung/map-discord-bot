FROM node:16.11.0-alpine3.13

COPY --chown=node main.js package.json package-lock.json /app/
WORKDIR /app/
USER node
RUN npm install
CMD npm start