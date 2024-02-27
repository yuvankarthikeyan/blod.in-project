//@desc Register a user
//@route POST /api/users/register
//@access public
const SECRET = "mady123";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const registerUser = asyncHandler(async (req,res) => {
    const {username , email , password } = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User Already Registered");
    }
    //Hash password before saving to database
    const hashedPassword = await bcrypt.hashSync(password,10);
    console.log(hashedPassword);
    const user = await  User.create({
        username,
        email,
        password : hashedPassword
    });
    console.log(user);
    if(user){
        res.status(201).json({
            _id : user.id,
            email : user.email,
        });
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    
    res.json({
        message : "register the user"
    });
 });
 
const loginUser = asyncHandler(async (req,res) => {
    const { email , password } = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");

    }
    const user = await User.findOne({email});
    if (!user ) {
        res.send(400);
        throw new Error("User not found!");

    }
    const compared = await bcrypt.compare(password,user.password);
    if(user && compared){
        //generate token and send it to client side
        const accessToken = jwt.sign({
            user:{
                username : user.username,
                email : user.email,
                id : user.id,
            },
        },SECRET,
        {
            expiresIn : "15m"
        });
        res.status(200).json({
            accessToken
        })
    }else{
        res.status(400);
        throw new Error('Invalid credentials!');
    }
    
});
//private
const currentrUser = asyncHandler(async (req,res) => {
    res.json(req.user);
});
module.exports = { registerUser , loginUser , currentrUser }