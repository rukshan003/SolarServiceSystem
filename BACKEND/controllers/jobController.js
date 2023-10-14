const Job = require("../models/jobModel");
const mongoose = require("mongoose");

//get all jobs
const getJobs = async (req, res) => {
  const jobs = await Job.find({}).sort({ createdAt: -1 });

  res.status(200).json(jobs);
};

//get a single job
const getJob = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job" });
  }
  const job = await Job.findById(id);

  if (!job) {
    return res.status(404).json({ error: "no such job" });
  }
  res.status(200).json(job);
};

//create a new job
const createJob = async (req, res) => {
  const { jobID, Capacity, AverageUnits, NoOfpanels, Description } = req.body;
  try {
    const job = await Job.create({
      jobID,
      Capacity,
      AverageUnits,
      NoOfpanels,
      Description,
    });
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a job
const deleteJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job" });
  }
  const job = await Job.findOneAndDelete({ _id: id });
  if (!job) {
    return res.status(404).json({ error: "no such job" });
  }
  res.status(200).json(job);
};

//update a job
const updateJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such job" });
  }
  const job = await Job.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!job) {
    return res.status(404).json({ error: "no such job" });
  }
  res.status(200).json(job);
};

module.exports = {
  getJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
};
