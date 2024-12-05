const JobApplicationModel=require('../models/jobApplicationModel')
const resumeModel = require('../models/resumeModel')
const UserModel = require('../models/userModels')

async function viewCandidateController(req,res){
    try {

        const userId=req.userId

        const userData=await JobApplicationModel.find({userId}).lean()

       const jobId=userData[0]._id

       const batchData = JSON.stringify(userData[0].batchNumber);
       
        const resumeData=await resumeModel.findById(jobId)
    
        const candidateId=resumeData.userId

        const CandidateData=await UserModel.findById(candidateId)
           const data={...CandidateData,batchData}

            res.json({
                data:data,
                message:"Candidates details",
                error:false,
                success:true
            })
        
    } catch (err) {
        res.status(400).json({
            message:err.message || err,
            error:true,
            success:false
        })
    }
}

module.exports=viewCandidateController