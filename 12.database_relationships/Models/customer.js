// One to Many

import mongoose from 'mongoose';

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});

const customerSchema = new mongoose.Schema({
  name : String,
  orders : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Order"
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


const addCustomer = async () => {
  let cust1 = new Customer({
    name : "Rahul kumar",
  })
  let order1 = await Order.findOne({item:"chips"});
  let order2 = await Order.findOne({item:"chocolate"});
  cust1.orders.push(order1);
  cust1.orders.push(order2);
  let result = await cust1.save();
  console.log(result);
}
addCustomer();














// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "samosa", price: 15 },
//     { item: "chips", price: 10 },
//     { item: "chocolate", price: 20 },
//   ]);

//   console.log(res);
// };

// addOrders();