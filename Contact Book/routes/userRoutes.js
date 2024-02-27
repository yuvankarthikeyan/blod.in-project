const express = require("express");
const { model } = require("mongoose");
const { registerUser, loginUser, currentrUser } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/current",validateToken,currentrUser);

module.exports = router