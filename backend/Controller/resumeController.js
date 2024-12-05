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
    

    console.log("req.body",req.body.job)
    const { filename, path } = req.file;

    const payload = {
      ...req.body.job,
      filename, 
      path, 
      userId: req.userId, 
      jobId: req.body.job._id, 
    };

   
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
