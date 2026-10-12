const express = require("express");
const app = express();
app.use(express.json());

const validationRules = require('./middleware/validation.middleware');

app.get("/",(req,res)=>{
  res.status(200).json({message:"Hello,World"});
})

app.post("/register", validationRules.registerUserValidationRules,(req,res)=>{
  const {username,email,password} = req.body;
  // dummy user
  res.status(201).json({message:"User registered Successfully",user:{
    username,email
  }});
})

module.exports = app;