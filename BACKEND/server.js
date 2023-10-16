require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const jobsRouter = require("./routes/jobs.js");
const cors = require("cors");
const bodyParser = require("body-parser");
// express app
const app = express();

// // middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// // routes

app.use("/api/jobs", jobsRouter);

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen to port
    app.listen(4000, () => {
      console.log("Connected to db & listening on port", 4000);
    });
  })
  .catch((err) => {
    console.log(err);
  });
