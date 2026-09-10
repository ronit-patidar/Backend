const express = require("express");
const app = express();
const port = 3000;
// middelware 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/register",(req,res)=>{
  let {user,password} = req.query;
  res.send(`Standard GET request.Welcome ${user}!`);
})

app.post("/register",(req,res)=>{
  let {user,password} = req.body;
  res.send(`Standard POST request.Welcome ${user}!`);
})

app.listen(port,(req,res)=>{
  console.log(`listening on port ${port}`);
})