const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/TaskRoutes");


const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(cors());
app.use("/api",router);


mongoose.connect(process.env.MONGO_URI).then(()=>console.log("connected")).catch((err)=>console.log(err))

app.listen(PORT,()=> {
    console.log(`Server running on port ${PORT}`);
})
