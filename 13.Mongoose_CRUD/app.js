require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const userModel = require('./Models/userSchema');
const connectDb = require('./database/db');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.post('/register', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const user = await userModel.create({ name, email, age });
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.post('/register-bulk', async (req, res) => {
  try {
    const users = await userModel.insertMany([
      { name: "d", email: "test3@email.com", age: 1 },
      { name: "e", email: "test4@email.com", age: 2 },
      { name: "f", email: "test5@email.com", age: 3 },
    ]);
    res.status(201).send(users);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.get('/getUsers',async(req,res)=>{
  try{
    const users = await userModel.find({age:{$lte : 5}});
    res.status(201).send(users);
  }catch(err){
    res.status(400).send({ error:err.message });
  }
})

app.get('/getUsers/:id',async(req,res)=>{
  try{
    const {id} = req.params;
    const user = await userModel.findById(id);
    res.status(201).send(user);
  }catch(err){
    res.status(400).send({ error:err.message });
  }
})

app.get('/update', async (req, res) => {
  const updatedUser = await userModel.findOneAndUpdate(
    { email: 'test@email.com' },
    { $set: { age: 23 } },
    { returnDocument: 'after' }
  );
  console.log(updatedUser);
  res.send("Good Evening");
})
app.get('/update/minor', async (req, res) => {
  await userModel.updateMany({ age: { $lt: 18 } }, { $set: { minor: true } });
  res.send("Good Evening");
})
app.get('/update/:id',async (req,res)=>{
  const {id} = req.params;
  const user = await userModel.findById(id);
  const updatedUser = await userModel.findByIdAndUpdate(id,
    {age : 72},
    { new: true},
  );
  console.log(user);
  console.log(updatedUser);
  res.send("Good Evening");
})