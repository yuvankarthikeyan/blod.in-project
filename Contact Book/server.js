const express = require('express');
const env = require("dotenv").config;
const app = express();
const port = process.env.port || 6000;
const routes = require("./routes/contactRoute");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require('./config/dbConnection');
const userRoutes = require("./routes/userRoutes");

connectDb();

app.use(express.json());

app.use("/api/contacts",routes);
app.use("/",userRoutes);

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Listening to ${port}`);
})

