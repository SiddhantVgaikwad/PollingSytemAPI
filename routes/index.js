const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeContoller");


router.get("/allquestions", homeController.home);


router.use("/questions", require("./questionRoutes"));
router.use("/options", require("./optionRoutes"));

module.exports = router;