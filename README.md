# Ice Cream Management System

Welcome to the Ice Cream Management System, a simple application to manage ice cream products, powered by a Node.js backend and MongoDB. This README provides instructions on how to set up and run the application using Docker.

## Prerequisites

Before you begin, ensure that you have Docker installed on your system. Docker is used to create, deploy, and run applications by using containers. Docker Compose is required to manage the application with its services.

## Quick Start

1. **Clone the repository:**

   If applicable, clone the repository to your local machine (or download the `compose.yml` and any other necessary files from the given source).

2. **Navigate to the project directory:**

   Change into the project directory where the `compose.yml` file is located.

3. **Start the services:**
   Run the following command to start all services in the background:

   ```docker-compose up -d```

4. **Access the application:**
   Once the services are up and running, you can access:

   The Node.js application at: `http://localhost:3000`
   Mongo Express web interface at: `http://localhost:8081`

5. **Stopping the Services:**
   To stop and remove all the running services, you can use the following command:

   `docker-compose down`

# Services
The system includes the following services:

mongodb: A MongoDB database server accessible on port `27017`.
nodeapp: The Ice Cream Management Node.js application accessible on port `3000`.
mongo-express: A Mongo Express web interface accessible on port `8081`, which provides a web-based MongoDB admin interface.