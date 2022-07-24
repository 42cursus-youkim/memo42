FROM node:current-alpine3.16

COPY app/package*.json /app/

WORKDIR /app

RUN npm install

COPY app/ /app

RUN npm run build

ENTRYPOINT [ "npm", "run", "start:dev" ]
