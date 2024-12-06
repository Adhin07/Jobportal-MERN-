const JobApplicationModel = require("../models/jobApplicationModel")
const resumeModel = require("../models/resumeModel")

async function viewAppliedJob(req, res) {
    try {
        const userId = req.userId;  // Assuming the userId is available from the request

        // Fetch the applied jobs based on userId from the resume model
        const appliedJobs = await resumeModel.find({ userId });

        if (!appliedJobs || appliedJobs.length === 0) {
            return res.status(404).json({
                message: "No job applied",
                error: true,
                success: false
            });
        }

        const jobDetails = [];

        // Iterate over appliedJobs to fetch the job details for each applied job
        for (const appliedJob of appliedJobs) {
            const jobId = appliedJob.jobId;  // Assuming each resume document contains a jobId field


            const jobData = await JobApplicationModel.findById(jobId);

            if (jobData) {
                jobDetails.push({ ...jobData.toObject() });  // Adding the job data to the jobDetails array
            }
        }

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
