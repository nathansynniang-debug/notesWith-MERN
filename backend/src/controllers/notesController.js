import Note from "../models/Notes.js";

const getAllNotes = async (req, res)=>{
    try{
        const notes = await Note.find();
        if(!notes){
            return res.status(404).json({message: "No notes found"});
        }
    res.status(200).send(notes);}
    catch(error){
        res.status(500).json({message: "Failed to fetch notes"});
    }
}
const getOneNote = async (req, res)=>{
    try{
        const note =await  Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json(note);

    }
    catch(error){
        res.status(500).json({message: "Failed to fetch the note due to internal server error"});
    }
}


const createNote= async (req,res)=>{
    try{
    const {title, content} = req.body;
    if(!title || !content){
        return res.status(400).json({message: "Title and content are required"});
    }
    const note = new Note({title, content});
    const newNote = await note.save();
    res.status(201).json({message: "Note created successfully\n"+ "note:", newNote});
}
catch(error){
    res.status(500).json({message: "Failed to create note due to internal server error"});
}
}

const updateNote=async (req,res)=>{
    try{
        const {title, content} = req.body;
        if(!title || !content){
            return res.status(400).json({message: "Title and content are required"});
        }
        const note = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if(!note){
            return res.status(404).json({message: "Note not updated successfully"});
        }
        res.status(200).json({message: "Note updated successfully", note});
    }
    catch(error){
        res.status(500).json({message: "Failed to update note due to internal server error"});
    }
}

const deleteNote=async (req,res)=>{
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote){
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json({message: "Note deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: "Failed to delete note due to internal server error\nError message: ", error});
    }
}

export {getAllNotes, getOneNote, createNote, updateNote, deleteNote};