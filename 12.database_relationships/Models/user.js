import mongoose from "mongoose";

main()
  .then(()=>console.log("connection successful"))
  .catch((err)=>console.log(err));

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
// one to few
const userSchema = new mongoose.Schema({
  username : String,
  addresses : [
    {
      _id : false,
      location : String,
      city : String,
    },
  ]
});
const User = await mongoose.model("user",userSchema);

const addUsers = async() => {
  let user1 = new User({
    username : "shelockholmes",
    addresses : [{
      location : "221B Baker Street",
      city : "london"
    }]
  });
  user1.addresses.push({location:"P32 WallStreet",city:"London"})
  let result = await user1.save();
  console.log(result);
}
addUsers();