const express = require('express');
const app = express();

// logger
app.use((req,res,next)=>{
  // adding new property in req object
  req.time = new Date(Date.now()).toString();
  console.log(req.method,req.hostname,req.path,req.time);
  return next();
})
app.get('/',(req,res)=>{
  res.send("Hi,This is home page.")
})
app.get('/random',(req,res)=>{
  res.send("Hi,This is random page.")
})

// middleware as a function
const checkToken = (req,res,next)=>{
  let {token} = req.query;
  if(token === "giveaccess") return next();
  // error handling
  else throw new Error("Access Denied!");
}

// we can also pass middleware as a function
app.get('/api',checkToken,(req,res) => {
  res.send("data");
})

app.listen(8080,()=>{
  console.log("Server is running on port 8080");
})