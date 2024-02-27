const asyncHandler = require("express-async-handler");
const notesModel = require("../models/notesModel");

const createNotes = asyncHandler(async(req,res)=>{
    const {title,content} = req.body;
    if(!title ||!content){
        res.status(400);
    }else{
        const notesDoc = await notesModel.create({
            title:title,
            content:content
        })
        res.json({
            notesDoc
        })
    }

});

const getNotes = asyncHandler(async(req,res) => {
    const notesDoc = await notesModel.find();
    res.json({
        notesDoc
    })
    
})

const delNotes = asyncHandler(async(req,res) => {
    const {id} = req.body;
    try{
        await notesModel.findByIdAndDelete(id);
        res.json({
            successMessage:"Deleted successfully"
        })
    }catch (err){
        res.json({
            message : err.message
        })
    }

})

module.exports = {createNotes,getNotes,delNotes};