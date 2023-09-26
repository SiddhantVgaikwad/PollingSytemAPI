const Question = require("../models/questionSchema");


module.exports.home = async function (req, res) {
  try {
    // finding all the questions and returning
    let question = await Question.find({}).populate({
      path: "options",
    });

    if (question) {
      return res.status(200).json({
        message: "successfully , find out your questions !",
        data: question,
      });
    } else {
      return res.status(400).json({
        message: "Question does not does not exists",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Error from the server ",
      data: err,
    });
  }
};


