const express = require("express");
const router = express.Router();
const examController = require("../controllers/exams");

router.route("/").post(examController.getUpcomingExams);

module.exports = router;
