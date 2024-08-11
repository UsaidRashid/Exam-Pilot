const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questions");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { isLoggedIn, validateQuestions } = require("../middleware");

router
  .route("/generate-questions")
  .post(upload.single("syllabusImage"), questionsController.generateQuestions);

router
  .route("/fetch-questions")
  .post(isLoggedIn, questionsController.fetchQuestions);

module.exports = router;
