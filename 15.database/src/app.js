// server created

const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

app.use(express.json());

/*
POST /notes       => create a note
GET /notes        => get all notes
DELETE /notes/:id => delete a note
PATCH /notes/:id  => update a note
*/

// Create a note
app.post("/notes", async (req, res) => {
  const data = req.body;

  const note = await noteModel.create({
    title: data.title,
    description: data.description
  });

  res.status(201).json({
    message: "Note created",
    note
  });
});


// Get all notes
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "Notes fetched successfully",
    notes
  });
});


// Delete a note
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  const note = await noteModel.findByIdAndDelete(id);

  if (!note) {
    return res.status(404).json({
      message: "Note not found"
    });
  }

  res.status(200).json({
    message: "Note deleted successfully"
  });
});


// Update a note
app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;

  const data = req.body;

  const note = await noteModel.findByIdAndUpdate(
    id,
    {
      title: data.title,
      description: data.description
    },
    {
      new: true
    }
  );

  if (!note) {
    return res.status(404).json({
      message: "Note not found"
    });
  }

  res.status(200).json({
    message: "Note updated successfully",
    note
  });
});


module.exports = app; 