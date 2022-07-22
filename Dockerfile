# MULTISTAGE - TESTING
FROM node:alpine

COPY ./package.json /app/package.json
COPY ./src app/src
WORKDIR /app
RUN npm install
RUN npm run test

# MULTISTAGE - RUNNING API
FROM node:alpine

COPY --from=0 /app/package.json /app/package.json
COPY --from=0 /app/src app/src
WORKDIR /app
EXPOSE 3000
RUN npm install
CMD npm start