What is Passport.js in Node.js?
Passport.js is an authentication middleware for Node.js and Express.js applications.

It helps you implement user authentication, such as:
- Registering and logging in users.
- Authenticating users using email and password.
- Login with Google, GitHub, Facebook, etc.
- Maintaining user sessions.
- Protecting private routes.
- Logging users out.

Passport.js verifies who the user is and helps your application manage authentication.

Concept	Meaning
Passport	Authentication middleware
Strategy	Method used to authenticate users
Local Strategy	Email/username and password authentication
Google Strategy	Google login
GitHub Strategy	GitHub login
Session	Maintains login state across requests
Serialize	Stores user identification in session
Deserialize	Retrieves user using stored identification
Middleware	Runs before your route handler

Let's build a small Login & Registration System using:
- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js
- Passport Local
- Express Session
- Bcrypt
We'll implement:
1. User registration.
2. User login.
3. Password hashing.
4. Passport authentication.
5. Protected dashboard.
6. Logout.