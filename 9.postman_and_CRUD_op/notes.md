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

// app.get("/",(req,res)=>{
//   res.send("Hello World");
// })
// app.get("/about",(req,res)=>{
//   res.send("About Page");
// })

// // start backend server
// app.listen(3000,()=>{
//   console.log("Server is running on port 3000");
// })