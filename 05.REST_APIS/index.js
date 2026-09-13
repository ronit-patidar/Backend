const express = require('express');
const app = express();
const port = 3000;
// Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.

// ctrl + c -> to stop  the server.
// we need to do it explicitly ctrl + c.


// Routes
app.get("/",(req,res)=>{
  res.send("This is my server")
})
app.get("/help",(req,res)=>{
  res.send("You contacted help path")
})
app.get("/contact",(req,res)=>{
  res.send("You contacted contact path")
})
app.get("/feedback",(req,res)=>{
  res.send("You contacted feedback path")
})



// query strings
URL: http://localhost:3000/search?name=ronit&age=21
app.get("/search", (req, res) => {
  console.log(req.query);        // { name: 'ronit', age: '21' }
  console.log(req.query.name);   // 'ronit'
  console.log(req.query.age);    // '21'
//  ⚠️ All query values are strings by default — convert if needed:
  res.json(req.query);
});

// path parameters
app.get("/:username",(req,res)=>{
  res.send(req.params.username);
  res.send(`Hello, I am ${req.params.username}`);
})




app.get("/:username/:id",(req,res)=>{
  let {username,id} = req.params;
  res.send(`Welcome to the page of @${username}`);
})






app.post("/",(req,res)=>{
  res.send("You sent a post request");
})



// listen/handle all requests 
app.use((req,res)=>{
  console.log("Request Received");
  // we can send one response only for one path.
  res.send({
    name : "Ronit Patidar",
    age : "21", 
    canCode : true,
    knownLang : ["c++","js","c"]
  });
})



app.listen(port,()=>{
  console.log(`Example app listing on port ${port}`);
})


