# Path Parameters / Route Params

---

## Basic Example

```javascript
app.get("/:username", (req, res) => {
  console.log(req.params);       // { username: 'whatever_was_in_url' }
  res.send("Hello, I am ronit");
});
```

**When you visit:**
| URL | `req.params` |
|---|---|
| `http://localhost:3000/ronit` | `{ username: 'ronit' }` |
| `http://localhost:3000/john` | `{ username: 'john' }` |
| `http://localhost:3000/alice` | `{ username: 'alice' }` |

---

## Use the Param in the Response

Right now the response is hardcoded — you can make it dynamic:

```javascript
app.get("/:username", (req, res) => {
  const { username } = req.params;
  res.send(`Hello, I am ${username}`); // Uses whoever is in the URL
});
```

**Now:**
- `/ronit` → `Hello, I am ronit`
- `/john` → `Hello, I am john`

---

## Multiple Params

```javascript
app.get("/:username/posts/:postId", (req, res) => {
  console.log(req.params); // { username: 'ronit', postId: '42' }

  const { username, postId } = req.params;
  res.send(`${username}'s post #${postId}`);
});
```

**URL:** `/ronit/posts/42` → `ronit's post #42`

---

## ⚠️ Order of Routes Matters

```javascript
app.get("/profile", (req, res) => {   // ✅ Define specific routes first
  res.send("My Profile");
});

app.get("/:username", (req, res) => { // ✅ Dynamic route after
  res.send(`User: ${req.params.username}`);
});
```

> If `/:username` is defined first, `/profile` would be treated as a username instead of hitting the profile route.

---

## Summary

| | Route Params | Query Strings |
|---|---|---|
| **Syntax** | `/users/:id` | `/users?id=42` |
| **Access** | `req.params` | `req.query` |
| **Required?** | ✅ Usually yes | ❌ Usually optional |
| **Best for** | Identifying resources | Filtering / searching |