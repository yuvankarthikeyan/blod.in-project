const express = require("express");
const {createNotes,getNotes, delNotes} = require("../controllers/notesControllers");

const router = express.Router();

router.post("/",createNotes);
router.get("/",getNotes);
router.delete("/",delNotes);
module.exports = router;