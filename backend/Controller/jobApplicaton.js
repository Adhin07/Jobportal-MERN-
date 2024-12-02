const JobApplicationModel = require("../models/jobApplicationModel")

async function jobApplication(req,res) 
{
  try{
     const {jobTitle,ComponyName,endDate,salary,experience,companyLocation,employerType,skills,qualification,jobDescription}=req.body

    const payload={
        ...req.body
    }

     const jobData=new  JobApplicationModel(payload)

     const saveApplication=jobData.save()

     res.status(200).json({
        data:saveApplication,
        success:true,
        error:false,
        message:"Job Application Created..!"
     })

  } 
  
  catch(err){
    res.json(
      {
       message:err.message || err,
       error:true,
       success:false
      }
   )
  }
}

module.exports =jobApplication