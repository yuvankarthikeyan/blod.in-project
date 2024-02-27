const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true,"provide user name"]
    },
    fullname : {
        type : String,
        required : [true,"provide the full name"]
    },
    email : {
        type : String,
        required : [true,"provide the email"],
    },
    password : {
        type : String,
        required : [true,"Provide the passwords"]
    },
    department : {
        type : String,
        required : [true,"provide user dept"]
    }
});

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;