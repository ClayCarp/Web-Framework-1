# Simple Web Framework

A simple web framework built with Node.js and Express, containerized with Docker.

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

Clay Carpenter
GitHub Link: ClayCarp/Web-Framework-1
High-Level Purpose Statement:
The purpose of this project is to create a simple web application using Node.js and JavaScript. The application will randomly generate a list of restaurants based on a chosen food category, helping users who are undecided on where to eat. Additionally, an embedded Google Map will allow users to visually locate the restaurant options. Most of this will be done in part one of web framework. The strong suit of the second part of the web framework assignments is to create a favorites page that the user can save restaurants they think are interesting. The front-end will be kept simple, focusing on functionality, while the back-end will be powered by Node.js and JavaScript. The application is containerized using Docker for easy deployment and consistent environment management.

Experimental Design:
The goal is to build a basic restaurant recommendation system. The application will use JavaScript classes to randomly generate a list of restaurants based on the selected food category. They can also choose to favorite a restaurant they like. If they choose to favorite a restaurant it will be saved using the script.js file. The back-end will be developed using Node.js, while the front-end will utilize HTML, CSS, and JavaScript for the user interface. For now, the list of restaurants will be hardcoded, but in the future, an API (like Yelp) could be integrated to provide more dynamic, location-based suggestions. The website will include an embedded Google Map to show the location of selected restaurants. The entire application runs in a Docker container, ensuring consistent behavior across different environments.

Resources Available:
JavaScript Documentation
Node.js Documentation
YouTube Tutorials
Code from previous labs
Docker Documentation

Time Estimate:
I plan to dedicate about 2 hours on the project. Since most of the work is already done from the previous assignment, I just want to try and implement another page so the user can keep track of the restaurants they think are interested in. The Docker implementation added about 30 minutes to the setup time but provides significant benefits in terms of deployment and environment consistency.

Experiment Notes:
Building this web application with JavaScript and Node.js was straightforward. The backend logic for randomly generating restaurant lists based on a food category was simple to implement. I had to add a few more functions so the data would be updated to the favorites.html page. To keep things uncomplicated, I avoided databases and hardcoded the restaurant list. For future improvements, I would like to integrate an API like Yelp to retrieve a dynamic list of local restaurants based on user location. The Docker containerization was implemented using a Node.js base image, with volume mounts for the views and public directories to enable live development updates.

Results:
The project was completed successfully with minimal complexity. By using JavaScript and Node.js, I was able to create both the back-end and front-end of the web application. The front-end consists of a simple user interface built with HTML and CSS, and the back-end is powered by JavaScript running on Node.js. The embedded Google Map functionality was also added, showing the location of the selected restaurants. The Docker containerization ensures the application runs consistently across different environments and makes deployment straightforward. Overall, the project went smoothly, meeting my initial goals.

Consequences for the Future:
In the future, I plan to enhance this project by integrating a Yelp API or similar service to provide real-time, location-based restaurant suggestions. Additionally, I'd like to improve the UI with more interactive features and possibly expand the database of restaurant categories. These updates would provide a more dynamic user experience. The Docker setup will make it easier to add these features while maintaining environment consistency.

Steps for Setup:
1. Install Docker and Docker Compose on your system
2. Clone the repository
3. Run the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```
4. Visit http://localhost:3001 to access the web app

Alternative Setup (without Docker):
1. Run npm install to install dependencies
2. Install Axios with npm install axios for making API requests
3. Run the server with Node index.js
4. Click the hyperlink to access the web app

