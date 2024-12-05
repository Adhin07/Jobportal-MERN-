const resumeModel = require("../models/resumeModel")

async function viewAppliedJob(req,res){
    try {

        userId=req.userId

        const appliedJob=await resumeModel.find({userId})

        res.json({
            data:appliedJob,
            message:"Success",
            success:true,
            error:false
        })
        
    } catch(err){
        res.json()
           ({ 
            message:err.message || err,
            success:false,
            error:true
        })
    }
}

module.exports=viewAppliedJob