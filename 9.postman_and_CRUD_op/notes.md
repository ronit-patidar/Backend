# Node.js, Express & MongoDB Notes

## What is a Server?
A server is a program/machine that listens for requests from clients and sends back responses (data, files, etc.).

## Node
- JavaScript runtime that lets you run JS outside the browser (e.g., to build servers).

## Package
- A reusable bundle of code that can be installed and used in a project.
- Example: `cat-me`

## Library
- A collection of pre-written code/functions that you can use in your project.

## npm
- Node Package Manager — used to install, manage, and share packages/libraries for Node.js projects.

## Express.js
- A package/framework used to create Node.js applications (especially servers/APIs) easily.

## npm init -y
- Initializes a new Node.js project with a default `package.json` file (skips the setup questions).

## Creating and Starting a Server

```js
const express = require("express");

// server instance
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// start backend server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## What is a Port?
- A numbered endpoint on a machine through which network communication happens. A server "listens" on a specific port (e.g., 3000) for incoming requests.

## Request Methods & Response Methods
- **Request (`req`)**: Represents the incoming request from the client (contains data like params, query, body).
- **Response (`res`)**: Used to send data back to the client (e.g., `res.send()`, `res.json()`).

## What is an API (Application Programming Interface)?
- A set of rules/protocols that allows different software applications to communicate with each other.

## Types of API
- REST API
- SOAP API
- GraphQL API
- WebSocket API

### REST
- REST is a type of API based on an **architectural style/protocol** (Representational State Transfer).

## HTTP Methods
| Method | Purpose |
|--------|---------|
| GET    | Fetch data from the server |
| POST   | Send new data to the server |
| PUT    | Replace/update existing data entirely |
| PATCH  | Update part of existing data |
| DELETE | Delete data from the server |

### Simple Explanations (Hinglish)
- **GET** = server se data fetch karna ho tab use karte hain.
- **POST** = server par data send karna ho.
- **PATCH** = server par data already hai aur us data ko update karna hai.
- **DELETE** = server par data hai aur use delete karna hai.

## HTTP Status Codes
- Codes returned by the server indicating the result of a request (e.g., 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error).

## HTTP vs Socket.IO
- **HTTP**: Request-response based, client initiates communication each time.
- **Socket.IO**: Enables real-time, two-way communication between client and server (persistent connection).

## Middlewares
- Functions that run between the request and response cycle — used for logging, authentication, parsing data, error handling, etc.

## MongoDB & Compass
- **MongoDB**: A NoSQL database that stores data in JSON-like documents.
- **MongoDB Compass**: A GUI tool to visually interact with MongoDB databases.

### Steps
1. Create a cluster (on MongoDB Atlas).
2. Connect to it through MongoDB Compass.
3. Set up **Network Access** in MongoDB (to allow connections from your IP/application).
4. Inside a cluster, you create **databases**.

## Mongoose
- A library used to connect the server (Node/Express) with the MongoDB database and interact with it using schemas/models.