const express = require("express");
const path = require("path");   // ✅ import path

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");   // ✅ no .ejs
});

// app.get("/ig/:username",(req,res)=>{
//   let {username} = req.params;
//   const instaData = require("./data.json")
//   const data = instaData[username];
//   if(data) res.render("instagram.ejs",{data});
//   else res.render("error.ejs")
// })


// app.get("/ig/:username",(req,res)=>{
//   let {username} = req.params;
//   console.log(username);
//   res.render("instagram.ejs",{username});
// })

// app.get("/followers",(req,res)=>{
//   const followers = ["A","B","C","D","E"];
//   res.render("followers.ejs",{followers});
// })


app.get("/rolldice", (req, res) => {
  let diceval = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs",{diceval})
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});