// class is like a template for creating objects.

// The constructor method is a special method of class for creating and initializing an object instance of that class.

// In your code, this refers to the current object whose method or constructor is being executed.

class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  talk(){
    console.log(`Hi,my name is ${this.name}`);
  }
}

let p1 = new Person("Ronit",21);
// JavaScript creates a new object for p1.
// Inside the constructor:
// Here, this refers to p1.
// essentially becomes:
// p1.name = "Ronit";
// p1.age = 21;


let p2 = new Person("Keshav",19);


