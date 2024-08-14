require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
const path = require("path");


require("./configs/dbConfig");
require("./configs/multerConfig");
const sessionConfig = require("./configs/sessionConfig");
const passport = require("./configs/passportConfig");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "./configs/uploads")));
app.use(sessionConfig);
app.use(passport.initialize());
app.use(passport.session());


app.use((err, req, res, next) => {
  console.error(err);

  if (err.status) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const userRouter = require("./routes/users");
const examRouter = require("./routes/exams");

app.use("/", userRouter);
app.use("/exams", examRouter);

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
