const express = require("express");
const router  = express.Router();

const { getContact , createContact , getSpecific , updateContact , delContact} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContact).post(createContact);



router.route("/:id").get(getSpecific).put(updateContact).delete(delContact);





module.exports = router;