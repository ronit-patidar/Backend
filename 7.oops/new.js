// constructors -> does not return anything and starts with capital letter.
function Person(name,age){
  this.name = name;
  this.age = age;
}
// if i create a new instance then the function can access this function.
Person.prototype.talk = function(){
  console.log(`Hi,my name is ${this.name}`);
};
// if i define a function in Person then it refer to same function not copy like factory function
let p1 = new Person("Ronit",21);
let p2 = new Person("Keshav",19);
console.log(p1.talk === p2.talk);