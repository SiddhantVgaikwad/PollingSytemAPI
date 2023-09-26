const express = require("express");
const router = express.Router();

const questionController = require("../controller/questionController");

//Question Created
router.post("/create", questionController.create);

//Get All  Question 
router.get("/:id", questionController.showQuestion);

//Deleted Questions
router.delete("/:id/delete", questionController.deleteQuestion);

//Create Options
router.post("/:id/options/create", questionController.addOptions);

module.exports = router;