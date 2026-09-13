https://expressjs.com/en/starter/basic-routing.html

app.listen() callback does not receive req,res .
its just a plain callback with no parameters.

req and res only exist inside route handlers, not in the listen callback:
get,post,patch,delete

Quick bug here — `app.listen()` callback doesn't receive `req, res`. It's just a plain callback with no parameters:

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

`req` and `res` only exist inside **route handlers**, not in the listen callback:

```javascript
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

**How each part works:**

| Part | Purpose |
|---|---|
| `app.listen(port, cb)` | Starts the server; `cb` fires once when ready |
| `app.get(path, cb)` | Handles GET requests; `cb` gets `req, res` |
| `req` | Incoming request (headers, body, params...) |
| `res` | Outgoing response (send, json, status...) |

app.listen()
It tells Express to start an HTTP server and begin listening for incoming requests on a specified port.