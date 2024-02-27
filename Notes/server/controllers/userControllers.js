const asyncHandler = require("express-async-handler");
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const salt = 10;
const registerUser = asyncHandler(async (req,res) =>{
    const {username , fullname , email , password , dept } = req.body;
    const hashedPassword =  bcrypt.hashSync(password,salt);
    const UserDoc = await UserModel.create({
        username: username,
        fullname:fullname,
        department:dept,
        email : email,
        password : hashedPassword
    })
    res.json({UserDoc}); 
})

const loginUser = asyncHandler(async (req,res) =>{
    const {email,password} = req.body;
    const userDoc = await UserModel.findOne({email});
    const compared = bcrypt.compareSync(password , userDoc.password);
    if(compared){
        res.json({
            message : "confirmed"
        })
    }else{
        res.status(400);
        res.json({
            message : "Not ok"
        })
    }
})

module.exports = {registerUser , loginUser};