import express from "express";
import {getAllNotes, getOneNote, createNote, updateNote, deleteNote} from "../controllers/notesController.js";
const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getOneNote);
router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;

/*app.get("/api/notes", (req,res)=>{
res.status().send("You got 5 notes");
});

app.get("/api/nothing", (req,res)=>{
    res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    asdfasdfasfd
</body>
</html>`)
})

app.post("/api/notes", (req, res)=>{
    res.status(201).json({message: "Your note has been created successfully"});
})

app.put("/api/notes/:id", (req, res)=>{
    res.status(200).json({message: "Note updated successfully"});
})

app.delete("/api/notes/:id", (req, res)=>{
    res.status(200).json({message: "Note deleted successfully"});
})*/
