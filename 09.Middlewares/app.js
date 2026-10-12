const express = require('express');
const app = express();

app.use('/',(req,res,next)=>{
  // const {query} = req.query;
  // console.log(query);
  console.log("Hi,This is 1st middleware");
  // res.send("Middleware finished");
  next();
  // this will also work but not a good practise
  console.log("This is after next");
})
app.use('/',(req,res,next)=>{
  console.log("Hi,This is 2nd middleware");
  next();
})

app.get('/',(req,res)=>{
  res.send("Hi,This is home page.")
})
app.get('/random',(req,res)=>{
  res.send("Hi,This is random page.")
})


app.listen(8080,()=>{
  console.log("Server is running on port 8080");
})