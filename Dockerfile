FROM node:16.17.0-alpine3.15

WORKDIR /app

#RUN apk add --no-cache npm
COPY package.json ./
COPY hourlyBasicNetStatsRecorder.js ./
COPY .env ./

WORKDIR /app/externalFunctions
COPY externalFunctions/*.js ./

WORKDIR /app
RUN npm install --omit=dev && npm cache clean --force
CMD node /app/hourlyBasicNetStatsRecorder.js
