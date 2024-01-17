# Ice Cream Management System

Welcome to the Ice Cream Management System, a simple application to manage ice cream products, powered by a Node.js backend and MongoDB. This README provides instructions on how to set up and run the application using Docker.

## Prerequisites

Before you begin, ensure that you have Docker installed on your system. 

1. [Docker](https://www.docker.com/products/docker-desktop/) is used to create, deploy, and run applications by using containers. Docker Compose is required to manage the application with its services.

2. [Minikube](https://minikube.sigs.k8s.io/docs/start/) installed: Minikube is a tool that allows you to run a single-node Kubernetes cluster locally on your machine.

3. [Helm](https://helm.sh/docs/intro/install/) installed: Helm is a package manager for Kubernetes that simplifies deploying and managing applications.

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

## Quick Start with Helm

### Clone the Repository
1. If applicable, clone the repository to your local machine (or download the Helm charts and any other necessary files from the given source).

### Navigate to the Helm Charts Directory
2. Change into the directory where the Helm charts are located.

### Install the Application Using Helm
3. Run the following command to install the application using Helm in the `test-namespace` (you can replace `test-namespace` with the desired namespace):

   `helm install my-ice-cream-app ./mychart --namespace test-namespace`

### Access the application
4. Once the deployment is successful, you can access the application and the Mongo Express web interface using the following commands:

   To access the Node.js application:
   `minikube service nodeapp-service -n test-namespace`
   
   To access the Mongo Express web interface:
   `minikube service mongo-express-service -n test-namespace`

   These commands will open your default web browser and take you to the respective services.

### Access the application
5. If you want to remove the application from your cluster, you can run:
   `helm uninstall my-ice-cream-app -n test-namespace`
   This will uninstall the application and release the associated resources.

# Services
The system includes the following services:

mongodb: A MongoDB database server accessible on port `27017`.

nodeapp: The Ice Cream Management Node.js application accessible on port `3000`.

mongo-express: A Mongo Express web interface accessible on port `8081`, which provides a web-based MongoDB admin interface.