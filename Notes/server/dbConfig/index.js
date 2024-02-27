const mongoose = require("mongoose");


const connectDB = async() => {
    try{
        const connect = await mongoose.connect("mongodb+srv://admin:admin@madycluster.f7urtxa.mongodb.net/Notes?retryWrites=true&w=majority");
        console.log(`Connnected to ${connect.connection.host}`);
    }catch(err){
        console.log(`Error connecting to database: ${err}`);    
    }
}

module.exports = connectDB;