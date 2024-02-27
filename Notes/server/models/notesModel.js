const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    title : {
        type : String,
        required : [true,"Please put the title"],
    },
    content : {
        type : String,
        required : [true,"Please put the content"],
    }
});

const notesModel = mongoose.model("Notes",notesSchema);

module.exports = notesModel;