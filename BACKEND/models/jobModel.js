const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    jobID: {
      type: String,
      required: true,
    },
    Capacity: {
      type: Number,
      required: true,
    },
    AverageUnits: {
      type: Number,
      required: true,
    },
    NoOfpanels: {
      type: Number,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
