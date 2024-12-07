const JobApplicationModel = require("../models/jobApplicationModel")

async function viewCreatedJob(req,res){
    try {

        const userId=req.userId

        const createdJob=await JobApplicationModel.find({userId})

        res.json({
            message:"Employer created Job",
            data:createdJob,
            success:true,
            error:true
        })
        
    } catch (error) {
        res.json({
            message:error.message || error,
            error:true,
            success:false
        })
    }
}

module.exports=viewCreatedJob