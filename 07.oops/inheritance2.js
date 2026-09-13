class Mammal{  //  parent
  constructor(name){
    this.name = name;
    this.type = "warm-blooded";
  }
  eat(){
    console.log("I am eating");
  }
}
class Dog extends Mammal{ // child
  constructor(name){
    super(name);
  }
  bark(){
    console.log("Wofff Wofff");
  }
}
class cat extends Mammal{ // child
  constructor(name){
    super(name);
  }
  Meow(){
    console.log("Meow Meow");
  }
}

let d1 = new Dog("Tommy");
console.log(d1.name,d1.type);
d1.bark();
d1.eat();

let c1 = new cat("Pussy");
console.log(c1.name,c1.type);
c1.Meow();
c1.eat();