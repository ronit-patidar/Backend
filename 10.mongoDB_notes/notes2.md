# MongoDB: Documents vs Collections

## 1. Document

MongoDB stores data in the form of documents, rather than rows like SQL databases.

A document looks similar to JSON:

```json
{
  "title": "Mountain House",
  "price": 5000,
  "location": "Manali"
}
```

However, MongoDB stores documents internally in BSON format.

### JSON vs BSON

- **JSON** → the format we commonly use to represent and work with the data.
- **BSON** → Binary JSON; MongoDB's internal storage format.
- BSON also supports additional data types such as `ObjectId`, `Date`, etc.

So you can think of it as:

```
JavaScript / JSON-like data
          ↓
       MongoDB
          ↓
   BSON internally
```

> **Important:** It is better to say "MongoDB stores documents internally in BSON" rather than "MongoDB first stores JSON and then converts it to BSON."

## 2. Collection

A collection is a group of MongoDB documents.

For example:

```
listings collection
│
├── document 1
│   { title: "Mountain House", price: 5000 }
│
├── document 2
│   { title: "Beach Villa", price: 8000 }
│
└── document 3
    { title: "City Apartment", price: 3000 }
```

So:

**Collection → contains Documents**

## 3. MongoDB vs SQL

| MongoDB    | SQL     |
|------------|---------|
| Database   | Database|
| Collection | Table   |
| Document   | Row     |
| Field      | Column  |

## 4. MongoDB Hierarchy

Remember this structure:

```
Database
   ↓
Collection
   ↓
Documents
   ↓
Fields
```

For example, in the StayEase project:

```
StayEase database
      ↓
listings collection
      ↓
{ title: "Mountain House", price: 5000 }
{ title: "Beach Villa", price: 8000 }
{ title: "City Apartment", price: 3000 }
```

## Quick Summary

- Database → contains collections.
- Collection → contains documents.
- Document → contains fields and values.
- MongoDB stores documents internally in BSON.
- MongoDB documents are JSON-like, but their actual storage format is BSON.