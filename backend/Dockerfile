FROM node:current-alpine3.16

COPY app /app

WORKDIR /app

RUN npm install
RUN npm run build

ENTRYPOINT [ "npm", "run", "start:dev" ]
