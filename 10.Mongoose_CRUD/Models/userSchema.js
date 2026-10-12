const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  age:{
    type:Number,
    min:0,
  },
},{ timestamps : true });
const userModel = mongoose.model('user',userSchema);
module.exports = userModel;
