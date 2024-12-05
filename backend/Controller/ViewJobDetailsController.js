const JobApplicationModel = require("../models/jobApplicationModel")

async function viewJobDetailsController(req,res){

try{
    const allJob=await JobApplicationModel.find()

    res.json({
        data:allJob,
        message:"All Job Details",
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

module.exports=viewJobDetailsController