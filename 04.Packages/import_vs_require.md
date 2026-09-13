# Require vs Import in JavaScript

## 1. `require` (CommonJS)

* Used in **Node.js (older module system)**
* Loads modules **synchronously**
* Can be used **anywhere in the code**

### Syntax:

```js
const fs = require('fs');
```

### Key Points:

* Works in **CommonJS**
* Blocking (sync loading)
* Dynamic loading allowed
* Mostly used in **backend (Node.js)**

---

## 2. `import` (ES Modules)

* Used in **modern JavaScript (ES6+)**
* Loads modules **asynchronously**
* Must be used **at the top level**

### Syntax:

```js
import fs from 'fs';
```

### Key Points:

* Works in **ES Modules**
* Non-blocking (async loading)
* Static structure (better optimization)
* Used in **frontend + modern backend**

---

## 3. Differences

| Feature         | require           | import                   |
| --------------- | ----------------- | ------------------------ |
| Module System   | CommonJS          | ES Modules               |
| Loading         | Synchronous       | Asynchronous             |
| Usage Location  | Anywhere in code  | Top-level only           |
| Flexibility     | Dynamic           | Static                   |
| Performance     | Slower (blocking) | Faster (optimized)       |
| Default in Node | Yes (older)       | Yes (modern with config) |

---

## 4. Example Comparison

### Using `require`

```js
const math = require('./math');
console.log(math.add(2, 3));
```

### Using `import`

```js
import { add } from './math.js';
console.log(add(2, 3));
```

---

## 5. When to Use What?

* Use **`require`**:

  * In older Node.js projects
  * When working with CommonJS modules

* Use **`import`**:

  * In modern JavaScript projects
  * React, frontend, ES6+ environments
  * New backend projects

---

## 6. Important Note

To use `import` in Node.js:

* Add this in `package.json`:

```json
{
  "type": "module"
}
```

---

## 7. Conclusion

* `require` = Old, synchronous, Node.js
* `import` = Modern, async, optimized

👉 Prefer **`import`** for new projects.
Either use require or import in project but choose one .
We cant selectively load only the pieces we need with require but import , we can selectively load only the pieces we need, which can save memory.
