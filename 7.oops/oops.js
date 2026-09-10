let arr=[1,2,3];
arr.push(4);
arr.forEach(element => {
  console.log(element);
});
arr.__proto__.push = (n)=> {console.log("Pushing a number :",n)};
arr.push(5);