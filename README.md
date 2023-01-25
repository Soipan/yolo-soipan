## Link to the Google Kubernetes Engine deployment project
Unable to provide a link due to the persistent failure of the pod despite the debugging efforts i have implemented. 

Details on the running of the application and the debugging measures are thoroughly explained in the explanation.md file 

## Link to custom images on DockerHub
- [yolo-backend](https://hub.docker.com/r/namayiana/yolo-backend)
- [yolo-frontend](https://hub.docker.com/repository/docker/namayiana/yolo-frontend)



# Requirements
Make sure that you have the following installed:
- [node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) 
- npm 
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) and start the mongodb service with `sudo service mongod start`

## Navigate to the Client Folder 
 `cd client`

## Run the folllowing command to install the dependencies 
 `npm install`

## Run the folllowing to start the app
 `npm start`

## Open a new terminal and run the same commands in the backend folder
 `cd ../backend`

 `npm install`

 `npm start`

 ### Go ahead and add a product (note that the price field only takes a numeric input)

## DOCKER GUIDELINES 
## Create the docker network :
    docker network create mongo_net

## Create the docker volume :
    docker volume create mongodb

## Navigate to the root of the project's directory:
    cd yolo-soipan

 ## Run docker-compose.yml file
    docker-compose up

 ## Open the app's frontend which is the project's client folder at localhost:3000

 ## Upon the use of custom docker images, your docker-compose.yml file should resemble this format : 


     backend:
        image: namayiana/yolo-backend:v1.0.0
        build: 
            context: backend
            dockerfile: ./Dockerfile
        ports:
            - "3000:3000"
        depends_on:
            - mongo
        environment:
            - DB_HOST=mongo
            - DB_USER=admin
            - DB_PASSWORD=password
        volumes:
            - mongodb:/data/db
        networks:
            - mongo_net
    

    frontend:
        image: namayiana/yolo-frontend:v1.0.0
        build: 
            context: client
            dockerfile: Dockerfile
        ports:
            - "3000:3000"
        depends_on:
            - mongo
        environment:
            - DB_HOST=mongo
            - DB_USER=admin
            - DB_PASSWORD=password
        volumes:
            - mongodb:/data/db
        networks:
            - mongo_net

