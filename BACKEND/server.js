require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const jobsRouter = require("./routes/jobs.js");

// express app
const app = express();

// // middleware
app.use(express.json());

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
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
