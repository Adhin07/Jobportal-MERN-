const resumeModel = require("../models/resumeModel");
const statusModel = require("../models/saveStatus");

async function statusResumeController(req, res) {
  try {
    const { _id, batchData, status } = req.body;

    const batchNumber = batchData;
    const userId = _id;

    // Find the job (assuming you're retrieving the job data from another model like resumeModel)
    const job = await resumeModel.find({ userId, batchNumber });

    if (!job || job.length === 0) {
      return res.status(404).json({
        message: "No job found for this candidate with the given batch.",
        success: false,
        error: true,
      });
    }

    const jobData = job[0];

    const candidate_id = jobData.userId;
    const batch = jobData.batchNumber;
    const jobId = jobData.jobId;

    // Construct the payload
    const payload = {
      userId: candidate_id,
      batchNumber: batch,
      jobId: jobId,
      status: status,
    };

    // Check if all required fields are in the payload
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

    // Check if a status entry with the same userId and jobId already exists
    const existingStatus = await statusModel.findOne({
      userId: candidate_id,
      jobId: jobId,
    });

    // If status already exists, return an error with message
    if (existingStatus) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Status already given for this candidate and job.",
        data: existingStatus,
      });
    }

    // Create the new status document if it doesn't exist already
    const statusData = new statusModel(payload);
    const saveStatus = await statusData.save();

    // Send response indicating status saved successfully
    res.status(201).json({
      success: true,
      message: "Status saved successfully",
      data: saveStatus,
    });
  } catch (error) {
    console.error("Error in statusResumeController:", error);

    // Check for validation errors
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
