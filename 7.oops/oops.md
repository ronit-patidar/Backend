# Object Prototypes

Prototypes are the mechanism by which Javascript objects inherit features from one another.
It is like a single template object that all objects inherits methods and properties from without having thier own copy.

Every object in javascript has a built-in property , which is called its prototypes.The prototype is itself an object , so the prototype will have its own prototype,making whats called a prototype chain. The chaain ends when we reach a prototype that has null for its own prototype.

```js
arr.__proto__(reference)
```

suppose if i have to arr.push defination

ex :
```js
let arr=[1,2,3];
arr.push(4);
arr.forEach(element => {
  console.log(element);
});
arr.__proto__.push = (n)=> {console.log("Pushing a number :",n)};
arr.push(5);
```

// to access actual object

Factory function is a function used to create objects.

## Inheritance

Inheritance is a mechanism that allows us to create new classes on the basis of already existing class.

parent class(base class) -> child class (that inherit properties)