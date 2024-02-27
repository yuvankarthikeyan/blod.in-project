const taskModel = require("../models/TaskModel");

const getTasks = async(req,res) => {
    
    const task = await taskModel.find();
    res.send(task);
}

const saveTask = async(req,res) => {
    const {task} = req.body;
    await taskModel.create({task}).then((data) => {
        console.log(data);
        res.json({
            data
        })
        res.status(201);
    }).catch((err)=>{
        console.log(err);
        res.json({
            message: "Error while creating Task"
        })
    })
}

const updateTask = async(req,res) => {
    const {id} = req.params;
    const {task} = req.body;
    await taskModel.findByIdAndUpdate(id,{task}).then(()=>console.log("success")).catch((err)=>console.log(err));
}


const deleteTask = async(req,res) => {
    const {id} = req.params;
    
    await taskModel.findByIdAndDelete(id).then(()=>console.log("success")).catch((err)=>console.log(err));
}


module.exports = { getTasks,saveTask ,updateTask,deleteTask};