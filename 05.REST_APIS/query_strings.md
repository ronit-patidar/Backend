# Query Strings

A **query string** is extra data appended to a URL after a `?` to send information to the server.

---

## Anatomy of a URL

```
http://localhost:3000/search?name=ronit&age=21&city=mumbai
                            │    │           │        │
                            │    └── key=value pairs  │
                            │                         │
                            └── starts query string   └── separated by &
```

| Part | Value |
|---|---|
| Base URL | `http://localhost:3000/search` |
| `?` | Marks start of query string |
| `name` | Key |
| `ronit` | Value |
| `&` | Separator between pairs |

---

## Accessing Query Strings in Express

Use `req.query` — Express parses it automatically into an object.

```javascript
// URL: http://localhost:3000/search?name=ronit&age=21
app.get("/search", (req, res) => {
  console.log(req.query);        // { name: 'ronit', age: '21' }
  console.log(req.query.name);   // 'ronit'
  console.log(req.query.age);    // '21'

  res.json(req.query);
});
```

> ⚠️ All query values are **strings** by default — convert if needed:
> ```javascript
> const age = Number(req.query.age); // '21' → 21
> ```

---

## Real World Examples

**Search:**
```javascript
// URL: /products?search=laptop&category=electronics
app.get("/products", (req, res) => {
  const { search, category } = req.query;

  res.json({
    message: `Searching for ${search} in ${category}`
  });
});
```

**Pagination:**
```javascript
// URL: /users?page=2&limit=10
app.get("/users", (req, res) => {
  const page  = Number(req.query.page)  || 1;
  const limit = Number(req.query.limit) || 10;

  res.json({ page, limit });
});
```

**Filtering & Sorting:**
```javascript
// URL: /products?sort=price&order=asc&minPrice=100
app.get("/products", (req, res) => {
  const { sort, order, minPrice } = req.query;

  res.json({ sort, order, minPrice });
});
```

---

## Query String vs Route Params

```javascript
// Route Params → for identifying a resource
app.get("/users/:id", (req, res) => {
  console.log(req.params.id); // /users/42 → '42'
});

// Query Strings → for filtering, sorting, searching
app.get("/users", (req, res) => {
  console.log(req.query); // /users?role=admin → { role: 'admin' }
});
```

| | Route Params | Query Strings |
|---|---|---|
| **Syntax** | `/users/:id` | `/users?id=42` |
| **Access** | `req.params` | `req.query` |
| **Required?** | ✅ Usually yes | ❌ Usually optional |
| **Best for** | Identifying resources | Filtering / searching |

---

## Handling Missing Query Params

```javascript
// URL: /search?name=ronit  (age is missing)
app.get("/search", (req, res) => {
  const name = req.query.name || "Guest";
  const age  = req.query.age  || "Not provided";

  res.json({ name, age });
});

// Response: { name: 'ronit', age: 'Not provided' }
```

---

## Multiple Values for Same Key

```javascript
// URL: /filter?color=red&color=blue&color=green
app.get("/filter", (req, res) => {
  console.log(req.query.color); // [ 'red', 'blue', 'green' ]
  res.json(req.query);
});
```

---

## Summary

> Query strings are **read-only** — they're sent by the client and cannot be changed by the server.