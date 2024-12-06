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
    
    const { filename, path } = req.file;

    const payload = {
       batchNumber:req.body.job.batchNumber,
      filename, 
      path, 
      userId: req.userId, 
      jobId: req.body.job._id, 
    };

    const existingResume=await resumeModel.findOne({
      userId: req.userId, 
      jobId: req.body.job._id, 
    })

    if(existingResume){
      return res.json({
        message:"You have already applied for this job",
        error:true,
        success:false
      })
    }

   
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
