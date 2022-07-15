# specify the node base image with your desired version node:<version>
FROM node:alpine

#COPY ONLY NEEDED FILES
COPY ./package.json /app/package.json
COPY ./src app/src
WORKDIR /app
#EXPOSE PORT 300 ON WICH RUNS THE API
EXPOSE 3000
#INSTALL ALL REQUIRED DEPENDENCIES
RUN npm install
#START RUNNING THE API
CMD npm start