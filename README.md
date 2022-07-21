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


