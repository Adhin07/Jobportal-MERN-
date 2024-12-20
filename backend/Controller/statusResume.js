const resumeModel = require("../models/resumeModel");
const statusModel = require("../models/saveStatus");

async function statusResumeController(req, res) {
  try {
    const { _id, batchData, status } = req.body

    const batchNumber = batchData;
    const userId = _id;

    const job = await resumeModel.find({ userId, batchNumber })

    if (!job || job.length === 0) {
      return res.status(404).json({
        message: "No job found for this candidate with the given batch.",
        success: false,
        error: true,
      });
    }

    const jobData = job[0]

    const candidate_id = jobData.userId
    const batch = jobData.batchNumber
    const jobId = jobData.jobId

    const payload = {
      userId: candidate_id,
      batchNumber: batch,
      jobId: jobId,
      status: status,
    };

    if (
      !payload.userId ||
      !payload.batchNumber ||
      !payload.jobId ||
      !payload.status
    ) {
      return res.status(400).json({
        message: "Missing required fields in the payload.",
        payload,
      });
    }

    const existingStatus = await statusModel.findOne({
      userId: candidate_id,
      jobId: jobId,
    });

    if (existingStatus) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Status already given for this candidate and job.",
        data: existingStatus,
      });
    }

    const statusData = new statusModel(payload);
    const saveStatus = await statusData.save();

    res.status(201).json({
      success: true,
      message: "Status saved successfully",
      data: saveStatus,
    });
  } catch (error) {
    console.error("Error in statusResumeController:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    }

    // Handle unexpected errors
    res.status(500).json({
      error: error.message || error,
      success: false,
    });
  }
}

module.exports = statusResumeController;
