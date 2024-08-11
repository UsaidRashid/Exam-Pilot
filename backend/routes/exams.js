const express = require("express");
const router = express.Router();

const examController = require("../controllers/exams");
const {isLoggedIn} = require("../middleware");

router
    .route("/")
        .post(isLoggedIn,examController.getUpcomingExams);


module.exports=router;