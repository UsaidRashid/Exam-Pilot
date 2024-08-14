const express = require("express");
const router = express.Router();
const examController = require("../controllers/exams");
const upload = require("../configs/multerConfig");

router
  .route("/generate-questions")
  .post(upload.single("syllabusImage"), examController.generateQuestions);

router.route("/upcoming-exams").post(examController.getUpcomingExams);

router.route("/check-exam").post(examController.checkExam);

module.exports = router;
