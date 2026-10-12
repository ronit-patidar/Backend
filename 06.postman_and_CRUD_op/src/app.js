// server ko create karna
const express = require("express");

const app = express();

// middleware
app.use(express.json());

// notes functionality
const notes = [];

// create note
app.post("/notes", (req, res) => {
    notes.push(req.body);

    res.status(201).json({
        message: "note created successfully"
    });
});

// display note data
app.get("/notes", (req, res) => {
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    });
});

// delete note
app.delete("/notes/:index", (req, res) => {
    const index = Number(req.params.index);

    if (!notes[index]) {
        return res.status(404).json({
            message: "note not found"
        });
    }

    notes.splice(index, 1);

    res.status(200).json({
        message: "note deleted successfully"
    });
});

// update note
app.patch("/notes/:index", (req, res) => {
    const index = Number(req.params.index);

    if (!notes[index]) {
        return res.status(404).json({
            message: "note not found"
        });
    }

    notes[index].description = req.body.description;

    res.status(200).json({
        message: "note updated successfully",
        note: notes[index]
    });
});

module.exports = app;