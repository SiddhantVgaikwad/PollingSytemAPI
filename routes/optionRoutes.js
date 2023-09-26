const express = require("express");
const router = express.Router();
const optionController = require("../controller/optionController");


//add vote
router.post("/:id/add_vote", optionController.addVote);

//delete a option 
router.delete("/:id/delete", optionController.deleteOption);

module.exports = router;