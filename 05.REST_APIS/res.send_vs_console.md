# `res.send()` vs `console.log()`

They look similar but serve completely different purposes.

---

## Core Difference

| | `console.log()` | `res.send()` |
|---|---|---|
| **Who sees it** | Developer (terminal) | Client (browser/Postman) |
| **Purpose** | Debugging | Sending HTTP response |
| **Affects request?** | ❌ No | ✅ Yes, ends the request |

---

## Visual Explanation

```
CLIENT (Browser)                    SERVER (Node.js)
     │                                    │
     │──── GET /user ─────────────────────▶│
     │                                    │  console.log("hit!") → terminal only
     │                                    │  res.send("Hello")   → sends back to client
     │◀─── "Hello" ───────────────────────│
```

---

## Code Example

```javascript
app.get("/user", (req, res) => {
  console.log("Request received!");  // ✅ Visible in terminal
                                     // ❌ Client sees nothing from this

  res.send("Hello, Ronit!");         // ✅ Client receives this
                                     // ❌ Nothing printed in terminal
});
```

**Terminal shows:**
```
Request received!
```
**Browser shows:**
```
Hello, Ronit!
```

---

## `res.send()` ends the request

```javascript
app.get("/", (req, res) => {
  res.send("First response");
  res.send("Second response"); // ❌ Error! Can't send twice
});
```

`console.log()` has no such restriction — call it as many times as you want.

---

## Common Variations of `res`

```javascript
res.send("Hello")                    // Plain text or HTML
res.json({ name: "Ronit" })          // JSON response (sets Content-Type automatically)
res.status(404).send("Not found")    // With status code
res.sendFile("/path/to/file.html")   // Send a file
```

---

## When to use each

```javascript
app.post("/login", (req, res) => {
  console.log("Login attempt:", req.body.email); // 🔍 Debug log (you see this)

  if (!req.body.email) {
    console.log("Missing email");                        // 🔍 Debug
    return res.status(400).send("Email required");       // 📤 Client sees this
  }

  res.json({ message: "Login successful" });             // 📤 Client sees this
});
```

---

## Summary

> Think of `console.log()` as your **notebook** and `res.send()` as your **reply to the client**.