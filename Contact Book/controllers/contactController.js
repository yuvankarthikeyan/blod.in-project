
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc for get all the contacts 
//@route will be /api/contacts
//@access public

const getContact = asyncHandler(async (req,res) =>{
    const contacts = await Contact.find({user_id : req.user.id});
    res.status(200).json({
        contacts
    })
});
const createContact = asyncHandler(async(req,res) =>{
    console.log(
        req.body
    );
    const { name , email , phone } = req.body;
    if( !name || !email || !phone) {
        res.status(400);
        throw new Error("all fields are mandatory");

    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id : req.user.id,
    });

    res.status(201).json({
        contact
    })
});
const getSpecific = asyncHandler(async (req,res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error(`No such id found`);
    } else{
        res.status(200).json({
            contact
        })
    }
});
const updateContact = asyncHandler(async (req,res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error(`No such id found`);
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("forbidden user!")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true }
    );
    res.status(200).json({ 
        updatedContact
    })
});
const delContact = asyncHandler(async(req,res) =>{
    const contact = await Contact.findById(req.params.id);
    
    if(!contact){
        res.status(404).res.json({
            message : "Nothing found"
        })
        throw new Error(`No such id found`);
        
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("forbidden user!")
    }
    await Contact.deleteOne({_id : req.params.id});
    res.status(200).json({
        contact
    })
});

module.exports = {getContact , createContact , getSpecific , updateContact , delContact};