const JobApplicationModel=require('../models/jobApplicationModel')
const resumeModel = require('../models/resumeModel')
const UserModel = require('../models/userModels')

async function viewCandidateController(req,res){
    try {

        const userId=req.userId

       const userData=await JobApplicationModel.find({userId}).lean()

       if (!userData || userData.length === 0) {
        return res.status(404).json({
            message: "No job applications found for this employer.",
            error: true,
            success: false
        });
    }   

      const jobId=userData[0]._id

        const resumeData=await resumeModel.find({jobId}).lean()

        if (!resumeData || resumeData.length === 0) {
            return res.status(404).json({
                message: "No candidates have applied for this job.",
                error: true,
                success: false
            });
        }

        const candidateDetiails=[]

        for (const resume of resumeData){
            const candidateId=resume.userId

          const  candidate=await UserModel.findById(candidateId).lean()

          if(candidate) {

            const batchData=resume.batchNumber

            candidateDetiails.push({
                ...candidate,
                batchData:batchData
            })
          }

        }
            res.json({
                data:candidateDetiails,
                message:"Candidates details retrived successfully",
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