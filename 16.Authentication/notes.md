4 steps
Validation
Verification
Authentication(session based , we are using token based using express)
Authorization

npm i express mongoose dotenv

npm i jsonwebtoken 
npm i bcryptjs  // study
types of storage in browser
what is cookies storage 
tokens ko cookies me store karte hai 
express me token ko cookies me store karne ke liye
 npm i cookie-parser

 Authentication and Authorization
Authentication is the process of verifying who someone is
signup,login
Authorization is the process of verifying what specific applications,files, and data a user has access to 

Storing password
We never store the password as it is.We store their hashed form.
password -> hashing fn -> unreadable string

What we need to know?
For every input,there is a fixed output.
They are one-way functions,we cant get input from output.
For a different inputs,there is a different output but of same length
small changes in input should bring large changes in output
bcrypt and jwt

Salting 
Password salting is a technique to protect passwords stored in databases by adding a string of 32 or more charactors and then hasing them.

Passport middleware
Passport is a library which helps us for authentication.
npm i passport
npm i passport-local
npm i passport-local-mongoose

passport.initialize()
A middleware that initialize passport.
passport.session()
A web application needs the ability to identify users as they browse from page to page.This series of requests and responses,each associated with the same user,is known as a session.
passport.use(new LocalStrategy(User.authenticate()))
