const JobApplicationModel = require("../models/jobApplicationModel")

async function deleteJobApplication(req,res){
    try {

        const jobId=req.query.jobId

        const deleteJob=await JobApplicationModel.findByIdAndDelete(jobId)
        res.json({
            data:deleteJob,
            message:"Deleted Successfull..!",
            success:true,
            error:false 
        })
        
    } catch (error) {
        res.json({
            message:error.message || error,
            success:false,
            error:true
        })
    }
}

module.exports=deleteJobApplication