Mongodb is a document oriented no sql database here data is stored in the form of document in json format that is intutive for users

These are different tools related to MongoDB:

1. mongod

mongod is the MongoDB server process.

It runs the MongoDB database.
It stores and manages your data.
Without mongod, there is no database running.

Think of it as the engine of MongoDB.

2. mongosh

mongosh is the MongoDB command-line shell.

Used to connect to a MongoDB server.
You can run queries and commands from the terminal.

Example:

use collegeDB

db.students.find()

Think of it as a terminal/console for talking to MongoDB.

3. MongoDB Compass

MongoDB Compass is the graphical user interface (GUI) for MongoDB.

View databases, collections, and documents visually.
Run queries without typing commands.
Good for beginners.

Think of it as MongoDB with buttons and windows instead of terminal commands.

How they work together
MongoDB Server (mongod)
        ↑
   mongosh      MongoDB Compass
 (Terminal)         (GUI)
mongod = runs the database
mongosh = access the database through the terminal
MongoDB Compass = access the database through a graphical interface

As a beginner learning backend with Node.js, you'll usually use:

MongoDB (database)
Mongoose (Node.js library)
MongoDB Compass (to see your data visually)

by default , MongoDb runs on port 27017. 

DATABASE specific terms
CRUD -> CREATE,READ,UPDATE,DELETE.

mongodb automatically genertes id.

practise mongosh commands with claude.
insertone vs insertmany