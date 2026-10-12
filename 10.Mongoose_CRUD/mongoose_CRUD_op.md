# Mongoose CRUD Operations Reference

A quick reference for the most commonly used Mongoose methods, grouped by operation type.

## Setup

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: Number,
});

const User = mongoose.model('User', userSchema);
```

---

## Create

### `Model.create()`
Creates and saves one or more documents in one step.

```js
const user = await User.create({ name: 'Ronit', email: 'ronit@example.com', age: 22 });

// Multiple documents
const users = await User.create([
  { name: 'A', email: 'a@example.com' },
  { name: 'B', email: 'b@example.com' },
]);
```

### `new Model() + .save()`
Instantiate, optionally modify, then persist.

```js
const user = new User({ name: 'Ronit', email: 'ronit@example.com' });
await user.save();
```

### `Model.insertMany()`
Bulk-inserts an array of documents; faster than looping `.save()`.

```js
await User.insertMany([
  { name: 'C', email: 'c@example.com' },
  { name: 'D', email: 'd@example.com' },
]);
```

---

## Read

### `Model.find()`
Returns an array of all matching documents (empty array if none match).

```js
const allUsers = await User.find();
const adults = await User.find({ age: { $gte: 18 } });

// With projection (select fields)
const namesOnly = await User.find({}, 'name email');

// With options: sort, limit, skip
const recent = await User.find().sort({ createdAt: -1 }).limit(10).skip(0);
```

### `Model.findOne()`
Returns the first matching document or `null`.

```js
const user = await User.findOne({ email: 'ronit@example.com' });
```

### `Model.findById()`
Shortcut for finding by `_id`.

```js
const user = await User.findById('64f1a2b3c4d5e6f7a8b9c0d1');
```

---

## Update

### `Model.findByIdAndUpdate()`
Finds by `_id` and updates it. Use `{ new: true }` to return the updated doc.

```js
const updatedUser = await User.findByIdAndUpdate(
  id,
  { age: 23 },
  { new: true, runValidators: true }
);
```

### `Model.findOneAndUpdate()`
Same as above but matches by any filter, not just `_id`.

```js
const updatedUser = await User.findOneAndUpdate(
  { email: 'ronit@example.com' },
  { $set: { age: 23 } },
  { new: true }
);
```

### `Model.updateOne()`
Updates the first matching document; returns a result object (not the document).

```js
const result = await User.updateOne({ email: 'ronit@example.com' }, { $set: { age: 24 } });
// result: { acknowledged, matchedCount, modifiedCount }
```

### `Model.updateMany()`
Updates all matching documents.

```js
await User.updateMany({ age: { $lt: 18 } }, { $set: { minor: true } });
```

### Instance method: `document.save()` (after mutation)

```js
const user = await User.findById(id);
user.age = 25;
await user.save(); // triggers validators & middleware
```

---

## Delete

### `Model.findByIdAndDelete()`
Finds by `_id` and removes it; returns the deleted document.

```js
const deletedUser = await User.findByIdAndDelete(id);
```

### `Model.findOneAndDelete()`
Same idea, matches by any filter.

```js
const deletedUser = await User.findOneAndDelete({ email: 'ronit@example.com' });
```

### `Model.deleteOne()`
Deletes the first matching document; returns a result object.

```js
const result = await User.deleteOne({ email: 'ronit@example.com' });
// result: { acknowledged, deletedCount }
```

### `Model.deleteMany()`
Deletes all matching documents.

```js
await User.deleteMany({ age: { $lt: 18 } });
```

---

## Counting & Existence

```js
const count = await User.countDocuments({ age: { $gte: 18 } });
const exists = await User.exists({ email: 'ronit@example.com' }); // returns { _id } or null
```

---

## Quick Reference Table

| Operation | Single Document | Multiple Documents |
|---|---|---|
| Create | `create()`, `new Model().save()` | `create([...])`, `insertMany()` |
| Read | `findOne()`, `findById()` | `find()` |
| Update | `findByIdAndUpdate()`, `findOneAndUpdate()`, `updateOne()` | `updateMany()` |
| Delete | `findByIdAndDelete()`, `findOneAndDelete()`, `deleteOne()` | `deleteMany()` |

---

## Notes & Gotchas

- `findByIdAndUpdate()` / `findOneAndUpdate()` skip document middleware (`pre('save')`) by default — use `document.save()` if you rely on that.
- Always pass `{ new: true }` if you want the **updated** document returned instead of the original.
- Pass `{ runValidators: true }` on update methods to enforce schema validation (it's off by default for updates).
- `updateOne()` / `updateMany()` / `deleteOne()` / `deleteMany()` return a **result summary**, not the document(s) themselves.
- Wrap all CRUD calls in `try/catch` (or use async error-handling middleware in Express) since they return Promises and can reject (e.g., validation errors, cast errors on bad `_id`).