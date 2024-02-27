const express = require("express");
const port = 4000;
const app = express();
const cors= require('cors');
app.use(cors({credentials : true,origin : 'http://localhost:5173'}));
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const connectDB = require("./dbConfig/index");


connectDB();
app.use(express.json());

app.use("/",userRoutes);
app.use("/notes",noteRoutes);



app.listen(port,() => {
    console.log(`Server is running on ${port}`);
})