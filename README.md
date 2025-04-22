# Simple Web Framework

A simple web framework built with Node.js and Express, containerized with Docker.

## Simple Setup
Steps for Setup:
1. Install Docker and Docker Compose on your system
2. Clone the repository
3. Run the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```
4. Visit http://localhost:3001 to access the web app


## Running with Node.js directly

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Visit http://localhost:3001

## Running with Docker

### Using Docker Compose (recommended)

1. Make sure you have Docker and Docker Compose installed
2. Run: `docker-compose up --build`
3. Visit http://localhost:3001

### Using Docker directly

1. Build the image: `docker build -t simple-web-framework .`
2. Run the container: `docker run -p 3001:3001 simple-web-framework`
3. Visit http://localhost:3001

## Features

- Express.js web server
- Static file serving
- Basic routing
- Docker containerization
- Volume mounting for development

Alternative Setup (without Docker):
1. Run npm install to install dependencies
2. Install Axios with npm install axios for making API requests
3. Run the server with Node index.js
4. Click the hyperlink to access the web app

