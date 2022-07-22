# docker-host-info
Create a new docker image with basic express application

### Steps to create an image after cloning this repo:

#### How to create the image:
* Open a console in the project directory
* Run the following command:
```bash
docker build -t node-express .
```
* To see the image specification, run the following command:
```bash
docker image inspect node-express
```

#### How to run a container:
* Open a console in the project directory
* Run the following command:
```bash
docker run --name node-express-container -it -p 3000:3000 --rm node-express:latest
```
* Go to any browser, on the path section put http://localhost:3000/server-info then you are going to see the host information
* To see the container specifications, run the following commands:
```bash
docker inspect node-express-container
```

#### How to make modification on the local project and display those in the container:

* Open a console in the project directory:
* Run the following command:
```bash
docker run --name node-express-container -it -p 3000:3000 --rm -v /$(pwd):/app node-express:latest
```
* Go to any browse, on the path section put http://localhost:3001/server-info then you are going to see the host information
* Modify the the host file -> src/index.js
* Run again:
```bash
docker run --name node-express-container -p 3000:3000 --rm -v /$(pwd):/app node-express:latest
```
* Go to the browser and refresh the page.

### Using docker-compose:
* Run the following command for creating an image of the current app called "docker-host-info" and to run the containers for the nexus, jenkins, portainer, postgres, sonarqube and app services:
```bash
docker-compose up --build
```
* Review the running containers. If the sonarqube container has EXIT status then review the logs using the next command:
```bash
docker-compose logs sonarqube
```
* If the error is _ERROR: Max virtual memory areas vm.max_map_count 65530 is too low_. Then run the next command and restart docker service:
```bash
sudo sysctl -w vm.max_map_count=262144
```
