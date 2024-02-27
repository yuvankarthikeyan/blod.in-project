const mongoose = require('mongoose');

const connectDb = async() =>{
    try{
        const connect =await mongoose.connect("mongodb+srv://admin:admin@madycluster.f7urtxa.mongodb.net/contacts-backend?retryWrites=true&w=majority");
        console.log("Connected",connect.connection.host,connect.connection.name);

    }catch(err){
        console.log(err);
        process.exit(1); //to exit the node application if there is any error while connecting to database
    }
}

module.exports = connectDb;