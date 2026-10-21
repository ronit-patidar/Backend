const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "mySecretKey123",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60
    }
  })
);
app.get("/set-session", (req, res) => {
  req.session.username = "Ronit";
  req.session.role = "student";

  res.send("Session data saved!");
});

app.get("/get-session", (req, res) => {
  res.json({
    username: req.session.username,
    role: req.session.role
  });
});

app.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.clearCookie("connect.sid");
    res.send("Logged out successfully!");
  });
});

app.listen(3000,()=>{
  console.log("Server is running on port 3000");
})
// Express Session	JWT
// Server session data maintain karta hai	Token mein claims encoded hote hain
// Session ID aam taur par cookie mein hoti hai	JWT cookie ya Authorization header mein bheja ja sakta hai
// Server-side session ko destroy karke logout handle kar sakte hain	JWT logout ke liye additional strategy ki zarurat ho sakti hai
// Server ko session store chahiye	JWT verification ke liye valid signature aur claims check karte hain