const JobApplicationModel = require("../models/jobApplicationModel")

async function viewJobandApply(req,res){

try{


    const {jobId} = req.query

    const allJob=await JobApplicationModel.findById(jobId)

    console.log("jobid in ",allJob)
    
    res.json({
        data:allJob,
        message:"Job details ID",
        success:true,
        error:false
    })


}
catch(err){
    res.status(400).json({
        message:err.message || err,
        error:true,
        success:false
    })

}

}

module.exports=viewJobandApply