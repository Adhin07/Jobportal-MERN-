const JobApplicationModel = require('../models/jobApplicationModel');
const resumeModel = require('../models/resumeModel');
const UserModel = require('../models/userModels');

async function viewCandidateController(req, res) {
    try {
        const userId = req.userId; 

        const userData = await JobApplicationModel.find({ userId }).lean();

        console.log("userData", userData);

        if (!userData || userData.length === 0) {
            return res.status(404).json({
                message: "No job applications found for this employer.",
                error: true,
                success: false
            });
        }

        const candidateDetails = [];

        
        for (const job of userData) {
            const jobId = job._id; 

           
            const resumeData = await resumeModel.find({ jobId }).lean();

            if (!resumeData || resumeData.length === 0) {
                console.log(`No candidates have applied for jobId: ${jobId}`)   
                continue; 
            }

            // Iterate over each resume to fetch candidate details
            for (const resume of resumeData) {
                const candidateId = resume.userId;

                // Find the candidate by userId
                const candidate = await UserModel.findById(candidateId).lean();

                if (candidate) {
                    const batchData = resume.batchNumber;

                    // Push the candidate details along with batchData and jobId
                    candidateDetails.push({
                        ...candidate,
                        batchData: batchData,
                        jobId: jobId  // Adding jobId to identify which job the candidate applied to
                    });
                }
            }
        }

        // If there are candidate details, return them
        if (candidateDetails.length > 0) {
            res.json({
                data: candidateDetails,
                message: "Candidates details retrieved successfully",
                error: false,
                success: true
            });
        } else {
            // If no candidates found for any of the jobs, send a response
            res.status(404).json({
                message: "No candidates found for the jobs posted by this employer.",
                error: true,
                success: false
            });
        }

    } catch (err) {
        console.error("Error in viewCandidateController:", err);
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = viewCandidateController;
