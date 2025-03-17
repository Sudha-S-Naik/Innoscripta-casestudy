NewsHub Docker Setup
This document provides instructions for running the NewsHub frontend application using Docker.

 Prerequisites
 
Docker installed on your system
Git (to clone the repository)

Building and Running the Docker Container

Step 1: Clone the repository 

git clone <repository-url>
cd Newshub-master

 Step 2: Build the Docker image 
 
docker build -t newshub-frontend .

Step 3: Run the Docker container

docker run -p 5173:5173 newshub-frontend:latest
or 
docker run --env-file .env -p 5173:5173 newshub-frontend 

This will start the application and make it available at http://localhost:5173

Access the application in vs code 

npx vite --host 0.0.0.0
