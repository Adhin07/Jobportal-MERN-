const JobApplicationModel = require("../models/jobApplicationModel");

async function editJobApplication(req, res) {
  try {
    const {
      batchNumber,
      jobTitle,
      companyName,
      endDate,
      salary,
      experience,
      companyLocation,
      employerType,
      skills,
      qualification,
      jobDescription,
    } = req.body;

    const jobId = req.body.jobId;

    const payload = {
      ...(batchNumber && { batchNumber: batchNumber }),
      ...(jobTitle && { jobTitle: jobTitle }),
      ...(companyName && { companyName: companyName }),
      ...(endDate && { endDate: endDate }),
      ...(salary && { salary: salary }),
      ...(experience && { experience: experience }),
      ...(companyLocation && { companyLocation: companyLocation }),
      ...(employerType && { employerType: employerType }),
      ...(skills && { skills: skills }),
      ...(qualification && { qualification: qualification }),
      ...(jobDescription && { jobDescription: jobDescription }),
    };

    const jobData = await JobApplicationModel.findById(jobId);

    const job = await JobApplicationModel.findByIdAndUpdate(jobData, payload);

    res.json({
      data: job,
      message: "Job Application Edited Successfully..!",
      success: true,
      error: false,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}
module.exports = editJobApplication;
