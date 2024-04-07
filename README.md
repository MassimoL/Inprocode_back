# Inprocode Backend

The **Inprocode Backend** is a Node.js application built with Express. It is designed to interact with various data tables created using phpMyAdmin. The backend provides a range of functionalities for efficient and effective data manipulation and visualization.

The Inprocode Backend is a powerful tool for manipulating and visualizing data from various tables created using phpMyAdmin. With its wide range of features, it's an excellent choice for any project that requires efficient and effective data management.

## Features

- **CRUD Operations**: The application allows Create, Read, Update, and Delete operations on data tables.
- **Maps**: It has the capability to display data on maps for geographical visualization.
- **Calendar**: The application can present data in a calendar format, allowing for temporal visualization.
- **Charts (Chart.js)**: It can visualize data using the Chart.js library.

## How to Run the Application

To run the application, you'll need Node.js and Nodemon installed on your system. Once installed, you can start the application using the following command:

```bash
npm start
```

📁 **CODE STRUCTURE**

- **server.ts**: This is the main file that initializes the server and configures all routes and middlewares.
- **routes**: This folder contains all the application routes, organized by functionality (e.g., product, calendar, maps, charts).
- **db**: This folder contains the database configuration.
- **validations**: Contains validations for user-input data.

To render the data on the screen, please refer to the Inprocode Front repository and follow the instructions provided there. 