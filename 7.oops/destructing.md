# Destructuring `req.params`

## `const { username } = req.params`

This is **destructuring** — a JavaScript shorthand to extract values from an object.

---

## Without Destructuring vs With Destructuring

```javascript
// ❌ Without destructuring (long way)
const username = req.params.username;

// ✅ With destructuring (shorthand)
const { username } = req.params;
```

Both do the **exact same thing** — destructuring is just cleaner.

---

## How it works step by step

```javascript
app.get("/:username", (req, res) => {

  // Step 1: User visits /ronit
  // Step 2: Express fills req.params automatically
  console.log(req.params); // { username: 'ronit' }

  // Step 3: Destructure — pull 'username' out of req.params
  const { username } = req.params; // username = 'ronit'

  // Step 4: Use it in response
  res.send(`Hello, I am ${username}`); // Hello, I am ronit
});
```

---

## Destructuring Multiple Params

```javascript
app.get("/:username/posts/:postId", (req, res) => {
  console.log(req.params); // { username: 'ronit', postId: '42' }

  // Pull out multiple values at once
  const { username, postId } = req.params;

  res.send(`${username}'s post #${postId}`); // ronit's post #42
});
```

---

## Destructuring in Plain JavaScript

```javascript
const person = { name: "Ronit", age: 21, city: "Mumbai" };

// Without destructuring
const name = person.name;
const age  = person.age;

// With destructuring ✅
const { name, age } = person;

console.log(name); // Ronit
console.log(age);  // 21
```

> The variable name inside `{ }` must **match the key name** in the object exactly.