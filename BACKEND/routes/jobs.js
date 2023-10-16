const express = require("express");
const router = express.Router();
const Job = require("../models/jobModel");
const {
  createJob,
  getJobs,
  getJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobController");
console.log("hi");
//Get all jobs
router.get("/", getJobs);

//Get a single job
router.get("/:id", getJob);

//POST a new job
router.post("/", createJob);

//DELETE a job
router.delete("/:id", deleteJob);

//update jobs
// router.patch("/:id", updateJob);

router.put("/:id", updateJob);
module.exports = router;
