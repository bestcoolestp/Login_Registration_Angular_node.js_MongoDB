# Login and Registration System

## Project Overview

This project implements a login and registration system using Angular for the frontend, Node.js for the backend, and MongoDB as the database. It is designed to manage student registrations and logins, providing a basic yet robust example of user authentication and data management in a web application.

## Architecture

The project is structured into several key components:

- **Frontend**: Built with Angular.
![Screenshot 2023-09-02 083753](https://github.com/bestcoolestp/Login_Registration_Angular_node.js_MongoDB/assets/108534975/df717b6d-65e3-4cf3-87e9-1e3cd1f0a95a)

- **Backend**: Developed using Node.js, with Express.js as the server framework.
![Screenshot 2023-09-02 083839](https://github.com/bestcoolestp/Login_Registration_Angular_node.js_MongoDB/assets/108534975/b12af23d-c912-44c3-a696-be76553f69f9)

- **Database**: MongoDB, used for storing and retrieving user data.



### Directory Structure

- `src/`: Contains the source code for the application.
  - `student/`: Holds the files related to the student entity.
    - `studentController.js`: Manages the request-response cycle for student operations.
    - `studentModel.js`: Defines the MongoDB schema for the student entity.
    - `studentService.js`: Contains the business logic for student operations.
- `server.js`: The entry point for the Node.js server.
- `package.json`: Lists the project dependencies and other metadata.
- `README.md`: Provides documentation for the project (this file).

## Key Components

### Server (`server.js`)

- Initializes and configures an Express.js server.
- Connects to the MongoDB database.
- Sets up middleware for CORS, URL encoding, and JSON parsing.
- Defines the server's listening port.

### Student Controller (`studentController.js`)

- Handles incoming HTTP requests for creating and logging in students.
- Communicates with the `studentService` to process these requests.

### Student Model (`studentModel.js`)

- Defines the schema for the student entity in MongoDB.
- Includes fields for `firstName`, `lastName`, `email`, and `password`.

### Student Service (`studentService.js`)

- Contains the logic for creating students and validating logins.
- Encrypts passwords before saving them to the database.
- Checks encrypted passwords during login.

## Security

- Passwords are encrypted using a simple encryption method before being stored in the database.
- The application uses CORS middleware for added security.
![Screenshot 2023-09-02 085801](https://github.com/bestcoolestp/Login_Registration_Angular_node.js_MongoDB/assets/108534975/8fafdd39-7171-45b1-8eef-58a6ad5786bb)
![Screenshot 2023-09-02 085639](https://github.com/bestcoolestp/Login_Registration_Angular_node.js_MongoDB/assets/108534975/4213e965-0297-469d-8aaa-cac26df60ceb)

