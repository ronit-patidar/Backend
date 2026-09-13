# Library vs Framework in Web Development

## 📌 Introduction

In web development, both **libraries** and **frameworks** help developers write code faster and more efficiently. However, they differ mainly in **control and structure**.

---

## 🔹 What is a Library?

A **library** is a collection of pre-written code that you can use whenever needed.

### ✅ Characteristics:

* You are in control of the application flow
* You call the library functions
* Focused on specific tasks

### 💡 Examples:

* Lodash (JavaScript)
* jQuery
* Axios

### 🧠 Example:

```js
import _ from 'lodash';

const arr = [3, 1, 2];
const sorted = _.sortBy(arr); // You call the function
```

---

## 🔹 What is a Framework?

A **framework** provides a structure for building applications and controls the flow of the program.

### ✅ Characteristics:

* Framework controls the flow
* It calls your code when needed
* Provides architecture and rules

### 💡 Examples:

* NextJs
* Angular
* Express.js
* Django

### 🧠 Example:

```js
app.get('/', (req, res) => {
    res.send("Hello World");
});
```

Here, the framework decides when to execute your function.

---

## 🔥 Key Difference: Inversion of Control (IoC)

* **Library** → You control when to call functions
* **Framework** → It controls when your code runs

---

## 📊 Comparison Table

| Feature        | Library 🧰             | Framework 🏗️              |
| -------------- | ---------------------- | -------------------------- |
| Control        | Developer              | Framework                  |
| Flow           | You call it            | It calls you               |
| Flexibility    | High                   | Structured                 |
| Usage          | Specific functionality | Full application structure |
| Learning Curve | Easier                 | Slightly harder            |

---

## 🚀 Real-world Analogy

* **Library** → Like using a tool (you decide when to use it)
* **Framework** → Like following a blueprint (you follow its rules)

---

## 🧠 Conclusion

> **Library = You call the code**
> **Framework = Code calls you**

Both are important in web development, and often used together.

---
