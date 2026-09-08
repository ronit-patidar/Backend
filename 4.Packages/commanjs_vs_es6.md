# CommonJS vs Modern JS (ES Modules)

These are two different **module systems** — ways to split your code into separate files and share code between them.

---

## CommonJS (CJS)

The **older** system, built into Node.js from the beginning.

```js
// Exporting
const add = (a, b) => a + b;
module.exports = add;

// or export multiple things
module.exports = { add, subtract };

// Importing
const add = require('./math');
const { add, subtract } = require('./math');
```

- Uses `require()` and `module.exports`
- Loads modules **synchronously** (one by one, blocking)
- Works in **Node.js by default**
- Does **not** work in browsers natively

---

## Modern JS — ES Modules (ESM)

The **official JavaScript standard**, introduced in ES6 (2015).

```js
// Exporting
export const add = (a, b) => a + b;

// Default export
export default function greet() { ... }

// Importing
import { add } from './math.js';
import greet from './math.js';
```

- Uses `import` and `export`
- Loads modules **asynchronously**
- Works in **browsers natively**
- Works in Node.js with `.mjs` extension or `"type": "module"` in `package.json`

---

## Side by Side Comparison

| Feature | CommonJS | ES Modules |
|---|---|---|
| Syntax | `require / module.exports` | `import / export` |
| Default in | Node.js | Browsers |
| Loading | Synchronous | Asynchronous |
| File extension | `.js` | `.mjs` or `.js` (with config) |
| Tree shaking | ❌ No | ✅ Yes |
| Top-level await | ❌ No | ✅ Yes |

---

## How to Enable ESM in Node.js

**Option 1** — Add to your `package.json`:
```json
{
  "type": "module"
}
```

**Option 2** — Use `.mjs` file extension:
```
math.mjs
index.mjs
```

---

## Which One to Use?

| Situation | Use |
|---|---|
| Older Node.js backend / existing project | CommonJS |
| New Node.js project | ES Modules |
| React / Vite / Frontend | ES Modules (always) |
| Express.js | Either works, CommonJS is still common |

---

## Real World — MERN Stack

In your MERN projects:

```js
// React (Frontend) — always ESM
import React from 'react';
import axios from 'axios';

// Express (Backend) — CommonJS by default
const express = require('express');
const mongoose = require('mongoose');
```

You'll often see **both** in the same project — frontend uses ESM, backend uses CommonJS. That's completely normal! ✅