function personmaker(name,age){
  const person = {
    name:name,
    age:age,
    talk(){
      console.log(`Hi,My name is ${name}`);
    }
  }
  return person;
}
// personmaker is a factory function

let p1 = personmaker("Ronit",21);
console.log(p1);
console.log(p1.talk()); // copy is created
let p2 = personmaker("Keshav",19);
console.log(p2);
console.log(p2.talk()); // copy is created

console.log(p1.talk === p2.talk);

// | Feature      | Factory Function | Class       |
// | ------------ | ---------------- | ----------- |
// | Inheritance  | ❌ Limited        | ✅ Yes       |
// | Memory usage | ❌ Higher         | ✅ Efficient |
// | instanceof   | ❌ No             | ✅ Yes       |
// | Simplicity   | ✅ Easy           | ⚠️ Moderate |
