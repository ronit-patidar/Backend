class Person{
  constructor(name,age){
    console.log("person class constructor");
    this.name=name;
    this.age=age;
  }
  talk(){
    console.log(`Hi,I am ${this.name}`);
  }
}
// inheritance 
class Student extends Person{
  constructor(name,age,marks){
    console.log("student class constructor");
    super(name,age); //  parent class constructor is being called
    this.marks = marks;
  }
}
// inheritance 
class Teacher extends Person{
  constructor(name,age,subject){
    console.log("teacher class constructor");
    super(name,age); // parent class constructor is being called
    this.subject = subject;
  }
}
let stu1 = new Student ("adam",25,95);
console.log(stu1.name,stu1.age,stu1.marks);
stu1.talk()

let tea1 = new Teacher ("Neil",42,"Maths");
console.log(tea1.name,tea1.age,tea1.subject);
tea1.talk()
