const resumeModel = require('../models/resumeModel');

async function resumeController(req, res) {
  try {
    // Ensure a file is uploaded
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
        error: true,
        success: false,
      });
    }

    
    // Log file info for debugging
    
    // Extract file data
    const { filename, path } = req.file;
    const {jobId}=req.body
    const {userId}=req.userId
  
    // Extract additional form data from req.body
    const payload = {
      ...req.file,
      filename,
      path, 
      userId: req.userId, // Assuming you have user data (e.g., from JWT or session)
      jobId: req.body.jobId, // jobId from form data
    };

    // Create a new document with the payload
    const resumeData = new resumeModel(payload);

    // Save the resume data
    const savedResumeData = await resumeData.save();

    // Respond with success
    res.status(200).json({
      data: savedResumeData,
      success: true,
      error: false,
      message: "Job resume uploaded successfully!",
    });
  } catch (err) {
    console.error("Error during resume upload:", err); // Log for debugging
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = resumeController;
