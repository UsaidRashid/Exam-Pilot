const Questions = require("../models/questions");

module.exports.getUpcomingExams = async (req, res) => {
  try {
    const upcomingExamsArray = await Questions.find({});

    if (upcomingExamsArray.length > 0) {
      res
        .status(200)
        .json({
          message:
            "Successfully retrieved all upcoming exams from the database",
          formattedExams: upcomingExamsArray,
        });
    } else {
      res.status(500).json({ message: "No upcoming exams exist!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in fetching upcoming exams", error });
  }
};
