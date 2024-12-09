const JobApplicationModel = require("../models/jobApplicationModel");
const resumeModel = require("../models/resumeModel");
const statusModel = require("../models/saveStatus");

async function viewAppliedJob(req, res) {
    try {
        const userId = req.userId;  // Assuming userId is set in the request (e.g., through middleware)

        // Fetch applied jobs for the user from the resume model
        const appliedJobs = await resumeModel.find({ userId });

        if (!appliedJobs || appliedJobs.length === 0) {
            return res.status(404).json({
                message: "No job applied",
                error: true,
                success: false
            });
        }

        const jobDetails = [];

        // Using Promise.all to handle all asynchronous operations in parallel
        const jobPromises = appliedJobs.map(async (appliedJob) => {
            const jobId = appliedJob.jobId;

            // Fetch the most recent status for this job and user
            const statusData = await statusModel.findOne({ jobId, userId }).sort({ createdAt: -1 });

            // Fetch the job data
            const jobData = await JobApplicationModel.findById(jobId);

            if (jobData) {
                // If jobData is found, push a combined object with job details and status
                jobDetails.push({
                    ...jobData.toObject(),
                    status: statusData ? statusData.status : null,  // Ensure status is included or null if no status found
                    batchNumber: appliedJob.batchNumber,  // Include batch number if needed
                });
            }
        });

        // Wait for all jobPromises to resolve
        await Promise.all(jobPromises);

        // Return the aggregated job details
        res.json({
            data: jobDetails,
            message: "Success",
            success: true,
            error: false
        });

    } catch (err) {
        console.error(err);
        res.json({
            message: err.message || err,
            success: false,
            error: true
        });
    }
}

module.exports = viewAppliedJob;
